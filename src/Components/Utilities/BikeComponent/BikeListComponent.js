import React from 'react'
import { List } from 'antd'
import BikeComponent from './BikeComponent'
import ImageButtonComponent from '../ImageButtonComponent/ImageButtonComponent'

export default function BikeListComponent(props) {
  return (
    <List
      className={'bikesList'}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 3,
      }}
      dataSource={props.bikeData}
      renderItem={(item, index) => {
        if (item.ads) {
          return (
            <List.Item>
              <ImageButtonComponent
                width={'270px'}
                height={item.height ? item.height : '214px'}
                headerText={item.headerText}
                descriptionText={item.descriptionText}
                buttonText={item.buttonText}
                buttonVisibility={item.buttonVisibility}
                imgBackgroundColor={item.imgBackgroundColor}
                imgSrc={item.imgSource}
                buttonTextColor={item.buttonTextColor}
              />
            </List.Item>
          )
        }
        return (
          <List.Item>
            {<BikeComponent bikeData={props.bikeData[index]} />}
          </List.Item>
        )
      }}
    />
  )
}
