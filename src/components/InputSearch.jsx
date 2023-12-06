import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const InputSearch = ({ handleText, handleSearch, text }) => {
  const Input = styled("input")(() => ({
    borderRadius: "8px",
  }));
  return (
    <Box style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{ marginRight: "16px" }}
          >
            <LiveTvIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ flexGrow: 1 }}
          >
            Movies
          </Typography>
          <div>
            <input
              type="text"
              value={text}
              placeholder="Search...."
              onChange={handleText}
              style={{
                borderRadius: "8px",
                outline: "0",
                border: "0",
                padding: "8px",
                marginRight: "10px",
              }}
            />
          </div>
          <Button variant="contained" color="secondary" onClick={handleSearch}>
            Search Movies
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default InputSearch;
