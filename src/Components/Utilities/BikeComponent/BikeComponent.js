import React, { useEffect } from 'react'
import { Button, Card, List, Modal } from 'antd'
import Meta from 'antd/lib/card/Meta'
import * as appConstants from '../AppConstants'
import { usePath } from 'hookrouter'
import _ from 'lodash'

import ModalForm from '../../Common/ModalForm'

import * as BikeComponentStyle from './BikeComponent.module.scss'
import './BikeComponentStyle.css'

export default function BikeComponent(props) {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [dataSource, setDataSource] = React.useState()
  const currentPath = usePath()
  const uspData = props.bikeData.metadata.slice(0, 3).map(item => {
    return `${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: ${
      item.value
    }`
  })

  useEffect(() => {
    if (props.bikeData.usps.length === 3) {
      if (!props.bikeData.usps.every(el => el !== '')) {
        if (!_.isEqual(uspData, dataSource)) setDataSource(uspData)
      }
    } else {
      if (!_.isEqual(uspData, dataSource)) setDataSource(uspData)
    }
  })

  const handleMoreInfoBtnClick = id => {
    props.onMoreInfoBtnClick(id)
  }

  const handleBookBtnClick = () => {
    setModalVisible(!modalVisible)
  }

  function formatDescriptionOfBike() {
    return (
      <div>
        <span className={`${BikeComponentStyle.redFontColor}`}>
          €{props.bikeData.price}{' '}
        </span>
        {/* <span
          className={`${BikeComponentStyle.redFontColor} ${
            props.bikeData.availability !== 'op voorraad'
              ? BikeComponentStyle.strikeThrough
              : ''
          }`}
        >
          €{props.bikeData.price}{' '}
        </span>
        <span
          className={
            props.bikeData.availability === 'op voorraad'
              ? BikeComponentStyle.greenFontColor
              : BikeComponentStyle.redFontColor
          }
        >
          {props.bikeData.availability}
        </span> */}
      </div>
    )
  }

  return (
    <div className={BikeComponentStyle.bikeContainer}>
      <Card
        style={{ padding: 0 }}
        cover={
          <img
            alt="example"
            src={
              props.bikeData.categories
                ? `${appConstants.backEndEnvURL}${props.bikeData.image}`
                : `${appConstants.frontEndEnvURL}${props.bikeData.image}`
            }
            style={{
              padding: 10,
              height: 200,
              objectFit: 'contain',
            }}
          />
        }
      >
        <Meta
          title={props.bikeData.name}
          description={formatDescriptionOfBike()}
        />
      </Card>
      <br />
      <List
        className={'bikeComponentList'}
        bordered={false}
        itemLayout="horizontal"
        dataSource={dataSource ? dataSource : props.bikeData.usps}
        renderItem={item => (
          <List.Item>
            <div className={BikeComponentStyle.descriptionWrapper}>
              <div
                style={{ margin: '8px 8px' }}
                className={BikeComponentStyle.dot}
              />
              <p>{item}</p>
            </div>
          </List.Item>
        )}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingBottom: 20,
        }}
      >
        <Button
          size={'large'}
          type="danger"
          onClick={() => handleBookBtnClick()}
        >
          Reserveer
        </Button>
        <Button
          className={BikeComponentStyle.moreInfoButton}
          size={'large'}
          onClick={() => handleMoreInfoBtnClick(props.bikeData._id)}
        >
          Meer info
        </Button>
      </div>

      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        closeIcon={false}
        footer={null}
        title="Reserveer je fiets"
      >
        <ModalForm
          formType={'Reserveer'}
          bikeName={props.bikeData.name}
          bikeUrl={`${currentPath}/${props.bikeData._id}`}
        />
      </Modal>
    </div>
  )
}
