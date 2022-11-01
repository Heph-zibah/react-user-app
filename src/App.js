import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage.';
import UserList from './Components/UserList/UserList';
import UserPage from './Components/UserList/UserPage';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<UserList />} />
					<Route path='*' element={<ErrorPage message='Page Not found' />} />
					<Route path='UserPage/:userId' element={<UserPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
