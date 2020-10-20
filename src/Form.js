import React, { useState } from 'react';

const Form = (props) => {
	//STATE FOR THE FORM

	///// NEED TO UPDATE THIS SO THAT IT CAN ACCEPT AUTHORS AS WELL
	const [formDataCookbook, setFormDataCookbook] = useState(props.cookbook);
	/// NEED TO SET UP THIS LOGIC IN ORDER TO SEND AUTHOR DATA
	const [formDataAuthor, setFormDataAuthor] = useState(props.author);

	//// UPDATE THIS SO THAT IT CHECKS FOR EITHER AUTHORS OR COOKBOOKS AND SENDS APPROPRIATE DATA TO HANDLE SUBMIT
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formDataCookbook);
		props.handleSubmit(formDataCookbook);
		props.history.push('/'); //Push back to display page
	};

	/// add a handlechange for authors
	const handleChange = (event) => {
		setFormDataCookbook({
			...formDataCookbook,
			[event.target.name]: event.target.value,
		});
	};

	return (
		/// CHANGE THESE IN ORDER TO HAVE CORRECT firstName lastName props for author
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				value={formDataCookbook.title}
				onChange={handleChange}
				placeholder='Title'
			/>
			<input
				type='text'
				name='yearPublished'
				value={formDataCookbook.yearPublished}
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
