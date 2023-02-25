import { createContext } from 'react'

export interface ITableSettings {
  rowHeight: string
  expandedRowHeight?: string
  summaryRowHeight: string
  columnsClass: string
  paddingRightColumnClass?: string
}

export const TableSettingsContext = createContext<ITableSettings>({
  rowHeight: '',
  summaryRowHeight: '',
  expandedRowHeight: undefined,
  columnsClass: '',
  paddingRightColumnClass: 'pl-4',
})
