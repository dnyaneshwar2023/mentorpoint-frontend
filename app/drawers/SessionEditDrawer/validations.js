import * as yup from "yup";

const validationSchema = yup.object().shape({
  session_title: yup.string().required(),
  session_description: yup.string().required(),
  fee: yup.nu,
});

export default validationSchema;
