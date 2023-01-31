import { IssueType } from "../../type/issueType";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Button, CardActions, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { actions } from './../../redux/slice/issue';

type PropType={
  item:IssueType
}
const IssueItem = ({item}:PropType) => {
  const dispatch = useDispatch()

  const removeIssueHandler=()=>{
    dispatch(actions.removeFromList(item.id))
  }
  return (
    <div >
      <Card sx={{ maxWidth: 180, margin: "10px auto" }}>
        <CardContent>
          <TextField
            id="standard-basic"
            label="What needs to be done?"
            variant="standard"
          />
        </CardContent>
        <CardActions>
        <Button size="small" onClick={removeIssueHandler}>Remove</Button>
      </CardActions>
      </Card>
    </div>
  );
};
export default IssueItem;
