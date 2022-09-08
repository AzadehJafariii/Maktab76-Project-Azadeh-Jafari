import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "config/api";
import { eachGoodsGet } from "redux/features/main/eachCategory/eachCategorySlice";
import { eachCategoriesGet } from "redux/features/main/eachCategory/eachCategorySlice";
import Sidebar from "components/main/sidebar";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Box,
} from "@mui/material";

export default function Category() {
  const [eachCategory, setEachCategory] = useState([]);
  const dispatch = useDispatch();
  const { categoriesId } = useParams();

  useEffect(() => {
    dispatch(eachCategoriesGet());
    dispatch(eachGoodsGet(categoriesId))
      .unwrap()
      .then((res) => setEachCategory(res));
  }, [categoriesId, dispatch]);
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box>
        <Box
          sx={{
            backgroundImage: `linear-gradient(#fff3e0,#fff3e0, #fff3e0 120%)`,
            margin: "1.5%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              textDecoration: "none",
              color: "#ff99bb",
            }}
          >
            کلیه ی محصولات
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
          {eachCategory.map((item) => (
            <Link
              to={`/categories/${categoriesId}/product/${item.id}`}
              style={{ textDecoration: "none" }}
            >
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
                      height: "150px",
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
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
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
      </Box>
    </Box>
  );
}
