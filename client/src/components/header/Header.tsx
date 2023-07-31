import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, selectUser } from '../../features/auth/authSlice'
import { Paths } from '../../routes/paths'
import CButton from '../../ui/button/CButton'
import styles from './Header.module.css'

const Header = () => {
	const user = useSelector(selectUser)
	const navigate = useNavigate()
	const dispath = useDispatch()

	const onLogout = () => {
		dispath(logout())
		localStorage.removeItem('token')
		navigate('/login')
	}

	return (
		<Layout.Header className={styles.header}>
			<Space>
				<TeamOutlined className={styles.teamIcon} />
				<Link to={user ? Paths.home : '/login'}>
					<CButton type='ghost'>
						<Typography.Title level={1}>Сотрудники</Typography.Title>
					</CButton>
				</Link>
			</Space>
			{user ? (
				<CButton type='ghost' icon={<LoginOutlined />} onClick={onLogout}>
					Выйти
				</CButton>
			) : (
				<Space>
					<Link to={Paths.register}>
						<CButton icon={<UserOutlined />} type='ghost'>
							Зарегестрироваться
						</CButton>
					</Link>
					<Link to={Paths.login}>
						<CButton icon={<LoginOutlined />} type='ghost'>
							Войти
						</CButton>
					</Link>
				</Space>
			)}
		</Layout.Header>
	)
}

export default Header
