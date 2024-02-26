import { RegistroLayout } from "./layouts/RegistroLayout";
import { Form, FormField, Checkbox, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { ENV } from "@/utils";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "@/utils/registro.form";
import { useRouter } from "next/router";

function Registro() {
  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {

      const opciones = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      };

      try {
        const response = await fetch(
          `${ENV.API_URL}/auth/local/register`,
          opciones
        );
        const datos = await response.json();
        console.log(datos);
        router.push("/");

      } catch (error) {
        console.log("ERROR", error);
      }
    },
  });

  return (
    <RegistroLayout>
      <h1>Registro</h1>
      <Form type="submit" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="First Name"
            name="Firstname"
            type="text"
            value={formik.values.Firstname}
            onChange={formik.handleChange}
            error={formik.errors.Firstname}
          ></Form.Input>

          <FormField>
            <Form.Input
              placeholder="Last Name"
              name="Lastname"
              type="text"
              value={formik.values.Lastname}
              onChange={formik.handleChange}
              error={formik.errors.Lastname}
            ></Form.Input>
          </FormField>
          <FormField>
            <Form.Input
              placeholder="username"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.errors.username}
            ></Form.Input>
          </FormField>
        </Form.Group>
        <Form.Group>
          <FormField>
            <Form.Input
              placeholder="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
            ></Form.Input>
          </FormField>
          <FormField>
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
            ></Form.Input>
          </FormField>
        </Form.Group>
        <Form.Group>
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>
        </Form.Group>
        <Button type="submit" fluid loading={formik.isSubmitting}>
          Submit
        </Button>
      </Form>
    </RegistroLayout>
  );
}

export default Registro;
