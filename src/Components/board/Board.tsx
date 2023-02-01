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
import { actions } from "./../../redux/slice/issue";
import { DndContext } from "@dnd-kit/core";
import {useDroppable} from '@dnd-kit/core';
import ProgressList from "../issue/progress/ProgressList";

const Board = () => {
  const issueState = useSelector((state: RootState) => state.issue);
  const progressTitle = useSelector((state: RootState) => state.progress);
  const issueTitle = useSelector((state: RootState) => state.issueTitle);
  const userInput = useSelector((state: RootState) => state.userInput);
  const idState = useSelector((state: RootState) => state.id);
  const dispatch = useDispatch();
  const createIssueHandler = () => {
    dispatch(actions.addToList({ id: idState, name: userInput }));
  };
  console.log(issueState);
  console.log("user input:", userInput);
  console.log("issue list:", issueTitle);

  const {setNodeRef: setFirstDroppableRef} = useDroppable({
    id: 'droppable-1',
  });
  const {setNodeRef: setSecondDroppableRef} = useDroppable({
    id: 'droppable-2',
  });
  const {setNodeRef: setThirdDroppableRef} = useDroppable({
    id: 'droppable-2',
  });

  
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
      <DndContext>
        <div className="board-cols">
          <div className="board-col" ref={setFirstDroppableRef}>
            <p>
              TO DO{" "}
              {issueState.length === 0
                ? ""
                : issueState.length === 1
                ? `${issueState.length} ISSUE`
                : `${issueState.length} ISSUES`}
            </p>
            <IssueList />
            <Button startIcon={<AddIcon />} onClick={createIssueHandler}>
              Create issue
            </Button>
          </div>
          <div className="board-col" ref={setSecondDroppableRef}>
          <p>
          IN PROGRESS{" "}
              {progressTitle.length === 0
                ? ""
                : progressTitle.length === 1
                ? `${progressTitle.length} ISSUE`
                : `${progressTitle.length} ISSUES`}
            </p>
            <ProgressList/>
          </div>
          <div className="board-col" ref={setThirdDroppableRef}>DONE</div>
        </div>
      </DndContext>
    </div>
  );
};
export default Board;
