import { Employee } from '@prisma/client'
import { Row } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAddEmoloyeeMutation } from '../../app/services/employees'
import EmployeeForm from '../../components/employeeForm/EmployeeForm'
import Layout from '../../components/layout/Layout'
import { selectUser } from '../../features/auth/authSlice'
import { Paths } from '../../routes/paths'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

const AddEmployees = () => {
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const user = useSelector(selectUser)
	const [addEmployee] = useAddEmoloyeeMutation()

	useEffect(() => {
		if (!user) {
			navigate('/login')
		}
	}, [user, navigate])
	const handleAddEmployee = async (data: Employee) => {
		try {
			await addEmployee(data).unwrap()
			navigate(`${Paths.status}/created`)
		} catch (err) {
			const maybeError = isErrorWithMessage(err)
			if (maybeError) {
				setError(err.data.message)
			} else {
				setError('Неизветсная ошибка!')
			}
		}
	}

	return (
		<Layout>
			<Row align='middle' justify='center'>
				<EmployeeForm
					title='Добавить сотрудника'
					onFinish={handleAddEmployee}
					btnText='Добавить'
					error={error}
				/>
			</Row>
		</Layout>
	)
}

export default AddEmployees
