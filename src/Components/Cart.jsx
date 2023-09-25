import {
  Box,
  Typography,
  Paper,
  Modal,
  Button,
  Stack,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";

// you forgot the images prop
function Cart({
  open,
  handleClose,
  count,
  price,
  imageThumbnail,
  currentIndex,
  cart,
  setCart,
  showItems,
  setShowItems,
  itemCount,
  setItemCount,
  images,
}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(27, 100%, 50%)",
      },
    },
  });

  const removeHandler = (index) => {
    const items = [...cart];
    items.splice(index, 1);
    setCart(items);
    if (items.length === 0) {
      setShowItems(true);
    }
    setItemCount(itemCount - 1);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Modal open={open} onClose={handleClose}>
        <Box
          component={motion.div}
          sx={{
            width: {
              xs: "370px",
            },

            backgroundColor: "white",
            color: "black",
            position: "absolute",
            left: {
              xs: "30px",
              sm: "260px",
              lg: "1100px",
            },
            top: {
              xs: "80px",
              sm: "110px",
              lg: "100px",
            },
            borderRadius: "20px",
          }}
        >
          <Paper
            sx={{
              padding: { xs: 2, lg: 2 },
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Typography variant="h6">
              {" "}
              <b>Cart</b>{" "}
            </Typography>
          </Paper>

          <Stack>
            {showItems ? (
              <Typography
                variant="bod1"
                sx={{ textAlign: "center", padding: "28px" }}
              >
                <b>Your cart is empty.</b>
              </Typography>
            ) : (
              <>
                {cart.map((itemIndex, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box>
                      <Box
                        component="img"
                        src={imageThumbnail[itemIndex]}
                        width="50px"
                      />
                    </Box>

                    <Stack>
                      <Typography sx={{ opacity: "60%" }} variant="bod1">
                        Fall Limited Edition Sneakers
                      </Typography>
                      <Typography variant="bod1">
                        <span> $125 x {count}</span> <b>{price}</b>
                      </Typography>
                    </Stack>

                    <IconButton onClick={() => removeHandler(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                ))}
              </>
            )}

            <ThemeProvider theme={theme}>
              <Button
                sx={{
                  color: "white",
                  padding: "12px",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 800,
                }}
                variant="contained"
                disableElevation
              >
                <b>Checkout</b>
              </Button>
            </ThemeProvider>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

export default Cart;
