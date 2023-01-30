import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./Board.css";
import Filter from "./Filter";
import Breadcrumb from "./Breadcrumb";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Board = () => {
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
          <Button startIcon={<AddIcon />}>
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
