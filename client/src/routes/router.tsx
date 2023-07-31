import Employee from '../screens/employee/Employee'
import Employees from '../screens/employees/Employees'
import Login from '../screens/login/Login'
import Register from '../screens/register/Register'
import AddEmployees from '../screens/addEmployee/AddEmployess'

import { createBrowserRouter } from 'react-router-dom'
import { Paths } from './paths'
import Status from '../screens/status/Status'
import EditEmployee from '../screens/editEmployee/EditEmployee'
export const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <Employees />,
	},
	{
		path: Paths.login,
		element: <Login />,
	},
	{
		path: Paths.register,
		element: <Register />,
	},
	{
		path: Paths.emoloyeeAdd,
		element: <AddEmployees />,
	},
	{
		path: `${Paths.status}/:status`,
		element: <Status />,
	},
	{
		path: `${Paths.employee}/:id`,
		element: <Employee />,
	},
	{
		path: `${Paths.employeeEdit}/:id`,
		element: <EditEmployee />,
	},
])
