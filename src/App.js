import React from 'react'
import { useRoutes } from 'hookrouter'
import Routes from './routes'
import HeaderComponent from './Components/Common/Header/HeaderComponent'
import { Col, Row } from 'antd'
import FooterComponent from './Components/Common/Footer/FooterComponent'
import NotFound from './Components/NotFound/NotFound'
import './App.css'

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <HeaderComponent />
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#F9F9F9' }}>
        <Col span={24}>
          <div>{routeResult ? routeResult : <NotFound />}</div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FooterComponent />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default App
