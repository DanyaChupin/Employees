import { Employee } from '@prisma/client'
import { Row } from 'antd'
import { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import {
	useEditEmoloyeeMutation,
	useGetEmoloyeeQuery,
} from '../../app/services/employees'
import EmployeeForm from '../../components/employeeForm/EmployeeForm'

import Layout from '../../components/layout/Layout'
import { Paths } from '../../routes/paths'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

const EditEmployee = () => {
	const navigate = useNavigate()
	const { id } = useParams<{ id: string }>()
	const [error, setError] = useState('')
	const { data, isLoading } = useGetEmoloyeeQuery(id || '')
	const [editEmployee] = useEditEmoloyeeMutation()
	if (isLoading) {
		return <span>Загрузка</span>
	}

	const handleEditEmployee = async (employee: Employee) => {
		try {
			const editedEmployee = {
				...data,
				...employee,
			}
			await editEmployee(editedEmployee).unwrap()
			navigate(`${Paths.status}/updated`)
		} catch (error) {
			const maybeerror = isErrorWithMessage(error)
			if (maybeerror) {
				setError(error.data.message)
			} else {
				setError('Неизветная ошибка')
			}
		}
	}
	return (
		<Layout>
			<Row align='middle' justify='center'>
				<EmployeeForm
					title='Редактировать сотрудника'
					btnText='Редактировать'
					error={error}
					employee={data}
					onFinish={handleEditEmployee}
				/>
			</Row>
		</Layout>
	)
}

export default EditEmployee
