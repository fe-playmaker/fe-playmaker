'use client'

import SelectedIcon from 'img/icons/Check.svg'
import { useState } from 'react'

import { Chip } from './Chip'

interface ChipsProps {
  chips: string[]
}

export const Chips = ({ chips }: ChipsProps) => {
  const [selectedChips, setSelectedChips] = useState<string[]>([])

  const selectChipHandler = (chip: string, isSelected: boolean) => {
    if (isSelected) setSelectedChips([...selectedChips, chip])
    else setSelectedChips(selectedChips.filter(c => c !== chip))
  }

  return (
    <div className="flex w-full items-center gap-4 overflow-x-auto py-4">
      {chips.map(c => (
        <Chip
          key={c}
          title={c}
          selectChipHandler={selectChipHandler}
          icon={<SelectedIcon />}
        />
      ))}
    </div>
  )
}
