import { createSlice } from "@reduxjs/toolkit";
import { IssueType } from "../../type/issueType";

type InitialType={
  issue:IssueType[]
  id:number
}
const initialState:InitialType={
  issue:[],
  id:1
}

const issueSlice = createSlice({
  name:"issue",
  initialState,
  reducers:{
    addToList:(state,action)=>{
      const index = state.issue.findIndex((item)=>item.id === action.payload.id)
      if (index===-1) state.issue.push(action.payload)
      else {
        state.id = (action.payload.id)+1
        const updatedState={...action.payload, id:state.id}
        state.issue.push(updatedState)
      }
    },
    removeFromList: (state, action) => {
      const updatedState = state.issue.filter(
        (item) => item.id !== action.payload
      );
      state.issue = updatedState;
    }
  }
})

export const actions = issueSlice.actions
export default issueSlice.reducer