import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import profile from "/images/image-avatar.png";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "hsl(27, 100%, 50%)",
  },
}));

function Nav({ handleOpen, itemCount }) {
  return (
    <AppBar id="desktopNav" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="h1"
          sx={{ flexGrow: { sm: 2, lg: 0.5 }, padding: "30px" }}
        >
          <b> sneakers</b>
        </Typography>

        <Stack
          direction="row"
          spacing={{ sm: 4, lg: 8 }}
          sx={{ flexGrow: { sm: 4, lg: 1 } }}
        >
          <Typography
            component={motion.p}
            whileHover={{ y: -8 }}
            variant="bod1"
            sx={{ cursor: "pointer" }}
          >
            Collections
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ y: -8 }}
            variant="bod1"
            sx={{ cursor: "pointer" }}
          >
            Men
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ y: -8 }}
            variant="bod1"
            sx={{ cursor: "pointer" }}
          >
            Women
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ y: -8 }}
            variant="bod1"
            sx={{ cursor: "pointer" }}
          >
            About
          </Typography>
          <Typography
            component={motion.p}
            whileHover={{ y: -8 }}
            variant="bod1"
            sx={{ cursor: "pointer" }}
          >
            Contact
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={{ sm: 2, lg: 4 }}
          sx={{ alignItems: "center" }}
        >
          <IconButton onClick={handleOpen}>
            <StyledBadge badgeContent={itemCount} color="secondary">
              <ShoppingCartOutlinedIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
              />
            </StyledBadge>
          </IconButton>
          <Box
            component="img"
            src={profile}
            sx={{ width: "25%", cursor: "pointer" }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
