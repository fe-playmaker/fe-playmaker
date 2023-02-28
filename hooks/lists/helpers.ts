import { API } from 'types/types'

import { ISelectItem } from '@/components/common/Select/types'

export const mapToSelectItem = <T extends API['CommonListItem']>(
  items: T[],
) => {
  const mapped = items.map(item => ({
    value: item.id,
    ...item,
  })) satisfies ISelectItem[]

  return mapped
}
