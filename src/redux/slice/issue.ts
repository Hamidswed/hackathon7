import { createSlice } from "@reduxjs/toolkit";
import { IssueType } from "../../type/issueType";

type InitialType={
  issue:IssueType[]
  id:number
  userInput:string
  issueTitle:string[]
}
const initialState:InitialType={
  issue:[],
  id:1,
  userInput:"",
  issueTitle:[]
}

const issueSlice = createSlice({
  name:"issue",
  initialState,
  reducers:{
    addToList:(state,action)=>{
      const index = state.issue.findIndex((item)=>item.id === action.payload.id)
      if (index===-1) state.issue.push({...action.payload, name:state.userInput})
      else {
        state.id = (action.payload.id)+1
        const updatedState={id:state.id, name:state.userInput}
        state.issue.push(updatedState)
      }
    },
    removeFromList: (state, action) => {
      const updatedState = state.issue.filter(
        (item) => item.id !== action.payload
      );
      state.issue = updatedState;
    },
    userInputHandler:(state,action)=>{
      state.userInput = action.payload
    },
    addToIssueTitle:(state)=>{
      state.issueTitle.push(state.userInput)
    }
  }
})

export const actions = issueSlice.actions
export default issueSlice.reducer