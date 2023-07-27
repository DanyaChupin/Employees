import { Employee } from '@prisma/client'
import { api } from './api'

export const employeesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllEmoloyees: builder.query<Employee[], void>({
			query: () => ({
				url: '/employees',
				method: 'GET',
			}),
		}),
		getEmoloyee: builder.query<Employee, string>({
			query: id => ({
				url: `/employees/${id}`,
				method: 'GET',
			}),
		}),
		addEmoloyee: builder.mutation<string, string>({
			query: employee => ({
				url: '/employees/add',
				method: 'POST',
				body: employee,
			}),
		}),
		editEmoloyee: builder.mutation<string, Employee>({
			query: employee => ({
				url: `/employees/edit/${employee.id}`,
				method: 'PUT',
			}),
		}),
		removeEmoloyee: builder.mutation<string, string>({
			query: id => ({
				url: `/employees/remove/${id}`,
				method: 'POST',
				body: { id },
			}),
		}),
	}),
})

export const {
	useGetAllEmoloyeesQuery,
	useGetEmoloyeeQuery,
	useEditEmoloyeeMutation,
	useAddEmoloyeeMutation,
	useRemoveEmoloyeeMutation,
} = employeesApi

export const {
	endpoints: {
		getAllEmoloyees,
		getEmoloyee,
		editEmoloyee,
		removeEmoloyee,
		addEmoloyee,
	},
} = employeesApi
