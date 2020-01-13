import React from 'react'
import * as BikeComponentStyle from './BikeComponent.module.scss'
import './BikeComponentStyle.css'
import { Button, Card, List } from 'antd'
import Meta from 'antd/lib/card/Meta'

export default function BikeComponent(props) {
  function formatDescriptionOfBike() {
    return (
      <div>
        <span
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
        </span>
      </div>
    )
  }

  return (
    <div
      className={BikeComponentStyle.bikeContainer}
      style={{ height: '466px', width: '270px', backgroundColor: 'white' }}
    >
      <Card
        style={{ padding: 0 }}
        cover={
          <img
            alt="example"
            src={props.bikeData.imgSource}
            style={{ padding: '20px 30px 20px 30px' }}
          />
        }
      >
        <Meta
          title={props.bikeData.bikeName}
          description={formatDescriptionOfBike()}
        />
      </Card>
      <br />
      <List
        className={'bikeComponentList'}
        bordered={false}
        itemLayout="horizontal"
        dataSource={props.bikeData.description}
        renderItem={item => (
          <List.Item>
            <div style={{ display: 'flex', marginLeft: '11px' }}>
              <div
                style={{ margin: '8px 8px' }}
                className={BikeComponentStyle.dot}
              />
              <p style={{ color: 'black' }}>{item.title}</p>
            </div>
          </List.Item>
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size={'large'} type="danger">
          Reserveer
        </Button>
        <Button className={BikeComponentStyle.moreInfoButton} size={'large'}>
          Meer info
        </Button>
      </div>
    </div>
  )
}
