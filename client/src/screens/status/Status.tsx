import { Button, Result, Row } from 'antd'
import { Link, useParams } from 'react-router-dom'

const Statuses: Record<string, string> = {
	created: 'Пользователь успешно создан!',
	updated: 'Пользователь успешно обновлен!',
	deleted: 'Пользователь успешно удален!',
}
const Status = () => {
	const { status } = useParams()
	return (
		<Row align='middle' justify='center' style={{ width: '100%' }}>
			<Result
				status={status ? 'success' : 404}
				title={status ? Statuses[status] : 'Не известная ошибка!'}
				extra={
					<Button>
						<Link to='/'>На главную</Link>
					</Button>
				}
			/>
		</Row>
	)
}

export default Status
