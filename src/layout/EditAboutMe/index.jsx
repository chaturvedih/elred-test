import { useContext, useState } from "react"
import {Link} from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './style.css'
import { BioContext } from "../../context/action";

export default function EditAboutMe(){
  const context = useContext(BioContext)
  const [aboutMeError, setAboutMeError] = useState({value:context.profile.aboutMe,isError:true, errMessage:''})
  const [pdfError, setPdfError] = useState({value:context.profile.pdfUrl,isError:true, errMessage:''})
  const [bloodGroup, setBloodGroup] = useState({value:context.profile.bloodGroup, isError: true, errMessage:''})

  const handleAboutMe = (event) =>{
    if(event.target.value.length<3){
      setAboutMeError({...aboutMeError, isError:true, errMessage: 'Character is less than 3!'})
      return
    }
    if(event.target.value.length>500){
      setAboutMeError({...aboutMeError, isError:true, errMessage: 'Charater is greater than 500!'})
      return
    }
    setAboutMeError({isError:false, errMessage: '', value:event.target.value})
  }

  const UploadFile=(event)=>{
    const file = event.target.files[0]
    if(file.type !== 'application/pdf'){
      setPdfError({...pdfError, isError:true, errMessage:'Please Upload PDF Only!'})
      return
    }
    if(file.size> 5242880){
      setPdfError({...pdfError, isError: true, errMessage: 'Please Upload 5MB file!'})
      return
    }

    const pdfUrl = URL.createObjectURL(file)
    setPdfError({value: pdfUrl, isError: false, errMessage: ''})
  }

  const handleBloodGroup = (event) => {
    if(!event.target.value.trim) {
      setBloodGroup({...bloodGroup, isError: true, errMessage: 'Please Select Blood Group!'})
      return
    }

    setBloodGroup({value: event.target.value, isError: false, errMessage: ''})
  }

  const checkBtnEnable = () =>{
    return bloodGroup.isError || aboutMeError.isError || pdfError.isError
  }

  const saveData = () =>{
    if(checkBtnEnable) return
    
    context.setAboutMe(aboutMeError.value)
    context.setPDFUrl(pdfError.value)
    context.setBloodGroup(bloodGroup.value)
  }

  return(
    <div className='bio__edit__container'>
      <header className="profile__heading"> 
        <Link to='/'> <ChevronLeftIcon /> </Link>
        Bio 
      </header>
      <div className="about__me">
        <label className="label"> Write Something about yourself </label>
        <textarea className="text-area" placeholder="Write something here..." onChange={(e) => handleAboutMe(e)} />
        {aboutMeError.isError && <p className="error-msg"> { aboutMeError.errMessage } </p>}
      </div>
      
      <div className="upload__resume__container">
        <div className="upload-resume-box">
          <input type="file" onChange={(e) => UploadFile(e)}/>
        </div>
        {pdfError.isError && <p className="error-msg"> { pdfError.errMessage } </p>}
      </div>


      <div className="select__container">
        <label className="label"> Blood Group </label> <br/>
        <select className="selectBloodGroup" name="bloodGroup" onChange={(e) => handleBloodGroup(e)} >
          <option>Select blood group</option>
          <option>A+</option>
          <option>AB</option>
          <option>O-</option>
        </select>
        {bloodGroup.isError && <p className="error-msg"> {bloodGroup.errMessage} </p> }
      </div>

      <div className="btn__container">
        <button className={checkBtnEnable() ?"disable__btn" :"save__btn"} onClick={()=>saveData()}> Save Button </button>
      </div>
    </div>
  )
}