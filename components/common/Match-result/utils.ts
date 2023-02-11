import { IMatchResult } from './types'

export const shortStatusMap: Record<IMatchResult['status'], string> = {
  win: 'W',
  draw: 'R',
  loss: 'P',
}
