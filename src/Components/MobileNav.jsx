import React, { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  Badge
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import profile from "/src/images/image-avatar.png";
import { styled } from '@mui/material/styles';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor:'hsl(27, 100%, 50%)'
  },
}));

function MobileNav({ handleOpen, itemCount,
  setItemCount }) {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        id="mobileNav"
        sx={{ padding: "5px", backgroundColor: "white", color: "black" }}
      >
        <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setisDrawerOpen(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontFamily: "DM Serif Display,  serif",
              }}
            >
              <b> sneakers</b>
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", flexGrow: 10 }}
            >
              <IconButton onClick={handleOpen}>
                <StyledBadge badgeContent={itemCount} color='secondary'>
                <ShoppingCartOutlinedIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                />
                </StyledBadge>
              </IconButton>
              <Box
                component="img"
                src={profile}
                sx={{ width: "40%", height: "36px", cursor: "pointer" }}
              />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box width="250px" textAlign="left" role="presentation">
          <Toolbar>
            <Box component="div"></Box>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>

          <Stack spacing={3} style={{ textAlign: "left", padding: "35px" }}>
            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {" "}
              <b>Collections</b>{" "}
            </Typography>
            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {" "}
              <b>Men</b>{" "}
            </Typography>
            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {" "}
              <b>Women</b>{" "}
            </Typography>
            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {" "}
              <b>About</b>{" "}
            </Typography>
            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {" "}
              <b>Contact</b>{" "}
            </Typography>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default MobileNav;
