import { IssueType } from "../../../type/issueType";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Button, CardActions, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../redux/slice/issue";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import Box from "@mui/material/Box";

type PropType = {
  item: IssueType;
};
const ProgressItem = ({ item }: PropType) => {
  const issueTitle = useSelector((state: RootState) => state.issueTitle);
  const dispatch = useDispatch();
  const removeIssueHandler = () => {
    dispatch(actions.removeFromList(item.id));
  };
  return (
    <div>
      <Card sx={{ maxWidth: 200, margin: "10px auto" }}>
        <CardContent><p>{issueTitle[item.id-1]}</p></CardContent>
        <CardActions>
          <Button size="small" onClick={removeIssueHandler}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default ProgressItem;
