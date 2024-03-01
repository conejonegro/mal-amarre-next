import { Form, FormField, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { validationSchemaIniciar, initialValuesIniciar } from "@/utils/registro.form";
import useLoginHook from "@/hooks/useLogin";
import login from "@/api/loginCall";
import { useRouter } from "next/router";

function IniciarSesionForm() {

    // const [ accessTokenState, setTokenaccessTokenState ] = useState();
    // const { accessToken } = useLoginHook()
    const data = useLoginHook();
    const { loginFromContext } = data;
    //  console.log("DATOS TRAIDOS DESDE EL CONTEXT", data)
    // const router = useRouter()
    // { data &&
    //     router.push("/")
    // }
    console.log("HOOK", useLoginHook())

    const formik = useFormik({
        initialValues: initialValuesIniciar(),
        validationSchema: validationSchemaIniciar(),
        validateOnChange: false,

        onSubmit: async (formValues) => {

          try {
            const datos =  await login(formValues)
            // console.log("MIS DATOS DESDE FORMA", datos)
            loginFromContext(datos.jwt, datos.user)
            
          } catch (error) {
            console.log(error)
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