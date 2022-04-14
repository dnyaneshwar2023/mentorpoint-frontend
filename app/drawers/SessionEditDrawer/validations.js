import * as yup from "yup";

const validationSchema = yup.object().shape({
  session_title: yup.string().required(),
  session_description: yup.string().required(),
  fee: yup
    .number("Charge must be a number")
    .required()
    .typeError("Charge must be a number"),
  duration: yup
    .number("Duration Must Be a Number")
    .required()
    .typeError("Duration Must Be a Number"),
});

export default validationSchema;
