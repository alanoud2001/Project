import * as yup from "yup"; //import all exports from the yup

export const bookSchemaValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup.string().max(8).required("phone is required"),
    fromPlace: yup.string().required("Place is required"),
    toPlace: yup.string().required("Place is required"),
    //date: yup.date().required("Place is required"),

   /*  fromPlace:yup.string()
               //  .notOneOf(["","select the place"],"Place select a validateplace")
                 .required("Place is required"),
     toPlace:yup.string()
               //  .notOneOf(["","select the place"],"Place select a validateplace")
                 .required("Place is required"),
    date:yup.date()
            .required("Date is required"),
            //.min(new Date(), "Date cannot be in the past")
    time:yup.string()
              .required("Time is required") 
               */
  });
  