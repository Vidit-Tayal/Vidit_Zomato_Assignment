import React, { useState } from "react";
import OldMemories from "../Grid/OldMemories";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Images = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { logout } = useAuth0();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddToGallery = () => {
    if (selectedFile) {
      const newData = [
        ...data,
        { title: title, desc: description, file: selectedFile },
      ];
      setData(newData);
      setTitle("");
      setDescription("");
      setSelectedFile(null);
    } else {
      alert("Please select a file.");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </Button>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Image Gallery Maker
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="title"
              label="Image Title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="description"
              label="Image Description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAddToGallery}
            >
              Add into gallery
            </Button>
          </Box>
        </Box>
      </Container>
      <OldMemories data={data}></OldMemories>
    </div>
  );
};

export default Images;
