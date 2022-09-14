import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { goodGet } from "redux/features/main/goods/goodsSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/features/main/cart/cartSlice";
import { fetchCategory } from "redux/features/admin/category/categorySlice";
import { BASE_URL } from "config/api";
import { Typography, Box, Button } from "@mui/material";

export default function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("number"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(goodGet(productId))
      .unwrap()
      .then((res) => setProduct(res));
    dispatch(fetchCategory())
      .unwrap()
      .then((res) => setCategory(res));
  }, [productId, dispatch]);

  const handleAddtoCart = (product) => {
    const data = {
      name: product.name,
      thumbnail: product.thumbnail,
      price: product.price,
      count: count,
      id: product.id,
    };
    dispatch(addToCart(data));
    navigate("/cart");
  };

  return (
    <Box>
      <Box sx={{ display: "flex", marginLeft: "2%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "40%",
            margin: "6% 2% 0 2%",
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
        <Box sx={{ margin: "5% 0 0 2%" }}>
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
          <Typography
            variant="h5"
            sx={{ display: "flex", margin: "3% 0 2% 0" }}
          >
            <Typography sx={{ color: "#81d4fa" }}>موجودی :</Typography>
            {product.quantity}
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
          <Box sx={{ display: "flex", width: "140%", marginTop: "4%" }}>
            <Box
              sx={{
                display: "flex",
                gap: "10%",
                justifyContent: "baseLine",
              }}
            >
              <Button
                sx={{
                  fontSize: "26px",
                  color: "black",
                  border: "1px solid lightgray",
                  height: "60%",
                }}
                onClick={() => setCount((count) => count + 1)}
                disabled={count < product.quantity ? "" : "disabled"}
              >
                +
              </Button>
              <Box
                sx={{
                  border: "1px solid lightgray",
                  height: "60%",
                  padding: "0 10%",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                {count}
              </Box>
              <Button
                sx={{
                  fontSize: "26px",
                  color: "black",
                  border: "1px solid lightgray",
                  height: "60%",
                }}
                onClick={() => setCount((count) => count - 1)}
                disabled={count > 0 ? "" : "disabled"}
              >
                -
              </Button>
            </Box>
          </Box>
          <Button
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={() => handleAddtoCart(product)}
          >
            افزودن به سبد خرید
          </Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="h5" sx={{ margin: "1% 5% 1% 5%" }}>
            توضیحات محصول
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ margin: "0 5% 1% 5%" }}>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </Typography>
      </Box>
    </Box>
  );
}
