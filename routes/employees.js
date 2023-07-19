const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth')
const {
	getAllEmployees,
	addEmployees,
	getByIdEmployees,
	deleteEmployees,
	editEmployees,
} = require('../controllers/employees')

// /api/employees
router.get('/', auth, getAllEmployees)
// /api/emoloyees/:id
router.get('/:id', auth, getByIdEmployees)
// /api/employees/add
router.post('/add', auth, addEmployees)
// /api/employees/remove/:id
router.post('/remove/:id', auth, deleteEmployees)
// /api/employees/edit/:id
router.put('/edit/:id', auth, editEmployees)

module.exports = router
