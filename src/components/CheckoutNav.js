import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutNav = () => {
  const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "rgb(146, 44, 44);", color: "white" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Button
            sx={{
              width: "15%",
              color: "black",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "whitesmoke",
                boxShadow: "0 0 12px black",
              },
            }}
          >
            Home
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CheckoutNav;
