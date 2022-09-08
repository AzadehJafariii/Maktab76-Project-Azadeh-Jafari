import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "redux/features/admin/products/productsSlice";
import { updateProduct } from "redux/features/admin/products/productsSlice";
import { Pagination, TextField, Box, Typography, Button } from "@mui/material";

export default function StockAndPrice() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const initialState = [
    { id: 1, price: 1000, quantity: 5 },
    { id: 2, price: 2000, quantity: 6 },
  ];
  const [products, setProducts] = useState(initialState);
  const [currentId, setCurrentId] = useState();

  useEffect(() => {
    dispatch(fetchProducts(params))
      .unwrap()
      .then((res) => setProducts(res));
  }, [params, dispatch]);

  const handleChange = (price, quantity, id) => {
    setCurrentId(id);
    setProducts((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, price: Number(price), quantity: Number(quantity) };
        }
        return obj;
      })
    );
  };

  const handleSave = useCallback(() => {
    const item = products.find((item) => item.id === currentId);
    if (currentId) {
      const updatedProduct = {
        price: item.price,
        quantity: item.quantity,
      };
      dispatch(updateProduct({ currentId, updatedProduct }))
        .unwrap()
        .then(() => fetchProducts());
    }
  }, [currentId, dispatch]);

  return (
    <Box>
      <Box sx={{ display: "flex", gap: "67%" }}>
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
            disabled={!currentId}
            onClick={handleSave}
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
          <table style={{ margin: "4% 10%", textAlign: "center" }}>
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
                        <TextField
                          id="outlined-multiline-flexible"
                          maxRows={4}
                          value={item.price}
                          onChange={(e) =>
                            handleChange(e.target.value, item.quantity, item.id)
                          }
                        />
                      </td>
                      <td style={{ border: "1px solid gray" }}>
                        <TextField
                          id="outlined-multiline-flexible"
                          maxRows={4}
                          value={item.quantity}
                          onChange={(e) =>
                            handleChange(item.price, e.target.value, item.id)
                          }
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
