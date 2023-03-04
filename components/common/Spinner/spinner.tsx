import { cva, VariantProps } from 'class-variance-authority'

import SpinnerIcon from '@/icons/Spinner.svg'

const spinnerCva = cva('animate-spin', {
  variants: {
    size: {
      large: 'w-[3.5rem] stroke-[4px]',
      medium: 'w-[2.5rem] stroke-[3px]',
      small: 'w-6 stroke-[2px]',
    },
    theme: {
      brand: 'stroke-primary',
      default: 'stroke-dark dark:stroke-white',
    },
  },
  defaultVariants: {
    theme: 'brand',
  },
})

interface IProps extends VariantProps<typeof spinnerCva> {}

const Spinner = (props: IProps) => <SpinnerIcon className={spinnerCva(props)} />

export default Spinner
