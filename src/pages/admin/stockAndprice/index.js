import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/features/admin/products/productsSlice";
import { Pagination, TextField, Box, Typography, Button } from "@mui/material";

export default function StockAndPrice() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  // const [edit, setEdit] = useState(false);
  // const [tempId, setTempId] = useState(0);
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    dispatch(fetchProducts(params))
      .unwrap()
      .then((res) => setProducts(res));
  }, [params]);

  // const handleChangePrice = (item) => {
  //   setEdit(true);
  //   setTempId(item.id);
  // };
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "70%" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Titr",
              margin: "10% 0 0 30%",
              width: "110%",
              color: "green",
            }}
          >
            مدیریت موجودی و قیمت ها
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              border: "2px solid gray",
              fontFamily: "Nazanin",
              fontSize: "16px",
              backgroundColor: "green",
              color: "black",
              marginTop: "20%",
            }}
          >
            ذخیره
          </Button>
        </Box>
      </Box>
      <Box>
        <form>
          <table style={{ margin: "4% 3%", textAlign: "center" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid gray" }}>کالا</th>
                <th style={{ border: "1px solid gray" }}>قیمت</th>
                <th style={{ border: "1px solid gray" }}>موجودی</th>
              </tr>
            </thead>
            <tbody>
              {products.length &&
                products.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ border: "1px solid gray", width: "80%" }}>
                        {item.name}
                      </td>

                      <td style={{ border: "1px solid gray" }}>
                        {/* {item.price &&
                          item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                        <TextField
                          id="outlined-multiline-flexible"
                          multiline
                          maxRows={4}
                          value={item.price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        {/* <Box onClick={() => handleChangePrice(item)}>
                          {edit && tempId === item.id ? (
                            <TextField
                              id="outlined-multiline-flexible"
                              multiline
                              maxRows={4}
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          ) : (
                            <Typography>{item.price}</Typography>
                          )}
                        </Box> */}
                      </td>
                      <td style={{ border: "1px solid gray" }}>
                        <TextField
                          id="outlined-multiline-flexible"
                          multiline
                          maxRows={4}
                          value={item.quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </form>
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
