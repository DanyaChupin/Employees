import { Card, Form, Row, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import { Paths } from '../../routes/paths'
import CButton from '../../ui/button/CButton'
import CInput from '../../ui/input/CInput'
import PasswordInput from '../../ui/input/PasswordInput'

const Register = () => {
	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Регистрация' style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
						<CInput name='name' placeholder='Имя' />
						<CInput type='email' name='email' placeholder='Email' />
						<PasswordInput name='password' placeholder='Пароль' />
						<PasswordInput name='confirmPassword' placeholder='Пароль' />
						<CButton type='primary' htmlType='submit'>
							Войти
						</CButton>
					</Form>
					<Space direction='vertical' size='large'>
						<Typography.Text>
							Уже зарегестрированы? <Link to={Paths.login}>Войдите</Link>
						</Typography.Text>
					</Space>
				</Card>
			</Row>
		</Layout>
	)
}

export default Register
