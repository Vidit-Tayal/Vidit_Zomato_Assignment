import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const HeroUnit = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Image Gallery Maker
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Easily upload your images and instantly create stunning galleries !!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={() => loginWithRedirect({ returnTo: "/upload_images" })}
          >
            Create Image Gallery
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
export default HeroUnit;
