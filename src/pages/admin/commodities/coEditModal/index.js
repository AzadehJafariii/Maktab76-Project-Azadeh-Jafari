import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { fetchProducts } from "redux/features/admin/products/productsSlice";
import { updateProduct } from "redux/features/admin/products/productsSlice";
import { BASE_URL } from "config/api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import UploadButtons from "./upLoad";
import {
  TextField,
  Typography,
  Select,
  MenuItem,
  Box,
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

export default function CoEditModal({ item, categoryList }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    category: item.category,
    color: item.color,
    material: item.material,
  });

  const { name, price, quantity, category, color, material } = selectedProduct;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = item.id;
    console.log(productId);
    dispatch(updateProduct(productId, selectedProduct));
    dispatch(fetchProducts());
    setOpen(false);
    setSelectedProduct("");
  };
  return (
    <Box>
      <Button onClick={handleOpen}>
        <BorderColorIcon
          variant="danger"
          sx={{ color: "green", margin: "0 5%" }}
        />
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
                  ویرایش کالا
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
              <Box
                component="img"
                src={`${BASE_URL}/files/${item.image[0]}`}
                alt="product"
                sx={{ width: "20%" }}
              />
            </Box>
            <Box>
              {/* <UploadButtons imageData={(data) => setImage(data)} /> */}
            </Box>
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
              label="نام کالا"
              type="text"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              name="price"
              value={price}
              onChange={(e) => handleChange(e)}
              label="قیمت"
              type="number"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              name="quantity"
              value={quantity}
              onChange={(e) => handleChange(e)}
              label="تعداد"
              type="number"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              name="color"
              value={color}
              onChange={(e) => handleChange(e)}
              label="رنگ"
              type="text"
            />
            <TextField
              sx={{ width: "90%", margin: "2%" }}
              name="material"
              value={material}
              onChange={(e) => handleChange(e)}
              label="جنس"
              type="text"
            />
            <Box>
              <Select
                sx={{ width: "90%", margin: "2%" }}
                name="category"
                label="دسته بندی"
                value={category}
                onChange={(e) => handleChange(e)}
                type="text"
              >
                {categoryList.map((category) => (
                  <MenuItem key={category.id} value={category}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <CKEditor
              editor={ClassicEditor}
              value={description}
              name="description"
              sx={{ height: 50 }}
              initData="<p>Hello from CKEditor 4!</p>"
              onChange={(e, editor) => setDescription(editor.getData())}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "5%",
              }}
            >
              <Button type="submit" sx={{ border: "1px solid gray" }}>
                ذخیره
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
