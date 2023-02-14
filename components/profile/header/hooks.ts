import { useQuery } from '@tanstack/react-query'
import { returnAfterTime } from 'dummy-api/helpers'
import { profileHeaderData } from 'dummy-api/profile/header'

export const useProfileHeader = (id: string) => {
  const { isLoading, isError, isFetching, data } = useQuery({
    queryKey: ['profile-header', id],
    queryFn: returnAfterTime(profileHeaderData, 2000),
    retry: 3,
  })

  return { isLoading, isError, isFetching, data }
}
