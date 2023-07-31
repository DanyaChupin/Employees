import { User } from '@prisma/client'
import { Card, Form, Row, Space, Typography } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../app/services/auth'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Layout from '../../components/layout/Layout'
import { selectUser } from '../../features/auth/authSlice'
import { Paths } from '../../routes/paths'
import CButton from '../../ui/button/CButton'
import CInput from '../../ui/input/CInput'
import PasswordInput from '../../ui/input/PasswordInput'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

type RegisterData = Omit<User, 'id'> & { confirmPassword: string }
const Register = () => {
	const navigete = useNavigate()
	const user = useSelector(selectUser)
	const [error, setError] = useState('')
	const [registerUser] = useRegisterMutation()

	const register = async (data: RegisterData) => {
		try {
			await registerUser(data).unwrap()
			navigete('/')
		} catch (error) {
			const maybeError = isErrorWithMessage(error)
			if (maybeError) {
				setError(error.data.message)
			} else {
				setError('Неизвестная ошибка.')
			}
		}
	}
	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Регистрация' style={{ width: '30rem' }}>
					<Form onFinish={register}>
						<CInput name='name' placeholder='Имя' />
						<CInput type='email' name='email' placeholder='Email' />
						<PasswordInput name='password' placeholder='Пароль' />
						<PasswordInput name='confirmPassword' placeholder='Пароль' />
						<CButton type='primary' htmlType='submit'>
							Зарегистрироваться
						</CButton>
					</Form>
					<Space direction='vertical' size='large'>
						<Typography.Text>
							Уже зарегестрированы? <Link to={Paths.login}>Войдите</Link>
						</Typography.Text>
						<ErrorMessage message={error} />
					</Space>
				</Card>
			</Row>
		</Layout>
	)
}

export default Register
