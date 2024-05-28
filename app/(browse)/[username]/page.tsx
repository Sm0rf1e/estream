import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { NextPage } from 'next'
import { notFound } from 'next/navigation'
import Actions from './_components/actions'
import { isBlockedByUser } from '@/lib/block-service'
import { StreamPlayer, StreamPlayerSkeleton } from '@/components/stream-player'
import { Suspense } from 'react'

interface Props {
  params: {
    username: string
  }
}

const UserPage: NextPage<Props> = async ({params}) => {
  const user = await getUserByUsername(params.username)

  if(!user || !user.stream) {
    notFound()
  }

  const isFollowing = await isFollowingUser(user.id)
  const isBlocked = await isBlockedByUser(user.id)

  if (isBlocked) {
    notFound()
  }

  return <Suspense fallback={<div className='h-full'><StreamPlayerSkeleton/></div>}>
    <StreamPlayer
      user={user}
      stream={user.stream}
      isFollowing={isFollowing}
    />
  </Suspense>
}

export default UserPage