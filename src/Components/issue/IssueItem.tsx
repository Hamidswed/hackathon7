import { IssueType } from "../../type/issueType";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Button, CardActions, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './../../redux/slice/issue';
import { RootState } from "../../redux/store";
import { useState } from "react";

type PropType={
  item:IssueType
}
const IssueItem = ({item}:PropType) => {
  const [isEnter, setIsEnter] = useState<boolean>(false)
  const userInput = useSelector((state:RootState)=>state.userInput)
  const issueTitle = useSelector((state:RootState)=>state.issueTitle)
  const dispatch = useDispatch()

  const removeIssueHandler=()=>{
    dispatch(actions.removeFromList(item.id))
  }
  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(actions.userInputHandler(e.target.value))
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(actions.addToIssueTitle())
      dispatch(actions.addToList(item))
      setIsEnter(true)
    }
  };
  console.log("item:", item);
  return (
    <div >
      <Card sx={{ maxWidth: 180, margin: "10px auto" }}>
        <CardContent>
          {!isEnter?<TextField
            id="standard-basic"
            label="What needs to be done?"
            variant="standard"
            onChange={inputHandler}
            onKeyDown={handleKeyDown}
          />:<p>{issueTitle[item.id-1]}</p>}
          
          
        </CardContent>
        <CardActions>
        <Button size="small" onClick={removeIssueHandler}>Remove</Button>
      </CardActions>
      </Card>
    </div>
  );
};
export default IssueItem;
