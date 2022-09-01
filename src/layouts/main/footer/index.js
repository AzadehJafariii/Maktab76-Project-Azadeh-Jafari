import * as React from "react";
import { Box, Typography, Link } from "@mui/material";
import aks1 from "assets/images/footer/footer.jpg";
import aks2 from "assets/images/footer/Bsigns.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <Box>
      <Box>
        {" "}
        <Box
          component="img"
          src={aks1}
          alt="aks1"
          sx={{ borderTop: "1px solid gray" }}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "33%",
            marginLeft: "2%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Nazanin",
              borderBottom: "2px solid gray",
              width: "98%",
              textAlign: "center",
              marginBottom: "2%",
              paddingBottom: "2%",
            }}
          >
            درباره شازده کوچولو
          </Typography>
          <Typography sx={{ fontFamily: "Nazanin" }}>
            فروشگاه اینترنتی «شازده کوچولو» در زمینه فروش سیسمونی و لوازم کودک
            فعالیت می کند. محصولات شازده کوچولو به دلیل حذف واسطه ها با قیمت
            بسیار مناسبی ارائه می شود. همچنین محصولات ما با بالاترین کیفیت و از
            معتبرترین برندها می باشد. سایت نیز دارای مجوز و نماد اعتماد
            الکترونیک از مرکز توسعه تجارت الکترونیک وزارت صنعت و معدن و تجارت می
            باشد؛ و شما مشتریان عزیز با خیال راحت می توانید از ما خرید کنید.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "22%",
            marginLeft: "2%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Nazanin",
              borderBottom: "2px solid gray",
              width: "98%",
              textAlign: "center",
              margin: "1.2%",
              paddingBottom: "2%",
            }}
          >
            لینک های مفید
          </Typography>
          <Link
            href="#"
            sx={{
              fontFamily: "Nazanin",
              textDecoration: "none",
              color: "black",
            }}
          >
            شرایط و قوانین
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Nazanin",
              textDecoration: "none",
              color: "black",
            }}
          >
            شرایط بازگردانی کالا
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Nazanin",
              textDecoration: "none",
              color: "black",
            }}
          >
            ارتباط با شازده کوچولو
          </Link>
          <Box
            sx={{
              display: "flex",
              marginTop: "4%",
            }}
          >
            <Link href="#">
              {" "}
              <InstagramIcon
                sx={{ fontSize: "35px", color: "#81d4fa", margin: "0 4%" }}
              />
            </Link>
            <Link href="#">
              {" "}
              <LinkedInIcon
                sx={{ fontSize: "35px", color: "#81d4fa", margin: "0 4%" }}
              />
            </Link>
            <Link href="#">
              {" "}
              <TelegramIcon
                sx={{ fontSize: "35px", color: "#81d4fa", margin: "0 4%" }}
              />
            </Link>
            <Link href="#">
              {" "}
              <WhatsAppIcon
                sx={{ fontSize: "35px", color: "#81d4fa", margin: "0 4%" }}
              />
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2% 0 0 4%",
          }}
        >
          <Box>
            {" "}
            <Box component="img" src={aks2} alt="aks2" />
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Nazanin",
                textAlign: "center",
                marginBottom: "5%",
              }}
            >
              تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
              آنلاین شازده کوچولو) است.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
