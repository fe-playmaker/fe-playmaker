import { Chip } from './Chip'

interface ChipProps {
  title: string
  isSelected: boolean
}

interface ChipsProps {
  readonly chips: ChipProps[]
}

export const Chips = ({ chips }: ChipsProps) => (
  <div className="flex items-center gap-4">
    {chips.map(chip => (
      <Chip
        key={chip.title}
        query={chip.title}
        size="small"
        intent={chip.isSelected ? 'selected' : 'unselected'}
      >
        {chip.title}
      </Chip>
    ))}
  </div>
)
