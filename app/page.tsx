import { Button } from '../components/common/Button/Button'
import { Avatar } from '../components/common/user/Avatar'
import { PlayMakerScore } from '../components/common/user/Score/PlayMakerScore'

const Home = () => (
  <div>
    <Button intent="primary">Primary</Button>
    <Avatar />
    <PlayMakerScore scoreValue={49} />
  </div>
)

export default Home
