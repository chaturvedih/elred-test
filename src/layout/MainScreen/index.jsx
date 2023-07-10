import BioView from "../BioScreen/bioView";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css'

export default function MainScreen(){
  return(
    <div>
      <header className="profile__heading"> <ChevronLeftIcon/> Bio </header>
      <BioView/>
    </div>
  )
}