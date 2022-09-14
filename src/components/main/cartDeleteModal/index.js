import * as React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeFromCart } from "redux/features/main/cart/cartSlice";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function CartDeleteModal({ product }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
      .unwrap()
      .then(() => {
        toast.success("حذف کالا با موفقیت انجام شد", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        setOpen(false);
      });
  };
  return (
    <Box>
      <Button onClick={handleOpen}>
        <DeleteOutlineIcon sx={{ color: "red" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography variant="h5" sx={{ fontFamily: "Nazanin" }}>
              آیا از حذف محصول اطمینان دارید؟
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10%", marginTop: "10%" }}>
            <Button
              sx={{
                fontFamily: "Nazanin",
                marginLeft: "50%",
                fontSize: "18px",
              }}
              onClick={() => handleRemove(product.id)}
            >
              بله
            </Button>
            <Button
              sx={{ fontFamily: "Nazanin", fontSize: "18px" }}
              onClick={handleClose}
            >
              خیر
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
