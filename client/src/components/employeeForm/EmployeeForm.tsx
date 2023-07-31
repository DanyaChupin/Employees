import { Employee } from '@prisma/client'
import { Card, Form, Space } from 'antd'
import CButton from '../../ui/button/CButton'
import CInput from '../../ui/input/CInput'
import ErrorMessage from '../errorMessage/ErrorMessage'

type Props<T> = {
	onFinish: (values: T) => void
	btnText: string
	title: string
	error?: string
	employee?: T
}

const EmployeeForm = ({
	onFinish,
	title,
	btnText,
	error,
	employee,
}: Props<Employee>) => {
	return (
		<Card title={title} style={{ width: '30rem' }}>
			<Form name='employeeForm' onFinish={onFinish} initialValues={employee}>
				<CInput type='text' name='firstName' placeholder='Имя' />
				<CInput type='text' name='lastName' placeholder='Фамилия' />
				<CInput type='text' name='jobTitle' placeholder='Компания' />
				<CInput type='text' name='age' placeholder='Возраст' />
				<CInput type='text' name='address' placeholder='Адрес' />
				<CInput type='text' name='phone' placeholder='Телефон' />
				<Space>
					{error && <ErrorMessage message={error} />}
					<CButton htmlType='submit'>{btnText}</CButton>
				</Space>
			</Form>
		</Card>
	)
}

export default EmployeeForm
