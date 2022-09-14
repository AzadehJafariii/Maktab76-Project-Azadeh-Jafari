import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { goodsGet } from "redux/features/main/goods/goodsSlice";
import { BASE_URL } from "config/api";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Paper,
} from "@mui/material";

export default function Safety() {
  const [data2, setData2] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(goodsGet(2))
      .unwrap()
      .then((res) => setData2(res));
  }, [dispatch]);
  return (
    <>
      <Box
        sx={{
          margin: "3%",
          textAlign: "center",
          height: "80px",
          paddingTop: "1%",
          backgroundColor: "#e1f5fe",
          border: "1px solid #ff99bb",
          borderRadius: "10px",
        }}
      >
        <Typography
          component={Link}
          to="/categories/2"
          sx={{
            fontSize: "30px",
            textDecoration: "none",
            color: "#ff99bb",
            fontFamily: "Ziba",
            fontWeight: "bold",
          }}
        >
          لوازم ایمنی و مراقبت
        </Typography>
      </Box>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data2.map((item) => (
          <Link to={`product/${item.id}`} style={{ textDecoration: "none" }}>
            <Card
              className="card-body-for-my-home-page"
              key={item.id}
              xs={12}
              md={6}
              lg={4}
              sx={{ m: "2rem", width: "310px" }}
            >
              <Paper>
                <CardMedia
                  className="card-picture-for-my-home-page"
                  component="img"
                  sx={{
                    width: "145px",
                    height: "145px",
                    margin: "0 auto",
                  }}
                  image={`${BASE_URL}/files/${item.image[0]}`}
                  alt={`${item.name}`}
                />
              </Paper>
              <CardContent
                sx={{
                  backgroundImage: `linear-gradient(#fff3e0,#fff3e0, #fff3e0 120%)`,
                  height: "100px",
                }}
              >
                <Typography>{item.name}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography>
                      {item.price &&
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <span
                        style={{
                          fontFamily: "Ziba",
                          fontWeight: "bold",
                          color: "#81d4fa",
                          marginRight: "2%",
                        }}
                      >
                        تومان
                      </span>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#f44336",
                      padding: "0 1%",
                      borderRadius: "30%",
                      color: "white",
                    }}
                  >
                    {item.off}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </>
  );
}
