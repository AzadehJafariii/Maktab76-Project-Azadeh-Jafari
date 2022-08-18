import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../redux/features/order/orderSlice";
import { Pagination, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function Orders() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const ordersList = useSelector((state) => state.orders);
  console.log("ordersList", ordersList);
  useEffect(() => {
    dispatch(fetchOrders(params));
  }, []);

  return (
    <Box sx={{ margin: "4%" }}>
      <Box sx={{ display: "flex", gap: "40%" }}>
        <Typography
          variant="h5"
          sx={{
            margin: "2% 5%",
            fontFamily: "Titr",
            color: "green",
          }}
        >
          مدیریت سفارش ها
        </Typography>
        <Box sx={{ marginTop: "2%", width: "30%" }}>
          <TextField
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            sx={{ margin: "0 2%" }}
          />
          <label for="html">سفارش های تحویل شده</label>
          <TextField type="radio" id="css" name="fav_language" value="CSS" />
          <label for="css">سفارش های در انتظار ارسال</label>
        </Box>
      </Box>
      <Table
        sx={{ minWidth: 650, margin: "3% 3%" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ border: "1px solid gray", fontFamily: "Nazanin" }}
              align="left"
            >
              نام کاربر
            </TableCell>
            <TableCell
              sx={{ border: "1px solid gray", fontFamily: "Nazanin" }}
              align="center"
            >
              مجموع مبلغ
            </TableCell>
            <TableCell
              sx={{ border: "1px solid gray", fontFamily: "Nazanin" }}
              align="center"
            >
              زمان ثبت سفارش
            </TableCell>
            <TableCell
              sx={{ border: "1px solid gray", fontFamily: "Nazanin" }}
              align="center"
            >
              وضعیت سفارش
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersList.length &&
            ordersList.map((item) => (
              <StyledTableRow key={item.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ border: "1px solid gray" }}
                >
                  {item.username}
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid gray" }}>
                  {item.prices &&
                    item.prices
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid gray" }}>
                  {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid gray" }}>
                  {item.status === "done" ? (
                    "تحویل داده شده"
                  ) : (
                    <Typography color="error" variant="subtitle1">
                      در انتظار تحویل
                    </Typography>
                  )}
                </TableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "5%" }}
      >
        <Pagination
          count={2}
          color="success"
          onClick={(event) => setParams(event.target.textContent)}
        />
      </Box>
    </Box>
  );
}
