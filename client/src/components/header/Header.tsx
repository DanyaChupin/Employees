import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { Paths } from '../../routes/paths'
import CButton from '../../ui/button/CButton'
import styles from './Header.module.css'

const Header = () => {
	return (
		<Layout.Header className={styles.header}>
			<Space>
				<TeamOutlined className={styles.teamIcon} />
				<Link to={Paths.home}>
					<CButton type='ghost'>
						<Typography.Title level={1}>Сотрудники</Typography.Title>
					</CButton>
				</Link>
			</Space>
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
		</Layout.Header>
	)
}

export default Header
