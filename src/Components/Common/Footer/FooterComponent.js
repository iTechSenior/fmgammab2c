import React, { useState } from 'react'
import { Col, Row } from 'antd'
import Container from '../Container/ContainerComponent'
import FooterStyle from './FooterComponent.module.scss'
import './FooterComponentStyle.css'
import AppStyle from '../../../App.module.scss'
import DateTextInformationComponent from '../../Utilities/DateTextInformationComponent/DateTextInformationComponent'

export default function FooterComponent() {
  const [dateInformationArray, setDateInformationArray] = useState([
    {
      date: '14/11',
      text: 'Info sessie Belsele',
      link: 'Info sessie Belsele',
    },
    { date: '14/11', text: 'Info sessie Belsele', link: 'Info sessie Belsele' },
    {
      date: '14/11',
      text: 'Info sessie Belsele',
      link: 'Info sessie Belsele',
    },
  ])

  return (
    <Row
      type="flex"
      justify="center"
      // style={{ height: '450px', flexDirection: 'column' }}
      className={AppStyle.appPrimaryColor}
    >
      <Container>
        <Row
          style={{ paddingTop: 30, paddingBottom: 30 }}
          type="flex"
          justify="space-between"
          align="middle"
        >
          <Col xs={24} sm={24} md={12} lg={12} span={8}>
            <div className={FooterStyle.footerTextInformation}>
              <h1>Meer weten over e-bikes?</h1>
              <p>
                Spring binnen op één van onze e-bike info sessies, een avond vol
                info, weetjes en tips, zodat jij de perfecte keuze kan maken.
              </p>
              {dateInformationArray
                ? dateInformationArray.map((item, index) => {
                    return (
                      <div key={`footerInfo-${item.text}-${index}`}>
                        <DateTextInformationComponent
                          date={item.date}
                          text={item.text}
                          link={item.link}
                        />
                      </div>
                    )
                  })
                : null}
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} span={8}>
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/dnz26xQM838"
              frameBorder="0"
              title={'Fietsen Mintjens Youtube Video'}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </Col>
        </Row>
      </Container>
    </Row>
  )
}
