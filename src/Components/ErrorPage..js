import React from 'react';

const ErrorPage = ({ message = 'Something went wrong' }) => {
	return (
		<div className='error'>
			<h1>{message}</h1>
		</div>
	);
};

export default ErrorPage;
