import Navbar from '../components/common/Navbar';
import AvatarList from '../components/Avatar/AvatarList';
import  { AvatarProvider } from '../context/AvatarContext';

export default function AvatarPage() {
  return (
    <div>
      <Navbar/>
      <AvatarProvider>
        <AvatarList/>
      </AvatarProvider>
    </div>
  )
}