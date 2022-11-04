import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import img10 from '../../Assets/img10.jpg';

const UserPage = () => {
	const imageUrl = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
