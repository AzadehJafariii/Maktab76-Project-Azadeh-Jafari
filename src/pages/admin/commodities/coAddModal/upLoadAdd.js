import { Button, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function UploadAddButtons(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box>
      {selectedImage && (
        <Box>
          <img
            alt="not fount"
            width={"70px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <Button onClick={() => setSelectedImage(null)}>
            <HighlightOffIcon />
          </Button>
        </Box>
      )}
      <TextField
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          props.imageData(event.target.files[0]);
        }}
      />
    </Box>
  );
}
