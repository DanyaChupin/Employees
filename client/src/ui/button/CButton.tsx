import { Button, Form } from 'antd'
import React from 'react'
type Props = {
	children: React.ReactNode
	htmlType?: 'button' | 'submit' | 'reset' | undefined
	onClick?: () => void
	type?:
		| 'link'
		| 'text'
		| 'ghost'
		| 'default'
		| 'primary'
		| 'dashed'
		| undefined
	danger?: boolean
	loading?: boolean
	shape?: 'default' | 'circle' | 'round' | undefined
	icon?: React.ReactNode
}
const CButton = ({
	loading,
	children,
	htmlType = 'button',
	type,
	danger,
	shape,
	icon,
	onClick,
}: Props) => {
	return (
		<Form.Item>
			<Button
				shape={shape}
				type={type}
				loading={loading}
				htmlType={htmlType}
				danger={danger}
				icon={icon}
				onClick={onClick}
			>
				{children}
			</Button>
		</Form.Item>
	)
}

export default CButton
