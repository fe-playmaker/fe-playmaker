import { API } from 'types/types'

import { ISelectItem } from '@/components/common/Select/types'

export const mapToSelectItem = (
  items: API['CommonListItem'][],
): ISelectItem[] => items.map(item => ({ value: item.id, ...item }))
