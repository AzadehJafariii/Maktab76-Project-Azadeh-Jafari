import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import axiosPrivate from "api/http";
import { BASE_URL } from "config/api";
import {
  updateEditedProduct,
  fetchProducts,
} from "redux/features/admin/products/productsSlice";
import { toast } from "react-toastify";
import { Modal, Box, Typography, Button, Avatar } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export default function CoEditModal({ item, categoryList, page }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(item.image);
  const [thumbnail, setThumbnail] = useState(item.thumbnail);
  const [description, setDescription] = useState(item.description);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [src, setSrc] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    category: item.category,
    color: item.color,
    material: item.material,
    image: item.image,
    description: description,
    thumbnail: item.thumbnail,
  });

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
    setImage([res[0]?.data.filename, res[1]?.data.filename]);
    setThumbnail(res[0]?.data.filename);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };
  const { name, price, quantity, category, color, material } = selectedProduct;

  const handleSubmit = (e, id) => {
    const formData = {
      name,
      price,
      quantity,
      color,
      material,
      thumbnail,
      description,
      category,
    };
    formData.image = image;

    e.preventDefault();
    dispatch(updateEditedProduct({ currentId: id, selectedProduct }))
      .unwrap()
      .then(() => {
        toast.success("ویرایش کالا با موفقیت انجام شد", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(fetchProducts(page));
      });
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
          <form onSubmit={(e) => handleSubmit(e, item.id)}>
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
                <Typography>تصویر کالا:</Typography>
              </Box>
              <Box>
                <input
                  type="file"
                  multiple
                  md={6}
                  onChange={(e) => handleUpload(e)}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Avatar
                  alt="image"
                  src={`${BASE_URL}/files/${image[0]}`}
                  variant="rounded"
                />
                <Avatar
                  alt="image"
                  src={`${BASE_URL}/files/${image[1]}`}
                  variant="rounded"
                />
              </Box>
              <Box sx={{ marginTop: "2%" }}>
                <Box sx={{ display: "flex", gap: "20%" }}>
                  <Box>
                    <Box>
                      <Typography>نام کالا:</Typography>
                    </Box>
                    <Box>
                      <input
                        style={{ width: "150%" }}
                        type="text"
                        name="name"
                        defaultValue={name}
                        onChange={(e) => handleChange(e)}
                      ></input>
                    </Box>
                    <Box>
                      <Typography>دسته بندی:</Typography>
                    </Box>
                    <Box>
                      <select
                        style={{ width: "150%" }}
                        name="category"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {categoryList.map((category) => (
                          <option key={category.id} defaultValue={category.id}>
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
                        style={{ width: "150%" }}
                        name="material"
                        type="text"
                        defaultValue={material}
                        onChange={(e) => handleChange(e)}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Typography>قیمت:</Typography>
                    </Box>
                    <Box>
                      <input
                        style={{ width: "150%" }}
                        name="price"
                        type="number"
                        defaultValue={price}
                        onChange={(e) => handleChange(e)}
                      />
                    </Box>
                    <Box>
                      <Typography>تعداد:</Typography>
                    </Box>
                    <Box>
                      <input
                        style={{ width: "150%" }}
                        name="quantity"
                        type="number"
                        defaultValue={quantity}
                        onChange={(e) => handleChange(e)}
                      />
                    </Box>
                    <Box>
                      <Typography>رنگ:</Typography>
                    </Box>
                    <Box>
                      <input
                        style={{ width: "150%" }}
                        name="color"
                        type="text"
                        defaultValue={color}
                        onChange={(e) => handleChange(e)}
                      />
                    </Box>
                  </Box>
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
            </Box>
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
