import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./Board.css";
import Filter from "./Filter";
import Breadcrumb from "./Breadcrumb";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IssueList from "../issue/IssueList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { actions } from './../../redux/slice/issue';

const Board = () => {
  const issueState = useSelector((state:RootState)=>state.issue)
  const issueTitle = useSelector((state:RootState)=>state.issueTitle)
  const userInput = useSelector((state:RootState)=>state.userInput)
  const idState = useSelector((state:RootState)=>state.id)
  const dispatch = useDispatch()
  const createIssueHandler = () => {
    dispatch(actions.addToList({id:idState,name:userInput}))
  };
  console.log(issueState)
  console.log("user input:",userInput);
  console.log("issue list:",issueTitle);
  return (
    <div className="board-container">
      <div>
        <div style={{ height: "100px" }}>
          <Breadcrumb />
        </div>
        <div className="board-navbar">
          <TextField id="outlined-basic" label="Search..." variant="outlined" />
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="http://xsgames.co/randomusers/avatar.php?g=male"
            />
            <Avatar
              alt="Travis Howard"
              src="http://xsgames.co/randomusers/avatar.php?g=female"
            />
            <Avatar
              alt="Cindy Baker"
              src="http://api.lorem.space/image/face?w=150&h=150"
            />
            <Avatar
              alt="Agnes Walker"
              src="http://api.multiavatar.com/zoe.svg"
            />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <span>Group by: </span>
          <Filter />
        </div>
      </div>
      <div className="board-cols">
        <div className="board-col">
          <IssueList />
          <Button startIcon={<AddIcon />} onClick={createIssueHandler}>
            Create issue
          </Button>
        </div>
        <div className="board-col">col2</div>
        <div className="board-col">col3</div>
      </div>
    </div>
  );
};
export default Board;
