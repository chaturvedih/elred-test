import { useContext } from 'react';
import {Link} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BioContext } from '../../context/action';
import './style.css'

export default function BioView(){
  const bioContext = useContext(BioContext)

  return(
    <div className='bio__view__container'>
      <div className='about__me'>
        <div className='about-me-label'>
          <label> About Me </label>
          <Link to='/edit/about-me'>
           <EditIcon sx={{width:'0.6em', cursor:'pointer'}} />
          </Link>
        </div>
        <span> {bioContext.profile.aboutMe} </span>
      </div>

      <div className='blood__group'>
        <label> Blood group </label>
        <span> {bioContext.profile.bloodGroup} </span>
      </div>

      <button className='resume__btn'>
        Resume
        <ChevronRightIcon/>
      </button>
    </div>
  )
}