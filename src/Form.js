import React, { useState } from 'react';

const Form = (props) => {
	//STATE FOR THE FORM

	///// NEED TO UPDATE THIS SO THAT IT CAN ACCEPT AUTHORS AS WELL
	const [formData, setFormData] = useState(props.cookbook);

	//FUNCTIONS
	//// UPDATE THIS SO THAT IT CHECKS FOR EITHER AUTHORS OR COOKBOOKS AND SENDS APPROPRIATE DATA TO HANDLE SUBMIT
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		props.handleSubmit(formData);
		props.history.push('/'); //Push back to display page
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				value={formData.title}
				onChange={handleChange}
				placeholder='Title'
			/>
			<input
				type='text'
				name='yearPublished'
				value={formData.yearPublished}
				onChange={handleChange}
				placeholder='Year Published'
			/>
			{/* author's COOKBOOKS WILL GO HERE */}
			{/* <input
				type='text'
				name='img'
				value={formData.img}
				onChange={handleChange}
				placeholder='Image url'
			/> */}
			<input type='submit' value={props.label} />
		</form>
	);
};

export default Form;
