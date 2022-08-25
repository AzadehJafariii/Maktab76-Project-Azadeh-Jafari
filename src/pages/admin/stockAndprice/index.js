import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/product/productSlice";
import { Pagination } from "@mui/material";
import { TextField, Box, Typography } from "@mui/material";

export default function StockAndPrice() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const productsList = useSelector((state) => state.products.productsList);
  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [params]);
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          margin: "2% 5%",
          fontFamily: "Titr",
          color: "green",
        }}
      >
        مدیریت موجودی و قیمت ها
      </Typography>
      <Box>
        <table style={{ margin: "4% 3%", textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid gray" }}>کالا</th>
              <th style={{ border: "1px solid gray" }}>قیمت</th>
              <th style={{ border: "1px solid gray" }}>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {productsList.length &&
              productsList.map((item) => {
                return (
                  <tr key={item.id}>
                    <td style={{ border: "1px solid gray", width: "80%" }}>
                      {item.name}
                    </td>
                    <td style={{ border: "1px solid gray" }}>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        value={item.price}
                      />
                    </td>
                    <td style={{ border: "1px solid gray" }}>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        value={item.quantity}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Box>
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
}
