import { Card, Form, Row, Space, Typography } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation, UserData } from '../../app/services/auth'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Layout from '../../components/layout/Layout'
import { Paths } from '../../routes/paths'
import CButton from '../../ui/button/CButton'
import CInput from '../../ui/input/CInput'
import PasswordInput from '../../ui/input/PasswordInput'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

const Login = () => {
	const navigate = useNavigate()
	const [error, setError] = useState('')
	const [loginUser, loginUserResult] = useLoginMutation()

	const login = async (data: UserData) => {
		try {
			await loginUser(data).unwrap()

			navigate('/')
		} catch (err) {
			const maybeError = isErrorWithMessage(err)

			if (maybeError) {
				setError(err.data.message)
			} else {
				setError('Неизвестная ошибка')
			}
		}
	}

	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Войдите' style={{ width: '30rem' }}>
					<Form onFinish={login}>
						<CInput type='email' name='email' placeholder='Email' />
						<PasswordInput name='password' placeholder='Пароль' />
						<CButton
							type='primary'
							htmlType='submit'
							loading={loginUserResult.isLoading}
						>
							Войти
						</CButton>
					</Form>
					<Space direction='vertical' size='large'>
						<Typography.Text>
							Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
						</Typography.Text>
						<ErrorMessage message={error} />
					</Space>
				</Card>
			</Row>
		</Layout>
	)
}

export default Login
