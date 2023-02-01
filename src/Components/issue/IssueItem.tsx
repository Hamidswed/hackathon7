import { IssueType } from "../../type/issueType";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Button, CardActions, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./../../redux/slice/issue";
import { RootState } from "../../redux/store";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./issueItem.css";

type PropType = {
  item: IssueType;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const IssueItem = ({ item }: PropType) => {
  const [open, setOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const handleOpen = () => {
    isModal ? setOpen(true) : <p>""</p>;
  };
  const handleClose = () => setOpen(false);

  const [isEnter, setIsEnter] = useState<boolean>(false);
  const issueTitle = useSelector((state: RootState) => state.issueTitle);
  const dispatch = useDispatch();

  const removeIssueHandler = () => {
    dispatch(actions.removeFromList(item.id));
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.userInputHandler(e.target.value));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(actions.addToIssueTitle());
      dispatch(actions.addToList(item));
      setIsEnter(true);
      setIsModal(true);
    }
  };
  console.log("item:", item);
  return (
    <div onClick={handleOpen}>
      <Card sx={{ maxWidth: 200, margin: "10px auto" }}>
        <CardContent>
          {!isEnter ? (
            <TextField
              id="standard-basic"
              label="What needs to be done?"
              variant="standard"
              onChange={inputHandler}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <p>{issueTitle[item.id - 1]}</p>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={removeIssueHandler}>
            Remove
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {issueTitle[item.id - 1]}
          </Typography>
          <div className="issue-modal">
            <h4>Detail</h4>
            <div className="issue-modal-table">
              <div>
                <p>Assignee</p>
                <p>Labels</p>
                <p>Reporter</p>
              </div>
              <div>
                <p>Unassigned</p>
                <p>None</p>
                <p>None</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default IssueItem;
