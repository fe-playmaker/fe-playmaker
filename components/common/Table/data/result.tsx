import { cx } from 'class-variance-authority'
import React from 'react'

interface IProps {
  status: 'win' | 'loss' | 'draw'
}

export const TableDataResult = ({ status }: IProps) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>{resultBadgeMap[status]}</>
)

export default TableDataResult

const baseResult =
  'w-[1.5rem] h-[1.25rem] flex items-center justify-center font-inter text-body-xs text-white font-bold'

const resultBadgeMap = {
  win: <div className={cx('bg-greenShade-50', baseResult)}>W</div>,
  loss: <div className={cx('bg-orangeShade-50', baseResult)}>P</div>,
  draw: <div className={cx('bg-darkShade-40', baseResult)}>R</div>,
}
