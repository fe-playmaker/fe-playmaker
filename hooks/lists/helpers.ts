import { ICommonListItem } from 'dummy-api/lists/common'

import { ISelectItem } from '@/components/common/Select/types'

export const mapToSelectItem = (items: ICommonListItem[]): ISelectItem[] =>
  items.map(item => ({ value: item.id, ...item }))
