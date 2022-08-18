<<<<<<< HEAD
import React from "react";

export default function Commodities() {
  return <div>کالاها</div>;
=======
import * as React from "react";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/product/productSlice";
import { BASE_URL } from "../../../api/constants";
import { Box, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Commodities() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const productsList = useSelector((state) => state.products.productsList);
  useEffect(() => {
    dispatch(fetchProducts(params));
  }, []);
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "78%" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Titr",
              margin: "15% 0 0 60%",
              width: "110%",
              color: "green",
            }}
          >
            مدیریت کالا ها
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              fontFamily: "Titr",
              border: "1px solid green",
              backgroundColor: "green",
              color: "white",
              borderRadius: "10%",
              marginTop: "25%",
            }}
          >
            افزودن کالا
          </Button>
        </Box>
      </Box>
      <table style={{ margin: "4% 3%", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid gray" }}>تصویر</th>
            <th style={{ border: "1px solid gray" }}>نام کالا</th>
            <th style={{ border: "1px solid gray" }}>دسته بندی</th>
            <th style={{ border: "1px solid gray" }}></th>
          </tr>
        </thead>
        <tbody>
          {productsList.length &&
            productsList.map((item) => {
              return (
                <tr key={item.id}>
                  <td
                    style={{
                      width: "20%",
                      height: "20%",
                      border: "1px solid gray",
                    }}
                  >
                    <img
                      src={`${BASE_URL}/files/${item.image}`}
                      alt="mobile"
                      style={{ width: "30%", height: "30%" }}
                    />
                  </td>
                  <td style={{ border: "1px solid gray" }}>{item.name}</td>
                  <td style={{ border: "1px solid gray" }}>{item.category}</td>
                  <td style={{ border: "1px solid gray" }}>
                    <Tooltip title="Edit">
                      <IconButton>
                        <BorderColorIcon
                          variant="warning"
                          className="mx-1"
                          sx={{ color: "green", margin: "0 5%" }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteOutlineIcon
                          variant="danger"
                          sx={{ color: "red", margin: "0 5%" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "5%" }}
      >
        <Pagination
          count={8}
          color="success"
          onClick={(event) => setParams(event.target.textContent)}
        />
      </Box>
    </Box>
  );
>>>>>>> development
}
