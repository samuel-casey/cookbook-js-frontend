import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Display from './Display';
import Form from './Form';

function App() {
	const url = 'https://cookbook-js-backend.herokuapp.com/api';
	const [cookbooks, setCookbooks] = useState([]);
	const [authors, setAuthors] = useState([]);

	const emptyCookbook = {
		title: '',
		yearPublished: '',
	};

	const emptyAuthor = {
		firstName: '',
		lastName: '',
		cookbooks: [],
	};

	const [selectedCookbook, setSelectedCookbook] = useState(emptyCookbook);
	const [selectedAuthor, setSelectedAuthor] = useState(emptyAuthor);

	const getCookbooks = () => {
		axios.get(url + '/cookbooks/').then((res) => {
			const cookbooks = res.data.data;
			setCookbooks(cookbooks);
		});
	};

	const getAuthors = () => {
		axios.get(url + '/authors/').then((res) => {
			const cookbooks = res.data.data;
			console.log(res.data);
			console.log(authors);
			setCookbooks(authors);
		});
	};

	useEffect(() => {
		getCookbooks();
	}, []);

	/// change this or add another version of it for authors
	const handleCreate = (newCookbook) => {
		axios({
			method: 'post',
			url: url + '/cookbooks/',
			data: {
				title: newCookbook.title,
				yearPublished: newCookbook.yearPublished,
			},
		}).then((response) => {
			console.log(response);
			getCookbooks();
		});
	};

	/// CHANGE this or add another version of it for authors
	const handleUpdate = (updatedCookbook) => {
		axios({
			method: 'put',
			url: url + '/cookbooks/' + updatedCookbook._id,
			data: {
				title: updatedCookbook.title,
				yearPublished: updatedCookbook.yearPublished,
			},
		}).then((response) => {
			console.log(response);
			getCookbooks();
		});
	};

	const selectCookbook = (cookbook) => {
		setSelectedCookbook(cookbook);
	};

	const deleteCookbook = (cookbook) => {
		fetch(url + '/cookbooks/' + cookbook._id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application.json',
			},
		}).then(() => {
			getCookbooks();
		});
	};

	const selectAuthor = (author) => {
		setSelectedAuthor(author);
	};

	const deleteAuthor = (author) => {
		fetch(url + '/authors/' + author._id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application.json',
			},
		}).then(() => {
			getAuthors();
		});
	};

	return (
		<div className='App'>
			<h1>Famous Cookbook cookbooks</h1>
			<hr />
			<main>
				<Link to='/create'>
					<button>Add cookbook</button>
					<button>Add author</button>
					<br></br>
					<br></br>
				</Link>
				<Switch>
					<Route
						exact
						path='/'
						render={(rp) => (
							<Display
								cookbooks={cookbooks}
								authors={authors}
								deleteCookbook={deleteCookbook}
								selectCookbook={selectCookbook}
								{...rp}
							/>
						)}
					/>
					<Route
						exact
						path='/create'
						render={(rp) => (
							<Form
								{...rp}
								label='create'
								cookbook={emptyCookbook}
								author={emptyAuthor}
								handleSubmit={handleCreate}
							/>
						)}
					/>
					<Route
						exact
						path='/edit'
						render={(rp) => (
							<Form
								{...rp}
								label='update'
								cookbook={selectedCookbook}
								handleSubmit={handleUpdate}
							/>
						)}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
