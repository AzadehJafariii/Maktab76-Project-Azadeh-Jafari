import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "config/api";
import { fetchProducts } from "redux/features/admin/products/productsSlice";
import { fetchCategory } from "redux/features/admin/category/categorySlice";
import {
  Pagination,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import CoDeleteModal from "components/admin/commodities/coDeleteModal";
import CoEditModal from "components/admin/commodities/coEditModal";
import CoAddModal from "components/admin/commodities/coAddModal";

export default function Commodities() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const { categoryList } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.products);
  const { totalCount } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(page))
      .unwrap()
      .then((res) => {
        setData(res);
      });
    dispatch(fetchCategory());
  }, [page, dispatch]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

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
          <CoAddModal
            setData={setData}
            categoryList={categoryList}
            page={page}
          />
        </Box>
      </Box>
      <Table sx={{ width: "1000px", margin: "5% 0 0 10%" }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#e1f5fe" }}>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
            >
              تصویر
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
            >
              نام کالا
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
            >
              دسته بندی
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
            >
              ویرایش
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
            >
              حذف
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                style={{
                  width: "20%",
                  height: "20%",
                  border: "1px solid gray",
                  fontSize: "18px",
                }}
              >
                <img
                  src={`${BASE_URL}/files/${item?.thumbnail}`}
                  alt="commodityPhoto"
                  style={{ width: "30%", height: "30%" }}
                />
              </TableCell>
              <TableCell style={{ border: "1px solid gray", fontSize: "18px" }}>
                {item?.name}
              </TableCell>
              <TableCell style={{ border: "1px solid gray", fontSize: "18px" }}>
                {
                  categoryList.find(
                    (category) => category.id === item?.category
                  )?.name
                }
              </TableCell>
              <TableCell style={{ border: "1px solid gray", fontSize: "18px" }}>
                <CoEditModal
                  item={item}
                  categoryList={categoryList}
                  page={page}
                />
              </TableCell>
              <TableCell style={{ border: "1px solid gray", fontSize: "18px" }}>
                <CoDeleteModal item={item} setData={setData} page={page} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "3% 0",
        }}
      >
        <Pagination
          count={Math.ceil(totalCount / 5)}
          page={page}
          color="success"
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
