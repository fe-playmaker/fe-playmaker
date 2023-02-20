import BallIcon from '@/icons/Ball.svg'
import ClockIcon from '@/icons/ClockVariant.svg'
import GraphIcon from '@/icons/Graph.svg'
import ShieldIcon from '@/icons/ShieldPerfect.svg'

const MatchTableIconLegend = ({
  goals,
  clearAccounts,
}: {
  goals: boolean
  clearAccounts: boolean
}) => (
  <div className="flex items-center justify-center gap-7 py-5">
    <Container>
      <ClockIcon className="icon-16" /> Minuty
    </Container>
    {goals && (
      <Container>
        <BallIcon className="icon-16" /> Bramki
      </Container>
    )}
    {clearAccounts && (
      <Container>
        <ShieldIcon className="icon-16" /> Czyste konta
      </Container>
    )}
    <Container>
      <GraphIcon className="icon-16" /> PlayMaker Score
    </Container>
  </div>
)

const Container = ({ children }: { children: React.ReactNode }) => (
  <span className="flex gap-3 fill-darkAlpha-20 font-inter text-body-xs font-medium text-darkAlpha-40">
    {children}
  </span>
)

export default MatchTableIconLegend
