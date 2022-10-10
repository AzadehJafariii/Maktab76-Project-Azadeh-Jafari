import { useDispatch, useSelector } from "react-redux";
import { getTotals, removeFromCart } from "redux/features/main/cart/cartSlice";
import { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
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

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ margin: "2%" }}>
        سبد خرید
      </Typography>
      <Box sx={{ margin: "5% 20%" }}>
        {cartItems.length ? (
          <Box>
            <Table>
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
                      fontSize: "18px",
                      color: "#ff99bb",
                    }}
                  >
                    کالا
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "18px",
                      color: "#ff99bb",
                    }}
                  >
                    قیمت
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "18px",
                      color: "#ff99bb",
                    }}
                  >
                    تعداد
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid gray",
                      fontSize: "18px",
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
                    <TableCell sx={{ border: "1px solid gray" }}>
                      <Link href={`product/${product.id}`} underline="none">
                        {product.name}
                      </Link>
                    </TableCell>
                    <TableCell sx={{ border: "1px solid gray" }}>
                      {product.price}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid gray" }}>
                      {cartTotalAmount / product.price}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid gray", textAlign: "center" }}
                    >
                      <Button>
                        <DeleteOutlineIcon
                          sx={{ color: "red" }}
                          onClick={() => handleRemove(product.id)}
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box
              sx={{
                display: "flex",
                gap: "50%",
                alignItems: "baseLine",
                margin: "5% 0 0 3%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20%",
                  border: "1px solid gray",
                  padding: "1% 5%",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h5">مجموع:</Typography>
                <Typography variant="h5">{cartTotalAmount}</Typography>
              </Box>
              <Link href="/finalizeCart" underline="none">
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "2px solid gray",
                    backgroundColor: "green",
                    color: "black",
                  }}
                >
                  نهایی کردن سبد خرید
                </Button>
              </Link>
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
