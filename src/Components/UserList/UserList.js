import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../Hero';
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
const UserList = () => {
	const imageUrl = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
					users.map((user, index) => {
						return (
							<Link to={`/UserPage/${user.id}`} className='user--card'>
								<div className='card-img'>
									<img src={imageUrl[index]} alt='' />
								</div>
								<div key={user.id} user={user} className='userContent'>
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
