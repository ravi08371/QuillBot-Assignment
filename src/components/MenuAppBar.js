import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CountryHover from "./CountryHover";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./menuAppBar.css";

export default function MenuAppBar(props) {
  const { darkMode, setDarkMode } = props;
  const [hover, setHover] = React.useState(false);
  // const [dark, setIsDark] = React.useState(false);

  const handleHover = () => {
    setHover(true);
    // console.log("haha hehe");
  };
  const handleUnHover = () => {
    setHover(false);
  };
  const handleClick = () => {
    setDarkMode((prevstate) => !prevstate);
    // setIsDark((prevstate) => !prevstate);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        // position="sticky"
        // top="0"
        className="mainBox"
        style={{
          backgroundColor: "white",
          color: "black",
          borderBottom: "2px solid #f1f1f1",
          boxShadow: "none",
          height: "60px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {/* QuillBot */}
            <span style={{ color: "#66aa4c" }}>Quill</span>
            <span style={{ color: "#479455" }}>Bot</span>
          </Typography>
          <div className="QuillBotPrem">
            <h4>QuillBot Premium</h4>
          </div>
          <IconButton
            color="inherit"
            id="flags"
            onMouseEnter={handleHover}
            // onMouseLeave={handleUnHover}
          >
            <img
              id="flagMain"
              src="https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392__340.png"
              width={"30px"}
              height={"30px"}
              alt="Country"
            />
          </IconButton>
          {darkMode ? (
            <DarkModeIcon className="btns" onClick={handleClick} />
          ) : (
            <LightModeIcon className="btns" onClick={handleClick} />
          )}
          <PermIdentityIcon className="btns" />
        </Toolbar>
      </AppBar>
      {hover ? (
        <div className="modal" onMouseLeave={handleUnHover}>
          <CountryHover
            darkMode={darkMode}
            // onMouseEnter={handleHover}
          />
        </div>
      ) : (
        ""
      )}
    </Box>
  );
}
