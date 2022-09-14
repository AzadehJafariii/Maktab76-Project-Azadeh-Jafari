import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import axiosPrivate from "api/http";
import {
  createProduct,
  fetchProducts,
} from "redux/features/admin/products/productsSlice";
import { toast } from "react-toastify";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 660,
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export default function CoAddModal({ setData, categoryList, page }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [image, setImage] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState(0);
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [src, setSrc] = useState([]);

  const handleUpload = async (e) => {
    const selectedFIles = [];
    const targetFiles = e.target.files;

    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setSrc(selectedFIles);

    const requests = Array.from(targetFiles).map((item) => {
      const form = new FormData();
      form.append("image", item);
      return axiosPrivate.post("/upload", form);
    });
    const res = await Promise.all(requests);
    setImage(res[0]?.data.filename);
    setThumbnail(res[0]?.data.filename);
  };

  const handleSubmit = (e) => {
    const formData = {
      name,
      price,
      quantity,
      color,
      material,
      image,
      thumbnail,
      description,
      category,
    };
    e.preventDefault();
    dispatch(createProduct(formData))
      .unwrap()
      .then(() => {
        toast.success("افزودن کالا با موفقیت انجام شد", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(fetchProducts(page));
        // .unwrap()
        // .then((res) => setData(res));
      });
    setOpen(false);
    setName("");
    setImage("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setColor("");
    setMaterial("");
    setDescription("");
  };

  return (
    <Box>
      <Button
        onClick={handleOpen}
        sx={{
          border: "2px solid gray",
          fontSize: "16px",
          backgroundColor: "green",
          color: "black",
          marginTop: "20%",
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
            <Box container spacing={2}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography>افزودن کالا</Typography>
                </Box>
                <Box>
                  <HighlightOffIcon onClick={handleClose} />
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ marginTop: "1%" }}>تصویر کالا:</Typography>
              </Box>
              <Box>
                <input
                  type="file"
                  multiple
                  md={6}
                  onChange={(e) => handleUpload(e)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  width: "10%",
                  height: "5%",
                  backgroundColor: "gray",
                }}
              >
                <img
                  src={src[0]}
                  sx={{ width: "5px", height: "5px" }}
                  alt="commodity image"
                />
              </Box>
              <Box>
                <Typography>نام کالا:</Typography>
              </Box>
              <Box>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </Box>
              <Box>
                <Typography>دسته بندی:</Typography>
              </Box>
              <Box>
                <select
                  onChange={(e) => {
                    setCategory(Number(e.target.value));
                  }}
                >
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
              </Box>
              <Box>
                <Typography>جنس:</Typography>
              </Box>
              <Box>
                <input
                  type="text"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                />
              </Box>
              <Box>
                <Typography>قیمت:</Typography>
              </Box>
              <Box>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </Box>
              <Box>
                <Typography>تعداد:</Typography>
              </Box>
              <Box>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </Box>
              <Box>
                <Typography>رنگ:</Typography>
              </Box>
              <Box>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Box>
              <Box item md={12} xs={12}>
                <Typography>توضیحات:</Typography>
              </Box>
              <Box item md={12} xs={12}>
                <CKEditor
                  data={description}
                  editor={ClassicEditor}
                  onChange={(e, editor) => setDescription(editor.getData())}
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <Button
                type="submit"
                sx={{ border: "1px solid gray" }}
                disabled={
                  !name ||
                  !price ||
                  !color ||
                  !image ||
                  !category ||
                  !quantity ||
                  !material ||
                  !description
                }
              >
                ذخیره
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
