import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "./countryHover.css";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function CountryHover(props) {
  const { darkMode } = props;
  return (
    <List
      sx={style}
      component="nav"
      aria-label="mailbox folders"
      id="countryList"
      className={darkMode ? "darks" : ""}
      style={
        ({ color: darkMode ? "white" : "black" },
        { backgroundColor: darkMode ? "#202020" : "white" })
      }
    >
      <ListItem divider>
        <p id="CountrylistPtag">I write in</p>
        {/* <ListItemText primary="I write in" /> */}
      </ListItem>
      <ListItem button>
        <img
          className="flagImg"
          src="https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392__340.png"
          width={"25px"}
          height={"25px"}
        />
        <ListItemText primary="American English" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <img
          className="flagImg "
          src="https://cdn.pixabay.com/photo/2012/04/10/23/27/canada-27003_960_720.png"
          width={"25px"}
          height={"25px"}
        />
        <ListItemText primary="Canadian English" />
      </ListItem>
      <ListItem button>
        <img
          className="flagImg "
          src="https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119__340.png"
          width={"25px"}
          height={"25px"}
        />
        <ListItemText primary="British English" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <img
          className="flagImg "
          src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
          width={"25px"}
          height={"25px"}
        />
        <ListItemText primary="Australian English" />
      </ListItem>
    </List>
  );
}
