import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../Hero';
import { imageUrl } from '../utils/images';

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			setIsLoading(true);
			const user = await axios.get('https://jsonplaceholder.typicode.com/users');
			setUsers(user.data);
			setIsLoading(false);
		} catch (error) {
			setError(true);
			setIsLoading(false);
		}
	};

	if (isLoading) return <p className='loading'>Loading...</p>;
	if (error) return <p>error message</p>;

	return (
		<div>
			<Hero />
			<div className='user--cards'>
				{users &&
					users.map((user) => {
						return (
							<Link to={`/UserPage/${user.id}`} className='user--card' key={user.id}>
								<img src={imageUrl[user.id - 1]} alt='' className='user--card__img' />
								<div className='userContent'>
									<h2>
										<span>Name:</span> {user.name}
									</h2>

									<p>
										<span>Email:</span> {user.email}
									</p>
									<p>
										<span>Phone Number:</span> {user.phone}
									</p>
								</div>
								<Link to={`/UserPage/${user.id}`} className='btn--card'>
									More Info
								</Link>
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default UserList;
