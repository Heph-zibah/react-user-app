import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { imageUrl } from '../utils/images';

const UserPage = () => {
	const navigate = useNavigate();
	const { userId } = useParams();

	useEffect(() => {
		fetchUsers();
	}, [userId]);

	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		const singleUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
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
							<img src={imageUrl[userId - 1]} alt='' />
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
