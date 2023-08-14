import React from "react";
import menuImg from '../../common/images/menu.jpeg'
import { Col, Image, Row } from "antd";

const Home = () => {
	return(
		<Row>
			<Col span={12}>123</Col>
			<Col span={12}>
			<Image src={menuImg} preview={false} style={{
				height: '860px',
				width: '100%'
			}}/>
			</Col>
		</Row>
	)
}

export default Home