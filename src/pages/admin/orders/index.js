import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "redux/features/admin/order/ordersSlice";
import OrDeliveredModal from "components/admin/orders/orDeliveredModal";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function Orders() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const ordersList = useSelector((state) => state.orders.ordersList);
  const { totalCount } = useSelector((state) => state.products);
  const [delivered, setDelivered] = useState(true);
  useEffect(() => {
    dispatch(fetchOrders({ delivered, page }));
  }, [delivered, page, dispatch]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ margin: "4% 8% 4% 4%" }}>
      <Box
        sx={{
          display: "flex",
          gap: "30%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            margin: "1% 5%",
            fontFamily: "Titr",
            color: "green",
          }}
        >
          مدیریت سفارش ها
        </Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            defaultValue="delivered"
          >
            <FormControlLabel
              value="delivered"
              control={<Radio />}
              label="سفارش های تحویل شده"
              onClick={() => setDelivered(true)}
              sx={{ fontSize: "16px" }}
            />
            <FormControlLabel
              value="notDelivered"
              control={<Radio />}
              label="سفارش های در انتظار ارسال"
              onClick={() => setDelivered(false)}
              sx={{ fontSize: "16px" }}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Table sx={{ minWidth: 650, margin: "3%" }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#e1f5fe" }}>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
              align="left"
            >
              نام کاربر
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
              align="left"
            >
              نام خانوادگی
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
              align="center"
            >
              مجموع مبلغ
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
              align="center"
            >
              زمان ثبت سفارش
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
              align="center"
            >
              وضعیت سفارش
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid gray",
                fontSize: "18px",
                color: "#ff99bb",
              }}
              align="center"
            >
              بررسی سفارش
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersList.length &&
            ordersList.map((item) => (
              <TableRow key={item.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ border: "1px solid gray", fontSize: "18px" }}
                >
                  {item.firstName}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ border: "1px solid gray", fontSize: "18px" }}
                >
                  {item.lastName}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: "1px solid gray", fontSize: "18px" }}
                >
                  {item.prices &&
                    item.prices
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: "1px solid gray", fontSize: "18px" }}
                >
                  {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: "1px solid gray", fontSize: "16px" }}
                >
                  {item.delivered === true ? "تحویل شده" : "در انتظار ارسال"}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ border: "1px solid gray", fontSize: "18px" }}
                >
                  <OrDeliveredModal item={item} setDelivered={setDelivered} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "5%" }}
      >
        <Pagination
          count={Math.ceil(totalCount / 3)}
          page={page}
          color="success"
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
