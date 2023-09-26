
import { Outlet } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function AppLayout() {
	return (
		<div className="app-layout" >
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default AppLayout;