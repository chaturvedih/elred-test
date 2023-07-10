import { initialState } from "./initialState"
import { constant } from "../constant"

export const reducer=(state = initialState, action)=>{
  switch(action.type){
    case constant.ABOUT_ME:
      return {...state, profile:{...state.profile, aboutMe: action.payload}}
    case constant.UPLOAD_PDF:
      return {...state, profile:{...state.profile, pdfUrl: action.payload}}
    case constant.BLOOD_GROUP:
      return {...state, profile:{...state.profile, bloodGroup: action.payload}}
    default:
      return state
  }
}