 import {useFormik} from "formik"
 const  validate = (value) => {
  const errors = {}
 if(!value.name) {
 errors.name = "Requerido" 
 } else if (value.name.length < 5){
   errors.name =" El nombre es muy corto"
 }
 if(!value.lastname) {
  errors.lastname = "Requerido" 
  } else if (value.lastname.length < 5){
    errors.lastname =" El apellido es muy corto"
  }

  return errors 
} 

function App() {
 const formik = useFormik ({
   initialValues: {
     name: "",
     lastname:"",
     email:"",
   },
   validate,
   onSubmit:  values => console.log(values)
 })
 return (
  <form onSubmit={formik.handleSubmit}>
    <label>Nombre</label> 
    <input type="text" {...formik.getFieldProps("name")} />
     {formik.touched.name  && formik.errors.name? 
     <div>{formik.errors.name}</div> : null }
    <br />
    <label>Apellido</label>
    <input type="text"   {...formik.getFieldProps("lastname")}/>
    {formik.touched.lastname && formik.errors.lastname? 
    <div>{formik.errors.lastname}</div> : null}
    <br/>
    <label>Email</label>
    <input type="email"  {...formik.getFieldProps("email")}/>
    {formik.touched.email && formik.errors.email? 
    <div>{formik.errors.email}</div> : null}
    <button type="submit">Enviar</button>
  </form>
 );
}

export default useFormik