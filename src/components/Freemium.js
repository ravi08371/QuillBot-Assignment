// import React from "react";
import "./freemium.css";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@material-ui/core";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const style = {
  bgcolor: "background.paper",
};

// ------------------------------------------------------------/
function Freemium(props) {
  const {
    darkMode,
    backgroundColors,
    classNameFree,
    heading,
    buttonId,
    buttonText,
    tick,
    cross,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    bottomText,
    infoBtn,
    diamond,
  } = props;
  return (
    <div id="main" className={darkMode ? "darkMode" : "light"}>
      <div>
        <List sx={style} component="nav" aria-label="mailbox folders" id="list">
          <ListItem
            className={classNameFree}
            style={{ backgroundColor: { backgroundColors } }}
          >
            {diamond ? diamond : ""}

            <h1>{heading}</h1>
          </ListItem>
          <ListItem divider>
            <Button id={buttonId}>{buttonText}</Button>
          </ListItem>
          <ListItem divider>
            {tick}
            <ListItemText primary={text1} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {tick}
            <ListItemText primary={text2} className="lt" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {tick}
            <ListItemText primary={text3} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {tick}
            <ListItemText primary={text4} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {tick}
            <ListItemText primary={text5} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {cross ? cross : tick}
            <ListItemText primary={text6} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {cross ? cross : tick}
            <ListItemText primary={text7} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {cross ? cross : tick}
            <ListItemText primary={text8} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {cross ? cross : tick}
            <ListItemText primary={text9} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem divider>
            {cross ? cross : tick}
            <ListItemText primary={text10} className="li" />
            {infoBtn ? <InfoOutlinedIcon className="infoBtn" /> : ""}
          </ListItem>
          <ListItem className="bottom">
            <p>{bottomText}</p>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Freemium;
