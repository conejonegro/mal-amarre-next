import * as Yup from "yup";

// Validaciones para forma de registro

function initialValues(){
    return(
        {
            email: "",
            username: "",
            password: "",
            Firstname: "",
            Lastname: ""
        }
       
    )
}

export { initialValues };

function validationSchema(){

    return Yup.object({
            email: Yup.string().email(true).required(true),
            username: Yup.string().required(true),
            password: Yup.string().required(true),
            Firstname: Yup.string().required(true),
            Lastname: Yup.string().required(true)
         })
}

// Validaciones para Iniciar sesion

function initialValuesIniciar(){
    return(
        {
            identifier: "",
            password: ""
        }
       
    )
}

export { initialValuesIniciar };

export { validationSchema };

function validationSchemaIniciar(){

    return Yup.object({
        identifier: Yup.string().required(true),
            password: Yup.string().required(true)
         })
}

export { validationSchemaIniciar };