import { Form, FormField, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { validationSchemaIniciar, initialValuesIniciar } from "@/utils/registro.form";
import useLoginHook from "@/hooks/useLogin";
import login from "@/api/loginCall";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function IniciarSesionForm() {

    const data = useLoginHook();
    const { loginFromContext } = data;
    const router = useRouter()
    
    const formik = useFormik({
        initialValues: initialValuesIniciar(),
        validationSchema: validationSchemaIniciar(),
        validateOnChange: false,

        onSubmit: async (formValues) => {

          try {
            const datos =  await login(formValues)
           
            loginFromContext(datos.jwt, datos.user)
            
          } catch (error) {
            console.log(error)
          }
        
        },
      });

      useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/");
        }
    }, [formik]);

    return ( 
        <Form type="submit" onSubmit={formik.handleSubmit}>
        <Form.Group>
        </Form.Group>
        <Form.Group>
          <FormField>
            <Form.Input
              placeholder="Email o nombre de usuario"
              name="identifier"
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
        <Button type="submit" fluid loading={formik.isSubmitting}>
          Submit
        </Button>
      </Form>
     );
}

export { IniciarSesionForm };