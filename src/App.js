import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
  RouterProvider,
} from 'react-router-dom';

import './App.css'

import It from './Pages/Home';
import Eng from './Pages/Eng'
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
			{/*
			<Route
				path="/servizi"
				element={<Servizi />}
				errorElement={<ErrorBoundary />}
			/>
			<Route
				path="/richieste"
				element={<Richieste />}
				errorElement={<ErrorBoundary />}
			/>
			<Route
				path="/inscrsuccess"
				element={<InscrSuccess />}
				errorElement={<ErrorBoundary />}
			/>
			<Route
				path="/informazioni"
				element={<Informazioni />}
				errorElement={<ErrorBoundary />}
			/>
			<Route
				path="/reqsuccess"
				element={<ReqSuccess />}
				errorElement={<ErrorBoundary />}
			/> */}
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
