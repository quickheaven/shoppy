"use client"

import { Modal, Box, TextField, Button, Stack } from "@mui/material"
import { useState } from "react";
import { FormResponse } from "../common/interfaces/form-response.interface";


const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface CreateProductModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({ open, handleClose }: CreateProductModalProps) {
  const [response] = useState<FormResponse>();

  return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={styles}>
          <form className="w-full max-w-xs">
            <Stack spacing={2}>
              <TextField 
                error={!!response?.error}
                helperText={response?.error}
                name="name"
                label="Name"
                variant="outlined"
                required
              /> 
              <TextField 
                error={!!response?.error}
                helperText={response?.error}
                name="description"
                label="Description"
                variant="outlined"
                required
              />
              <TextField
                name="price"
                label="Price"
                variant="outlined"
                required
                helperText={response?.error}
                error={!!response?.error}
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
             </Stack>
          </form>
        </Box>
    </Modal>
  )
}