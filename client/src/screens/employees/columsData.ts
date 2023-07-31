import { Employee } from '@prisma/client'
import { ColumnsType } from 'antd/es/table'
export const columns: ColumnsType<Employee> = [
	{
		title: 'Имя',
		dataIndex: 'firstName',
		key: 'firstName',
	},
	{
		title: 'Фамилия',
		dataIndex: 'lastName',
		key: 'firstName',
	},
	{
		title: 'Компания',
		dataIndex: 'jobTitle',
		key: 'jobTitle',
	},
	{
		title: 'Возраст',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Адрес',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Номер',
		dataIndex: 'phone',
		key: 'phone',
	},
]
