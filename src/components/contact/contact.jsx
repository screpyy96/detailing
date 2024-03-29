import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

import { ContactWrapper, StyledBox } from "./contact.styled";
import { Form, Formik } from "formik";
import { Typography } from "@material-ui/core";

import { TextField } from "@mui/material";
import { StyledBtn } from "../subcomponents/subcomponents.styled";

const ContactForm = () => {
  const [from_name, setFrom_name] = useState("");
  const [from_email, setFrom_email] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const textFieldStyle = {
    background: "#fff",
    borderRadius: "5px",
    border: 0,
    color: "#ececec",
    /* Add a border when hovering over the TextField */
    "&:hover": {
      border: 0
    },
  };
  

  // eslint-disable-next-line
  const handleSubmit = (e) => {
    // eslint-disable-next-line
    const templateParams = {
      from_name,
      from_email,
      telephone,
      message,
    };
    emailjs.sendForm(
      "service_ys07ooc",
      "template_y6qkepf",
      form.current,
      "user_Zdj4p9NrBtz9chD2ILe0c"
    );
    setFrom_name("");
    setFrom_email("");
    setTelephone("");
    setMessage("");
  };

  const schema = Yup.object({
    from_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    from_email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    telephone: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    message: Yup.string()
      .max(500, "Must be 500 characters or less")
      .required("Required"),
  });

  return (
    <ContactWrapper>
      <StyledBox>
      <Typography style={{ color: "black", padding: "20px" }}>
        FA O PROGRAMARE
      </Typography>
        <Formik
          initialValues={{
            from_name: "",
            from_email: "",
            telephone: "",
            message: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(values);
              form.current.reset();
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            // handleBlur,
            // handleSubmit,
            isSubmitting,
          }) => (
            <Form ref={form}>
              <TextField
                style={textFieldStyle}
                margin="dense"
                label="Nume"
                name="from_name"
                value={values.from_name}
                onChange={handleChange} // eslint-disable-line}
                // onBlur={handleBlur}
                // helperText={touched.from_name ? errors.from_name : ''}
                error={touched.from_name && Boolean(errors.from_name)}
                variant="outlined"
                fullWidth
              />
              <TextField
                style={textFieldStyle}
                margin="dense"
                label="Serviciu"
                name="from_email"
                value={values.from_email}
                onChange={handleChange}
                // onBlur={handleBlur}
                // helperText={touched.from_email ? errors.from_email : ''}
                error={touched.from_email && Boolean(errors.from_email)}
                variant="outlined"
                fullWidth
              />
              <TextField
                style={textFieldStyle}
                margin="dense"
                label="Telefon"
                name="telephone"
                value={values.telephone}
                onChange={handleChange}
                // onBlur={handleBlur}
                // helperText={touched.telephone ? errors.telephone : ''}
                error={touched.telephone && Boolean(errors.telephone)}
                variant="outlined"
                fullWidth
              />
              <TextField
                style={textFieldStyle}
                margin="dense"
                label="Mesaj"
                name="message"
                value={values.message}
                onChange={handleChange}
                // onBlur={handleBlur}
                // helperText={touched.message ? errors.message : ''}
                error={touched.message && Boolean(errors.message)}
                variant="outlined"
                fullWidth
                multiline
                rows={2}
              />
            
                <StyledBtn
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  size="large"
                >
                  Trimite
                </StyledBtn>
          
            </Form>
          )}
        </Formik>
      </StyledBox>
    </ContactWrapper>
  );
};

export default ContactForm;
