import React, { useReducer } from "react"
import { initialState } from "./initialState"
import { reducer } from "./reducer"
import { constant } from "../constant"

export const BioContext = React.createContext(initialState)

export function BioContextProvider({children}){
  const [state, dispatch] = useReducer(reducer, initialState)

  const setAboutMe = (userInput) =>{
    dispatch({
      type: constant.ABOUT_ME,
      payload: userInput
    })
  }

  const setPDFUrl = (url) =>{
    dispatch({
      type: constant.UPLOAD_PDF,
      payload: url
    })
  }

  const setBloodGroup = (userInput) =>{
    dispatch({
      type: constant.BLOOD_GROUP,
      payload: userInput
    })
  }

  const value ={
    profile:state?.profile,
    setAboutMe: setAboutMe,
    setPDFUrl: setPDFUrl,
    setBloodGroup: setBloodGroup
  }

  return(
    <BioContext.Provider value={value}> {children} </BioContext.Provider>
  )
}