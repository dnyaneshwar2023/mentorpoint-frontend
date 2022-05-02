import * as yup from "yup";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
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
