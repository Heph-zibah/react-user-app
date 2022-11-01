import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
		<div className='user--cards'>
			{users &&
				users.map((user) => {
					return (
						<div className='user--card'>
							<div className='card-img list'>
								<img src='https://source.unsplash.com/200x100/?portrait' alt='' />
							</div>
							<div key={user.id} user={user}>
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
						</div>
					);
				})}
		</div>
	);
};

export default UserList;
