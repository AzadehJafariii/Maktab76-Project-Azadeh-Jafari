import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { eachCategoriesGet } from "redux/features/main/goods/goodsSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(eachCategoriesGet(categoryId));
  }, [dispatch, categoryId]);

  return (
    <Paper
      style={{
        width: "30%",
        margin: "1% 1% 0 0",
        padding: "0 4%",
        backgroundColor: "#e1f5fe",
      }}
    >
      <Box sx={{ margin: "10% 0 4% 0" }}>
        <Typography
          component={Link}
          to="/categories/1"
          sx={{
            fontSize: "20px",
            textDecoration: "none",
            color: "#ff99bb",
          }}
        >
          لوازم گردش و سفر
        </Typography>
        <Typography sx={{ margin: "4% 0" }}>کالسکه و کریر</Typography>
        <Typography sx={{ margin: "4% 0" }}>چمدان کودک</Typography>
        <Typography sx={{ margin: "4% 0" }}>ساک لوازم مادر و کودک</Typography>
        <Typography sx={{ margin: "4% 0" }}>چادر بازی کودک</Typography>
      </Box>
      <Box sx={{ margin: "10% 0 4% 0" }}>
        <Typography
          component={Link}
          to="/categories/2"
          sx={{
            fontSize: "20px",
            textDecoration: "none",
            color: "#ff99bb",
          }}
        >
          لوازم ایمنی و مراقبت
        </Typography>
        <Typography sx={{ margin: "4% 0" }}>محافظ سر کودک</Typography>
        <Typography sx={{ margin: "4% 0" }}>محافظ تخت کودک</Typography>
        <Typography sx={{ margin: "4% 0" }}>کیسه آب گرم</Typography>
        <Typography sx={{ margin: "4% 0" }}>تب سنج</Typography>
        <Typography sx={{ margin: "4% 0" }}>دستگاه تصفیه کننده هوا</Typography>
      </Box>
      <Box sx={{ margin: "10% 0 4% 0" }}>
        <Typography
          component={Link}
          to="/categories/3"
          sx={{
            fontSize: "20px",
            textDecoration: "none",
            color: "#ff99bb",
          }}
        >
          اسباب بازی و سرگرمی
        </Typography>
        <Typography sx={{ margin: "4% 0" }}>تشک بازی کودک</Typography>
        <Typography sx={{ margin: "4% 0" }}>کفپوش بازی کودک</Typography>
        <Typography sx={{ margin: "4% 0" }}>عروسک</Typography>
        <Typography sx={{ margin: "4% 0" }}>خمیر بازی کودک</Typography>
      </Box>
      <Box sx={{ margin: "10% 0 4% 0" }}>
        <Typography
          component={Link}
          to="/categories/4"
          sx={{
            fontSize: "20px",
            textDecoration: "none",
            color: "#ff99bb",
          }}
        >
          لوازم غذاخوری کودک
        </Typography>
        <Typography sx={{ margin: "4% 0" }}>صندلی غذاخوری کودک</Typography>
        <Typography sx={{ margin: "4% 0" }}>سرویس ظروف غذاخوری</Typography>
        <Typography sx={{ margin: "4% 0" }}>شیشه شیر و پستانک</Typography>
        <Typography sx={{ margin: "4% 0" }}>قمقمه و فلاسک</Typography>
      </Box>
    </Paper>
  );
}
