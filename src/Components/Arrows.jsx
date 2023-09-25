import { Box, Stack, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Arrows({ images, currentIndex, setCurrentIndex }) {
  return (
    <Box id="mobileArrows">
      <Stack
        direction="row"
        spacing={33.6}
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <IconButton
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex((currentIndex - 1) );
            }
          }}
          sx={{
            backgroundColor: "white",
            "&:hover": { backgroundColor: "whitesmoke" },
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton
         onClick={() => {
          if (currentIndex < images.length - 1) {
            setCurrentIndex((currentIndex + 1) );
          }
        }}
          sx={{
            backgroundColor: "white",
            "&:hover": { backgroundColor: "whitesmoke" },
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Arrows;
