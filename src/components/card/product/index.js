import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productGet } from "redux/features/main/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "redux/features/admin/category/categorySlice";
import { BASE_URL } from "config/api";
import { Typography, Box, Button } from "@mui/material";
import React from "react";

export default function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const categoryList = useSelector((state) => state.category.categoryList);
  useEffect(() => {
    dispatch(productGet(productId))
      .unwrap()
      .then((res) => setProduct(res));

    dispatch(fetchCategory())
      .unwrap()
      .then((res) => setCategory(res));
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", marginLeft: "2%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "40%",
            margin: "7% 2% 0 2%",
            border: "5px double #ff99bb",
            borderRadius: "5px",
          }}
        >
          <img
            src={`${BASE_URL}/files/${product?.image?.[0]}`}
            alt="commodityPhoto"
            style={{
              width: "50%",
              height: "65%",
              border: "1px solid lightgray",
            }}
          />
          <img
            src={`${BASE_URL}/files/${product?.image?.[1]}`}
            alt="commodityPhoto"
            style={{
              width: "50%",
              height: "65%",
              border: "1px solid lightgray",
            }}
          />
        </Box>
        <Box sx={{ margin: "6% 0 0 2%" }}>
          <Typography variant="h4" sx={{ margin: "2% 0" }}>
            {product.name}
          </Typography>
          <Typography variant="h5" sx={{ margin: "2% 0" }}>
            <Typography sx={{ color: "#81d4fa" }}>گروه :</Typography>
            {
              category.find((category) => category.id === product?.category)
                ?.name
            }
          </Typography>
          <Typography variant="h5" sx={{ margin: "2% 0" }}>
            <Typography sx={{ color: "#81d4fa" }}>رنگ :</Typography>
            {product.color}
          </Typography>
          <Typography variant="h5" sx={{ margin: "2% 0" }}>
            <Typography sx={{ color: "#81d4fa" }}>جنس :</Typography>
            {product.material}
          </Typography>
          <Typography variant="h5" sx={{ margin: "2% 0" }}>
            <Typography sx={{ color: "#81d4fa" }}>قیمت :</Typography>
            {product.price &&
              product.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            <span
              style={{
                fontFamily: "Ziba",
                fontWeight: "bold",
                color: "#81d4fa",
                marginRight: "1%",
              }}
            >
              تومان
            </span>
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Button
                sx={{
                  fontSize: "26px",
                  color: "black",
                  border: "1px solid lightgray",
                }}
              >
                +
              </Button>
              <Button
                sx={{
                  fontSize: "26px",
                  color: "black",
                  border: "1px solid lightgray",
                }}
              >
                -
              </Button>
            </Box>
            <Button sx={{ fontSize: "26px", fontWeight: "bold" }}>
              افزودن به سبد خرید
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="h5" sx={{ margin: "1% 5% 1% 5%" }}>
            توضیحات محصول
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ margin: "0 5% 1% 5%" }}>
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
}
