import { Form, Input } from 'antd'

type Props = {
	name: string
	placeholder: string
	type?: string
}
const CInput = ({ name, placeholder, type = 'text' }: Props) => {
	return (
		<Form.Item
			name={name}
			rules={[{ required: true, message: 'Обязательное поле' }]}
			shouldUpdate={true}
		>
			<Input placeholder={placeholder} type={type} size='large' />
		</Form.Item>
	)
}
export default CInput
