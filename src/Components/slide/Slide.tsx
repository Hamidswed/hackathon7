import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import RouteIcon from "@mui/icons-material/Route";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

export default function Slide() {
  const [devOpen, setDevOpen] = React.useState(false);
  const [planOpen, setPlanOpen] = React.useState(false);

  const handleClickDev = () => {
    setDevOpen(!devOpen);
  };
  const handleClickPlan = () => {
    setPlanOpen(!planOpen);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 300,
        bgcolor: "#f8f9fa",
        paddingTop: "30px",
        height: "100vh",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Project name
      //   </ListSubheader>
      // }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Project Name" />
      </ListItemButton>
      <ListItemButton onClick={handleClickPlan}>
        <ListItemIcon>
          <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="PLANING" />
        {planOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={planOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <RouteIcon />
            </ListItemIcon>
            <ListItemText primary="Road map" />
          </ListItemButton>
          <Link to="/board" style={{color:"black"}}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Board" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickDev}>
        <ListItemIcon>
          <ApiIcon />
        </ListItemIcon>
        <ListItemText primary="DEVELOPMENT" />
        {devOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={devOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Code" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider sx={{ margin: "10px 0" }} />
      <ListItemButton>
        <ListItemIcon>
          <DocumentScannerIcon />
        </ListItemIcon>
        <ListItemText primary="Project pages" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LibraryAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add shortcut" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Project settings" />
      </ListItemButton>
    </List>
  );
}
