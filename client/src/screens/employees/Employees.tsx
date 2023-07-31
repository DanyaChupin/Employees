import { PlusCircleOutlined } from '@ant-design/icons'
import { Employee } from '@prisma/client'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useGetAllEmoloyeesQuery } from '../../app/services/employees'
import Layout from '../../components/layout/Layout'
import { selectUser } from '../../features/auth/authSlice'
import { Paths } from '../../routes/paths'
import CButton from '../../ui/button/CButton'
import { columns } from './columsData'

const Employees = () => {
	const navigate = useNavigate()
	const user = useSelector(selectUser)
	const { data, isLoading } = useGetAllEmoloyeesQuery()

	useEffect(() => {
		if (!user) {
			navigate('/login')
		}
	}, [navigate, user])
	const goToAddUser = () => {
		navigate(Paths.emoloyeeAdd)
	}
	return (
		<Layout>
			<CButton
				type='primary'
				onClick={goToAddUser}
				icon={<PlusCircleOutlined />}
			>
				Добавить
			</CButton>
			{data && (
				<Table
					loading={isLoading}
					dataSource={data}
					pagination={false}
					columns={columns}
					rowKey={employee => employee.id}
					onRow={employee => {
						return {
							onClick: () => navigate(`${Paths.employee}/${employee.id}`),
						}
					}}
				/>
			)}
		</Layout>
	)
}

export default Employees
