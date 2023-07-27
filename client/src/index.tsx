import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Paths } from './routes/paths'
import Login from './screens/login/Login'
import Register from './screens/register/Register'
import { ConfigProvider, theme } from 'antd'
import reportWebVitals from './reportWebVitals'
import Home from './screens/home/Home'
import Auth from './features/auth/auth'

import './index.css'
const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <Home />,
	},
	{
		path: Paths.login,
		element: <Login />,
	},
	{
		path: Paths.register,
		element: <Register />,
	},
])

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
				}}
			>
				<Auth>
					<RouterProvider router={router} />
				</Auth>
			</ConfigProvider>
		</Provider>
	</React.StrictMode>
)

reportWebVitals()
