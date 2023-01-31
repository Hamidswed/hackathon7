import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function IssueCard() {
  return (
    <Card sx={{ maxWidth: 180, margin:"0 auto" }}>
      <CardContent>
        <TextField id="standard-basic" label="What needs to be done?" variant="standard" />
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
