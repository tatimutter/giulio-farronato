import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
  RouterProvider,
} from 'react-router-dom';

import './App.css'

import It from './Pages/Home';
import Eng from './Pages/Eng'
import ReqSuccess from './Components/ReqSuccess';
import ErrorBoundary from './Components/ErrorBoundary';

//layout
import AppLayout from './AppLayout';


const router = createBrowserRouter(
	createRoutesFromElements(
	<>
 
  <Route path="/" element={<AppLayout />} errorElement={<ErrorBoundary />}>
	
			
	<Route path="/" element={<It />} errorElement={<ErrorBoundary />} />
				
			
	<Route
				path="/eng"
				element={<Eng />}			
				errorElement={<ErrorBoundary />}
	/>
			{
			<Route
				path="/reqsuccess"
				element={<ReqSuccess />}
				errorElement={<ErrorBoundary />}
			/> }
		</Route>
	</>	
	)
);

function App() {
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
