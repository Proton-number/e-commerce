import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Arrows from "./Arrows";
import { motion } from "framer-motion";

function Middle({
  count,
  setCount,
  images,
  imageThumbnail,
  currentIndex,
  setCurrentIndex,
  cart,
  setCart,
  setShowItems,
  setItemCount,
}) {
  const [focus, setFocus] = useState(false);
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(27, 100%, 50%)",
      },
    },
  });

  const variants = {
    initial: {
      border: "none",
    },
    focus: {
      border: "1px solid hsl(27, 100%, 50%)",
    },
  };

  const addCartHandler = () => {
    const newItem = { currentIndex, count };
    setCart([...cart, newItem]);
    setShowItems(false);
    setItemCount((prevItemCount) => prevItemCount + 1);
  };

  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      direction={{ xs: "column", lg: "row" }}
      spacing={{ sm: 6, lg: 18 }}
      sx={{
        alignItems: "center",
        marginTop: { xs: "58px", sm: "100px", lg: 0 },
      }}
    >
      <Stack spacing={2}>
        <Box sx={{ overFlow: "hidden" }}>
          <Box
            component={motion.img}
            src={images[currentIndex]}
            whileHover={{ scale: 1.03 }}
            sx={{
              width: { xs: "368px", sm: "500px", lg: "484px" },
              height: { sm: "450px", lg: "440px" },
              borderRadius: "15px",
              objectFit: "cover",
              transition: "transform 0.8s",
              cursor: "pointer",
            }}
          />
        </Box>
        <Arrows
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />

        <Stack direction="row" spacing={4}>
          <Box
            variants={variants}
            animate={focus ? "focus" : ""}
            component={motion.img}
            whileHover={{ opacity: 0.8 }}
            src={imageThumbnail[0]}
            onClick={() => {
              setCurrentIndex(0);
              setFocus(true);
              setFocus1(false);
              setFocus2(false);
              setFocus3(false);
            }}
            sx={{
              width: { xs: 0, sm: "100px", lg: "100px" },
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
          <Box
            variants={variants}
            animate={focus1 ? "focus" : ""}
            component={motion.img}
            whileHover={{ opacity: 0.8 }}
            onClick={() => {
              setCurrentIndex(1);
              setFocus(false);
              setFocus1(true);
              setFocus2(false);
              setFocus3(false);
            }}
            src={imageThumbnail[1]}
            sx={{
              width: { xs: 0, sm: "100px", lg: "100px" },
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />{" "}
          <Box
            variants={variants}
            animate={focus2 ? "focus" : ""}
            component={motion.img}
            whileHover={{ opacity: 0.8 }}
            src={imageThumbnail[2]}
            onClick={() => {
              setCurrentIndex(2);
              setFocus(false);
              setFocus1(false);
              setFocus2(true);
              setFocus3(false);
            }}
            sx={{
              width: { xs: 0, sm: "100px", lg: "100px" },
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />{" "}
          <Box
            variants={variants}
            animate={focus3 ? "focus" : ""}
            component={motion.img}
            whileHover={{ opacity: 0.8 }}
            src={imageThumbnail[3]}
            onClick={() => {
              setCurrentIndex(3);
              setFocus(false);
              setFocus1(false);
              setFocus2(false);
              setFocus3(true);
            }}
            sx={{
              width: { xs: 0, sm: "100px", lg: "100px" },
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        sx={{ textAlign: "left", width: { sm: "70%", lg: "40%" } }}
        spacing={1.6}
      >
        <Typography sx={{ color: "hsl(27, 100%, 50%)" }} variant="body1">
          {" "}
          <b>SNEAKER COMPANY</b>{" "}
        </Typography>
        <Typography variant="h3">
          {" "}
          <b>Fall Limited Edition Sneakers</b>{" "}
        </Typography>
        <Typography sx={{ opacity: "60%" }} variant="bod1">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Typography>

        <Stack
          direction={{ xs: "row", sm: "column", lg: "column" }}
          sx={{
            alignItems: { xs: "center", sm: "unset", lg: "unset" },
            justifyContent: { xs: "space-between" },
          }}
        >
          <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
            <Typography variant="h5">
              {" "}
              <b>$125.00</b>{" "}
            </Typography>
            <Box sx={{ padding: 0.6, backgroundColor: "hsl(28, 95%, 93%)" }}>
              <Typography sx={{ color: "hsl(27, 100%, 50%)" }}>
                {" "}
                <b>50%</b>{" "}
              </Typography>
            </Box>
          </Stack>
          <Typography sx={{ opacity: "40%" }} variant="bod1">
            {" "}
            <b>
              {" "}
              <del> $250.00</del>
            </b>{" "}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row", lg: "row" }}
          spacing={{ xs: 2, sm: 25, lg: 3 }}
          sx={{
            paddingTop: { xs: "10px", sm: 0, lg: 0 },
            justifyContent: { xs: "center", sm: "unset", lg: "unset" },
            alignItems: { xs: "center", sm: "unset", lg: "unset" },
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "hsl(230, 60%, 98%)",
            }}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                if (count > 0) {
                  setCount((prevCount) => prevCount - 1);
                }
              }}
              sx={{ color: "hsl(27, 100%, 50%)" }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>
              {" "}
              <b>{count}</b>{" "}
            </Typography>
            <IconButton
              onClick={() => setCount((prevCount) => prevCount + 1)}
              sx={{ color: "hsl(27, 100%, 50%)" }}
            >
              <AddIcon />
            </IconButton>
          </Stack>
          <ThemeProvider theme={theme}>
            <Button
              // onClick={()=> setCount(0)}
              onClick={addCartHandler}
              sx={{
                color: "white",
                padding: "12px",
                borderRadius: "8px",
                textTransform: "none",
              }}
              variant="contained"
              startIcon={<ShoppingCartOutlinedIcon />}
              disableElevation
            >
              {" "}
              <b> Add to cart</b>{" "}
            </Button>
          </ThemeProvider>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Middle;
