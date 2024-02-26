import * as Yup from "yup";


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

export { validationSchema };