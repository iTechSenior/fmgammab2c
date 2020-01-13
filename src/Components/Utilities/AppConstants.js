import React from 'react'

// Labels Naming Section
export const accessories = 'Accessoires'

export const bikesCategories = {
  eBike: 'E-Bikes',
  sportBike: 'Sportfietsen',
  cityBike: 'Stadsfietsen',
  mountainBike: 'Mountainbikes',
}

//End Labels Naming Section

// Env Constants

export const frontEndEnvURL = process.env.PUBLIC_URL
export const backEndEnvURL = 'http://localhost:3000/'

//End Env Constants

//Images Section
export const eBikeImage = () => {
  return (
    <img
      style={{ width: '45px', height: '30px' }}
      src={`${frontEndEnvURL}/icons/Bikes/ebike.png`}
      alt={'E-Bike  Not Found'}
    />
  )
}

export const sportBikeImage = () => {
  return (
    <img
      style={{ width: '45px', height: '30px' }}
      src={`${frontEndEnvURL}/icons/Bikes/sportBike.png`}
      alt={'Sport Bike  Not Found'}
    />
  )
}

export const cityBikeImage = () => {
  return (
    <img
      style={{ width: '45px', height: '30px' }}
      src={`${frontEndEnvURL}/icons/Bikes/cityBike.png`}
      alt={'City Bike  Not Found'}
    />
  )
}

export const mountainBikeImage = () => {
  return (
    <img
      style={{ width: '45px', height: '30px' }}
      src={`${frontEndEnvURL}/icons/Bikes/mountainBike.png`}
      alt={'City Bike  Not Found'}
    />
  )
}

export const accessoriesImage = () => {
  return (
    <img
      style={{ width: '45px', height: '30px' }}
      src={`${frontEndEnvURL}/icons/Bikes/accessories.png`}
      alt={'City Bike  Not Found'}
    />
  )
}
export const gazelleImage = () => {
  return (
    <img
      style={{ width: '160px', height: '72px' }}
      src={`${frontEndEnvURL}/icons/HomePage/Gazelle.png`}
      alt={'Gazelle  not found'}
    />
  )
}
export const scottImage = () => {
  return (
    <img
      style={{ width: '160px', height: '72px' }}
      src={`${frontEndEnvURL}/icons/HomePage/Scott.png`}
      alt={'Scott  not found'}
    />
  )
}
export const stromerImage = () => {
  return (
    <img
      style={{ width: '160px', height: '72px' }}
      src={`${frontEndEnvURL}/icons/HomePage/Stromer.png`}
      alt={'Gazelle  not found'}
    />
  )
}
export const cubeImage = () => {
  return (
    <img
      style={{ width: '160px', height: '72px' }}
      src={`${frontEndEnvURL}/icons/HomePage/Cube.png`}
      alt={'Cube  not found'}
    />
  )
}
//End Images Section
