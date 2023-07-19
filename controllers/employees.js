const { prisma } = require('../prisma/prisma-client')

/**
@route GET /api/employees
@desc Get all employses
@access Private
*/
const getAllEmployees = async (req, res) => {
	try {
		const employees = await prisma.employee.findMany()
		res.status(200).json({ employees })
	} catch (error) {
		res.status(500).json({ message: 'Не удалось получить сотрудников...' })
	}
}

/**
@route POST /api/employees/add
@desc add employess
@access Private
*/
const addEmployees = async (req, res) => {
	try {
		const data = req.body
		if (!data.firstName || !data.lastName || !data.address || !data.age) {
			return res.status(400).json({ message: 'Введите обязательные поля...' })
		}

		const employee = await prisma.employee.create({
			data: {
				...data,
				userId: req.user.id,
			},
		})

		return res.status(201).json(employee)
	} catch (error) {
		res.status(500).json({ message: 'Не удалось создать сотрудника...' })
	}
}

/**
@route POST /api/employees/delete/:id
@desc delete employess
@access Private
*/
const deleteEmployees = async (req, res) => {
	try {
		const { id } = req.body
		await prisma.employee.delete({
			where: {
				id,
			},
		})
		res.status(204).json({ message: 'Сотрудник удален!' })
	} catch (error) {
		res.status(500).json({ message: 'Не удалось создать сотрудника...' })
	}
}

/**
@route PUT /api/employees/edit/:id
@desc edit employess
@access Private
*/
const editEmployees = async (req, res) => {
	const data = req.body
	const id = data.id
	console.log(data)
	try {
		await prisma.employee.update({
			where: {
				id,
			},
			data,
		})
		res.status(204).json({ message: 'Сотрудник изменен!' })
	} catch (error) {
		res.status(500).json({ message: 'Не удалось изменить сотрудника...' })
	}
}

/**
@route GET /api/employees/employee/:id
@desc getById employess
@access Private
*/
const getByIdEmployees = async (req, res) => {
	try {
		const { id } = req.params

		const employee = await prisma.employee.findUnique({
			where: {
				id,
			},
		})
		res.status(200).json(employee)
	} catch (error) {
		res.status(500).json({ message: 'Не удалось получить сотрудника...' })
	}
}

module.exports = {
	getAllEmployees,
	addEmployees,
	deleteEmployees,
	editEmployees,
	getByIdEmployees,
}
