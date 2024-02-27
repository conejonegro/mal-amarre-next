import { Form, FormField, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { validationSchemaIniciar, initialValuesIniciar } from "@/utils/registro.form";
import { ENV } from "@/utils";
import useLoginHook from "@/hooks/useLogin";
// import { useState } from "react";

function IniciarSesionForm() {

    // const [ accessTokenState, setTokenaccessTokenState ] = useState();
    // const { accessToken } = useLoginHook()

    const formik = useFormik({
        initialValues: initialValuesIniciar(),
        validationSchema: validationSchemaIniciar(),
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
              `${ENV.API_URL}/auth/local`,
              opciones
            );
            const datos = await response.json();
            console.log("LOGIN CORRECTO",datos);

            // setTokenaccessTokenState(datos.jwt)
            console.log("ACCESS TOKEN GUARDADO", datos.jwt)

            // router.push("/");
    
          } catch (error) {
            console.log("ERROR", error);
          }

        },
      });

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