import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "redux/features/admin/products/productsSlice";
import { fetchProducts } from "redux/features/admin/products/productsSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadAddButtons from "./upLoadAdd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  Modal,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 650,
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export default function CoAddModal({ categoryList }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState();
  const [color, setColor] = useState();
  const [material, setMaterial] = useState();
  const [description, setDescription] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const notify = () => toast("کالا افزوده شد.");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = makeNewProduct();
    console.log(data);
    dispatch(createProduct(data));
    dispatch(fetchProducts());
    setOpen(false);
    setName("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setColor("");
    setMaterial("");
  };
  const makeNewProduct = () => {
    const newProduct = {
      image,
      name,
      price: Number(price),
      quantity: Number(quantity),
      category,
      color,
      material,
    };
    return newProduct;
  };
  return (
    <Box>
      <Button
        onClick={handleOpen}
        sx={{
          border: "2px solid gray",
          fontFamily: "Nazanin",
          fontSize: "16px",
          backgroundColor: "green",
          color: "black",
          marginTop: "18%",
        }}
      >
        افزودن کالا
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ fontFamily: "Nazanin" }}>
                  افزودن کالا
                </Typography>
              </Box>
              <Box>
                <HighlightOffIcon onClick={handleClose} />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontFamily: "Nazanin", marginTop: "6%" }}>
                تصویر کالا:
              </Typography>
            </Box>
            <Box>
              <UploadAddButtons imageData={(data) => setImage(data)} />
            </Box>
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="نام کالا"
              type="text"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="قیمت"
              type="number"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              label="تعداد"
              type="number"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              value={color}
              onChange={(e) => setColor(e.target.value)}
              label="رنگ"
              type="text"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              label="جنس"
              type="text"
            />
            <Box>
              <Select
                sx={{ width: "90%", margin: "2%" }}
                label="دسته بندی"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
              >
                {categoryList.map((category) => (
                  <MenuItem key={category.id} value={category}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            {/* <CKEditor
              editor={ClassicEditor}
              value={description}
              name="description"
              sx={{ height: 50 }}
              initData="<p>Hello from CKEditor 4!</p>"
              onChange={(e, editor) => setDescription(editor.getData())}
            /> */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "5%",
              }}
            >
              <Button
                type="submit"
                sx={{ border: "1px solid gray" }}
                onClick={notify}
              >
                <ToastContainer />
                ذخیره
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
