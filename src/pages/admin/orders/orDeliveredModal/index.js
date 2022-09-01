import * as React from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tab,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useState } from "react";

const style = {
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

export default function OrDeliveredModal({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          textDecoration: "none",
          fontSize: "16px",
        }}
        onClick={handleOpen}
      >
        بررسی سفارش
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography>نمایش سفارش</Typography>
            </Box>
            <Box>
              <HighlightOffIcon onClick={handleClose} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", margin: "3%" }}>
            <Typography>نام مشتری:</Typography>
            <Typography sx={{ marginLeft: "5%" }}>{item.username}</Typography>
          </Box>
          <Box sx={{ display: "flex", margin: "3%" }}>
            <Typography>آدرس:</Typography>
            <Typography sx={{ marginLeft: "5%" }}>{item.address}</Typography>
          </Box>
          <Box sx={{ display: "flex", margin: "3%" }}>
            <Typography>تلفن:</Typography>
            <Typography sx={{ marginLeft: "5%" }}>{item.phone}</Typography>
          </Box>
          <Box sx={{ display: "flex", margin: "3%" }}>
            <Typography>زمان تحویل:</Typography>
            <Typography sx={{ marginLeft: "5%" }}>
              {new Date(item.expectAt).toLocaleDateString("fa-IR")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", margin: "3%" }}>
            <Typography>زمان سفارش:</Typography>
            <Typography sx={{ marginLeft: "5%" }}>
              {new Date(item.createdAt).toLocaleDateString("fa-IR")}
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "1px solid gray" }}>کالا</TableCell>
                <TableCell sx={{ border: "1px solid gray" }}>قیمت</TableCell>
                <TableCell sx={{ border: "1px solid gray" }}>تعداد</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid gray" }}>
                  {item.products[0].name}
                </TableCell>
                <TableCell sx={{ border: "1px solid gray" }}>
                  {item.products[0].price}
                </TableCell>
                <TableCell sx={{ border: "1px solid gray" }}>
                  {item.products[0].count}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <Button
              sx={{
                border: "2px solid gray",

                fontSize: "16px",
                backgroundColor: "green",
                color: "black",
                padding: "2% 4%",
              }}
            >
              تحویل شد
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
