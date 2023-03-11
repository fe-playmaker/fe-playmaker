import clsx from 'clsx'

interface IProps {
  className?: string
}
const PremiumBadge = ({ className }: IProps) => (
  <div
    className={clsx(
      'px-3 py-2 font-inter text-body-sm font-bold text-[#553E02] premium-badge-bg',
      className,
    )}
  >
    Premium
  </div>
)

export default PremiumBadge
