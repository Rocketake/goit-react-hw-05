import { Field, Form, Formik } from "formik"


const SearchBar = ({handleSetParams}) => {
	const initialValues = {
	query: ''
	} 
	
	const handleSubmit = (value, options) => {
		console.log(value);
		handleSetParams(value.query)
		options.resetForm()
		
	}
  return (
	  <div>
		  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
			  <Form>
				  <Field type="text" name="query">
					  
				  </Field>
				  <button type="submit">Search</button>
			  </Form>
		  </Formik>
	</div>
  )
}

export default SearchBar