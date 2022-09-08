import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "config/api";
import { fetchProducts } from "redux/features/admin/products/productsSlice";
import { fetchCategory } from "redux/features/admin/category/categorySlice";
import { Pagination, Box, Typography } from "@mui/material";
import CoDeleteModal from "components/admin/commodities/coDeleteModal";
import CoEditModal from "components/admin/commodities/coEditModal";
import CoAddModal from "components/admin/commodities/coAddModal";

export default function Commodities() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const categoryList = useSelector((state) => state.category.categoryList);
  useEffect(() => {
    dispatch(fetchProducts(params))
      .unwrap()
      .then((res) => setProducts(res));

    dispatch(fetchCategory())
      .unwrap()
      .then((res) => setCategory(res));
  }, [params, dispatch]);

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
          <CoAddModal setProducts={setProducts} categoryList={categoryList} />
        </Box>
      </Box>
      <table style={{ margin: "4% 3%", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid gray" }}>تصویر</th>
            <th style={{ border: "1px solid gray" }}>نام کالا</th>
            <th style={{ border: "1px solid gray" }}>دسته بندی</th>
            <th style={{ border: "1px solid gray" }}>ویرایش</th>
            <th style={{ border: "1px solid gray" }}>حذف</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td
                style={{
                  width: "20%",
                  height: "20%",
                  border: "1px solid gray",
                }}
              >
                <img
                  src={`${BASE_URL}/files/${item?.image}`}
                  alt="commodityPhoto"
                  style={{ width: "30%", height: "30%" }}
                />
              </td>
              <td style={{ border: "1px solid gray" }}>{item?.name}</td>
              <td style={{ border: "1px solid gray" }}>
                {
                  categoryList.find(
                    (category) => category.id === item?.category
                  )?.name
                }
              </td>
              <td style={{ border: "1px solid gray" }}>
                <CoEditModal item={item} categoryList={categoryList} />
              </td>
              <td style={{ border: "1px solid gray" }}>
                <CoDeleteModal item={item} setProducts={setProducts} />
              </td>
            </tr>
          ))}
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
}
