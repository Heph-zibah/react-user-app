import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPage = () => {
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		fetchUsers();
	}, [params]);

	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		const singleUser = `https://jsonplaceholder.typicode.com/users/${params.userId}`;
		try {
			setIsLoading(true);
			const user = await axios.get(singleUser);
			setUsers(user.data);
			setIsLoading(false);
		} catch (error) {
			setError(true);
			setIsLoading(false);
		}
	};

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>error message</p>;

	return (
		<div className='userPageCard'>
			<p className='userPageHead'>User page</p>
			<>
				{users && (
					<div className='user--card page'>
						<div className='card-img'>
							<img src='https://source.unsplash.com/200x100/?portrait' alt='' />
						</div>
						<div key={users.id} className='userPageContent'>
							<h2>
								<span>Name:</span> {users.name}
							</h2>

							<p>
								<span>Email:</span> {users.email}
							</p>
							<p>
								<span>Phone Number:</span> {users.phone}
							</p>
							<p>
								<span>Website:</span> {users.website}
							</p>
							<p>
								<span>Username:</span> {users.username}
							</p>
						</div>
					</div>
				)}
			</>
			<button onClick={() => navigate(-1)} className='btn--card back'>
				Go back
			</button>
		</div>
	);
};

export default UserPage;
