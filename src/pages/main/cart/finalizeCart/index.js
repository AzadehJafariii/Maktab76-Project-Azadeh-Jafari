import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { BASE_URL } from "config/api";

export default function FinalizeCart() {
  const [props, setProps] = useState({
    value: new Date().toLocaleDateString("fa-IR"),
    // {moment(post.date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
    format: "YYYY-MM-DD",
    onChange: (date) => console.log(date.format()),
    calendar: persian,
    locale: persian_fa,
    calendarPosition: "bottom-right",
  });

  const cartTotalAmount = JSON.parse(localStorage.getItem("cartTotalAmount"));

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      delivered: false,
      createdAt: 1646158398160,
      address: "",
      phone: 0,
      expectAt: 1663345909000,
      prices: cartTotalAmount,
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "حداقل 3 حرف وارد شود")
        .required("فیلد اجباری است"),
      lastName: Yup.string()
        .min(4, "حداقل 4 حرف وارد شود")
        .required("فیلد اجباری است"),
      address: Yup.string()
        .min(8, "حداقل 8 حرف وارد شود")
        .required("فیلد اجباری است"),
      phone: Yup.string()
        .min(10, "حداقل 11 رقم وارد شود")
        .required("فیلد اجباری است"),
    }),
    onSubmit: (values) => {
      // values.phone = values.phone.toString();
      localStorage.setItem("userData", JSON.stringify(values, null, 2));
      window.location.assign(`${BASE_URL}/paymentGateway`);
    },
  });

  return (
    <div style={{ direction: "rtl" }}>
      <div style={{ margin: "4%" }}>
        <h2>نهایی کردن سبد خرید</h2>
      </div>
      <form onSubmit={formik.handleSubmit} style={{ fontSize: "18px" }}>
        <div style={{ display: "flex", gap: "10%", marginRight: "10%" }}>
          <div style={{ width: "30%" }}>
            <div>
              <label htmlFor="firstName">نام</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red", marginRight: "3px" }}>
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
          </div>

          <div style={{ width: "30%" }}>
            <div>
              <label htmlFor="lastName">نام خانوادگی</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red", marginRight: "3px" }}>
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10%",
            marginRight: "10%",
            marginTop: "2%",
          }}
        >
          <div style={{ width: "30%" }}>
            <div>
              <label htmlFor="address">آدرس</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div style={{ color: "red", marginRight: "3px" }}>
                  {formik.errors.address}
                </div>
              ) : null}
            </div>
          </div>

          <div style={{ width: "30%" }}>
            <div>
              <label htmlFor="phone">
                تلفن همراه.
                <span style={{ color: "lightgray" }}>
                  جهت هماهنگی ارسال سفارش{" "}
                </span>
              </label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                id="phone"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div style={{ color: "red", marginRight: "3px" }}>
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div style={{ marginRight: "10%", marginTop: "2%" }}>
          <div>
            <label htmlFor="address">تاریخ تحویل</label>
          </div>
          <div>
            <DatePicker {...props} onPropsChange={setProps} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2%",
          }}
        >
          <button
            type="submit"
            // disabled={!value}
            style={{
              padding: "0.4% 2.5%",
              backgroundColor: "green",
              borderRadius: "5px",
              fontSize: "18px",
              fontFamily: "Nazanin",
              border: "1px solid black",
            }}
          >
            پرداخت
          </button>
        </div>
      </form>
    </div>
  );
}
