import { useDispatch, useSelector } from "react-redux";
import { getTotals, clearCart } from "redux/features/main/cart/cartSlice";
import { useEffect } from "react";
import { BASE_URL } from "config/api";
import CartDeleteModal from "components/main/cartDeleteModal";
import {
  Link,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Button,
} from "@mui/material";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartItems]);

  return (
    <Box>
      <Typography variant="h4" sx={{ margin: "2%" }}>
        سبد خرید
      </Typography>
      <Box sx={{ margin: "5% 20%" }}>
        {cartItems.length ? (
          <Box>
            <Table sx={{ textAlign: "center" }}>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#e1f5fe",
                    border: "1px solid #ff99bb",
                  }}
                >
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "20px",
                      color: "#ff99bb",
                      width: "15%",
                      textAlign: "center",
                    }}
                  >
                    تصویر کالا
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "20px",
                      color: "#ff99bb",
                      textAlign: "center",
                    }}
                  >
                    کالا
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "20px",
                      color: "#ff99bb",
                      textAlign: "center",
                    }}
                  >
                    قیمت
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "20px",
                      color: "#ff99bb",
                      textAlign: "center",
                    }}
                  >
                    تعداد
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "20px",
                      color: "#ff99bb",
                      textAlign: "center",
                    }}
                  >
                    مجموع
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "20px",
                      color: "#ff99bb",
                      textAlign: "center",
                    }}
                  >
                    حذف
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell
                      sx={{
                        height: "40%",
                        border: "1px solid gray",
                      }}
                    >
                      <img
                        src={`${BASE_URL}/files/${product?.thumbnail}`}
                        alt="commodityPhoto"
                        style={{ width: "100%", height: "30%" }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid gray",
                        fontSize: "18px",
                      }}
                    >
                      <Link
                        href={`product/${product.id}`}
                        underline="none"
                        sx={{ color: "black" }}
                      >
                        {product.name}
                      </Link>
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid gray", fontSize: "18px" }}
                    >
                      {product.price &&
                        product.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid gray", fontSize: "18px" }}
                    >
                      {product.count}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid gray", fontSize: "18px" }}
                    >
                      {product.price * product.count}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid gray", textAlign: "center" }}
                    >
                      <CartDeleteModal product={product} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box
              sx={{
                display: "flex",
                gap: "5%",
                alignItems: "baseLine",
                margin: "8% 0 4% 0",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20%",
                  border: "1px solid gray",
                  padding: "1% 5%",
                  borderRadius: "4px",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", gap: "2%", width: "100%" }}>
                  <Typography variant="h6" sx={{ width: "100%" }}>
                    جمع کل سبد:
                  </Typography>
                  <Typography variant="h5">
                    {cartTotalAmount &&
                      cartTotalAmount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Ziba",
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginRight: "3%",
                    }}
                  >
                    تومان
                  </Typography>
                </Box>
              </Box>

              <Button
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  border: "2px solid gray",
                  backgroundColor: "green",
                  color: "black",
                  width: "70%",
                }}
              >
                <Link
                  href="/finalizeCart"
                  underline="none"
                  sx={{ color: "black" }}
                >
                  نهایی کردن سبد خرید
                </Link>
              </Button>
              <Button
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  border: "1px solid gray",
                  color: "black",
                  width: "70%",
                }}
                onClick={() => dispatch(clearCart())}
              >
                پاک کردن سبد خرید
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography>سبد خالی است</Typography>
            <Link
              href="/"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Ziba",
                  color: "#ff99bb",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                بازگشت به سایت
              </Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}
