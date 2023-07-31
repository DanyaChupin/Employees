import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Descriptions, Divider, Modal, Space } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useCurrentQuery } from '../../app/services/auth'
import {
	useGetEmoloyeeQuery,
	useRemoveEmoloyeeMutation,
} from '../../app/services/employees'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Layout from '../../components/layout/Layout'
import { selectUser } from '../../features/auth/authSlice'
import { Paths } from '../../routes/paths'
import CButton from '../../ui/button/CButton'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

const Employee = () => {
	const navigate = useNavigate()
	const [error, setError] = useState('')
	const params = useParams<{ id: string }>()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { data, isLoading } = useGetEmoloyeeQuery(params.id || '')
	const [removeEmployee] = useRemoveEmoloyeeMutation()
	const user = useSelector(selectUser)

	if (isLoading) {
		return <span>Загрузка...</span>
	}
	if (!data) {
		return <Navigate to='/' />
	}

	const toggleModal = () => setIsModalOpen(!isModalOpen)
	const handleDeleteEmployee = async () => {
		toggleModal()
		try {
			await removeEmployee(data.id).unwrap()
			navigate(`${Paths.status}/deleted`)
		} catch (err) {
			const maybeError = isErrorWithMessage(err)
			if (maybeError) {
				setError(err.data.message)
			} else {
				setError('Неизвестная ошибка!')
			}
		}
	}
	return (
		<Layout>
			<Descriptions title='Информация о сотруднике' bordered={true}>
				<Descriptions.Item label='Имя' span={3}>
					{data.firstName}
				</Descriptions.Item>
				<Descriptions.Item label='Фамилия' span={3}>
					{data.lastName}
				</Descriptions.Item>
				<Descriptions.Item label='Компания' span={3}>
					{data.address}
				</Descriptions.Item>
				<Descriptions.Item label='Возраст' span={3}>
					{data.age}
				</Descriptions.Item>
				<Descriptions.Item label='Адрес' span={3}>
					{data.address}
				</Descriptions.Item>
				<Descriptions.Item label='Телефон' span={3}>
					{data.phone}
				</Descriptions.Item>
			</Descriptions>
			{user?.id === data.userId && (
				<>
					<Divider orientation='left'>Действие</Divider>
					<Space>
						<Link to={`/employee/edit/${data.id}`}>
							<CButton shape='round' type='default' icon={<EditOutlined />}>
								Редактировать
							</CButton>
						</Link>
						<CButton
							onClick={toggleModal}
							shape='round'
							danger
							icon={<DeleteOutlined />}
						>
							Удалить
						</CButton>
					</Space>
				</>
			)}
			{error && <ErrorMessage message={error} />}
			<Modal
				onOk={handleDeleteEmployee}
				onCancel={toggleModal}
				okText='Потвердить'
				cancelText='Отменить'
				title='Потвердите удаление'
				open={isModalOpen}
			>
				Вы действительно хотите удалить сотрудника?
			</Modal>
		</Layout>
	)
}

export default Employee
