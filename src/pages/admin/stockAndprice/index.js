import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { fetchProducts } from "redux/features/admin/products/productsSlice";
import { EditText } from "react-edit-text";
import { axiosPrivate } from "api/http";
import {
  Table,
  Box,
  Typography,
  Button,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function InventoryPrice() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [limit] = useState(5);
  const [newPrice, setNewPrice] = useState([]);

  async function getItems(page, limit) {
    const res = await fetch(
      `http://localhost:3002/products?_page=${page}&_limit=${limit}`
    );

    let items = await res.json();
    items = items.map((item) => ({ ...item, price: item.price }));
    return { data: items, total: res.headers.get("x-total-count") };
  }

  useEffect(() => {
    const calculatePages = async () => {
      const { data, total } = await getItems(1, limit);
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };
    calculatePages();
  }, [limit]);

  const handlePageClick = async (param) => {
    const currentPage = param.selected + 1;
    const { data } = await getItems(currentPage, limit);
    setItems(data);
  };

  // price
  const handleChange = (e, id) => {
    const idx = items.findIndex((item) => item.id === id);
    const newPost = [...items];
    newPost[idx].price = e.target.value;
    setItems(newPost);
    const newPriceList = [...newPrice];
    const newIdx = newPrice.findIndex((item) => item.id === id);
    if (newIdx === -1) {
      const newObject = {
        id: id,
        newValPrice: e.target.value,
        newValQuantity: newPost[idx].quantity,
      };
      newPriceList.push(newObject);
    } else {
      newPriceList[newIdx].newValPrice = e.target.value;
    }
    setNewPrice(newPriceList);
  };
  // Quantity
  const handleChangeQuantity = (e, id) => {
    const idx = items.findIndex((item) => item.id === id);
    const newPost = [...items];
    newPost[idx].quantity = e.target.value;
    setItems(newPost);
    const newQuantityList = [...newPrice];
    const newIdx = newPrice.findIndex((item) => item.id === id);
    if (newIdx === -1) {
      const newObject = {
        id: id,
        newValPrice: newPost[idx].price,
        newValQuantity: e.target.value,
      };
      newQuantityList.push(newObject);
    } else {
      newQuantityList[newIdx].newValQuantity = e.target.value;
    }
    setNewPrice(newQuantityList);
  };

  const saveEdit = (e) => {
    console.log(newPrice);
    newPrice.forEach((element) => {
      try {
        let entiresData = {
          price: element.newValPrice,
          quantity: element.newValQuantity,
        };
        axiosPrivate
          .patch(`http://localhost:3002/products/${element.id}`, entiresData)
          .then((res) => {});
      } catch (error) {
        console.log("error!");
      }
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: "78%" }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Titr",
              margin: "20% 0 0 60%",
              width: "110%",
              color: "green",
            }}
          >
            مدیریت کالا ها
          </Typography>
        </Box>
        <Box>
          <Button
            type="submit"
            sx={{
              border: "2px solid gray",
              fontSize: "16px",
              backgroundColor: "green",
              color: "black",
              marginTop: "40%",
            }}
            onClick={() => saveEdit()}
          >
            ذخیره
          </Button>
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
              موجودی
            </TableCell>
          </TableRow>
        </TableHead>
        {items.length > 0
          ? items?.map((item, i) => (
              <TableBody>
                <TableRow key={item.id}>
                  <TableCell
                    sx={{ border: "1px solid gray", fontSize: "18px" }}
                  >
                    {item?.name}
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid gray", fontSize: "18px" }}
                  >
                    <EditText
                      value={item.price}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid gray", fontSize: "18px" }}
                  >
                    <EditText
                      value={item.quantity}
                      onChange={(e) => handleChangeQuantity(e, item.id)}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          : null}
      </Table>
      <div id="react-paginate">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
}
