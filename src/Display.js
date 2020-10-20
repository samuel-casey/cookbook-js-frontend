import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Display = (props) => {
	const { cookbooks, authors } = props;

	const loaded = (
		<div style={{ textAlign: 'center' }}>
			<h3>COOKBOOKS</h3>
			{cookbooks.map((cookbook, index) => (
				<article key={index}>
					{(typeof cookbook._id, cookbook._id)}
					<p>Title: {cookbook.title}</p>
					<p>Year Publlished: {cookbook.yearPublished}</p>
					<button
						className='edit'
						onClick={() => {
							props.selectCookbook(cookbook);
							props.history.push('/edit');
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							props.deleteCookbook(cookbook);
						}}
						className='delete'>
						Delete
					</button>
				</article>
			))}
			<hr></hr>
			<h3>AUTHORS</h3>
			{authors.map((author, index) => (
				<article key={index}>
					{(typeof author._id, author._id)}
					<p>First: {author.firstName}</p>
					<p>Last: {author.lastName}</p>
					<p>Books: {author.cookbooks}</p>
					<button
						className='edit'
						onClick={() => {
							props.selectAuthor(author);
							props.history.push('/edit');
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							props.deleteAuthor(author);
						}}
						className='delete'>
						Delete
					</button>
				</article>
			))}
		</div>
	);

	const loading = <Spinner animation='border' />;

	return cookbooks.length > 0 ? loaded : loading;
};

export default Display;
