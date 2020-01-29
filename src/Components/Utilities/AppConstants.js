import React from 'react'

// Labels Naming Section
export const accessories = 'Accessoires'

export const bikesCategories = {
  eBike: 'E-Bikes',
  raceBike: 'Racefietsen',
  cityBike: 'Stadsfietsen',
  vouwBike: 'Vouwfiets',
  mountainBike: 'Mountainbikes',
  accessoires: 'Accessoires',
}

export const filterOptions = {
  Type: {
    name: 'type',
    title: 'Type',
    options: [
      'Pompen',
      'Sloten',
      'Helmen',
      'Tassen',
      'Hand-muts-voet',
      'Regenbroeken',
      'Jassen',
      'Battcovers',
      'Kind',
      'Pedalen',
      'Gps',
    ],
  },
  Speed: {
    name: 'speed',
    title: 'Snelheid',
    options: ['45 km/u', '25 km/u'],
  },
  Brand: {
    name: 'brand',
    title: 'Merk',
    options: ['Scott', 'Koga', 'Bizobike', 'Gazelle'],
  },
  Price: {
    name: 'price',
    title: 'Prijs',
    options: ['minPrice', 'maxPrice'],
  },
  Usage: {
    name: 'usage',
    title: 'Gebruik',
    options: ['Woon-werk', 'Hobby', 'Pro', 'Vrije tijd'],
  },
}

//End Labels Naming Section

// Env Constants
export const frontEndEnvURL = process.env.PUBLIC_URL
export const backEndEnvURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://voorstel-fietsenmintjensb2b.be'

//End Env Constants

//Images Section
export const eBikeImage = () => {
  return (
    <img
      src={`${frontEndEnvURL}/icons/Bikes/eBike.png`}
      alt={'E-Bike  Not Found'}
    />
  )
}

export const raceBikeImage = () => {
  return (
    <img
      src={`${frontEndEnvURL}/icons/Bikes/raceBike.png`}
      alt={'Sport Bike  Not Found'}
    />
  )
}

export const cityBikeImage = () => {
  return (
    <img
      src={`${frontEndEnvURL}/icons/Bikes/cityBike.png`}
      alt={'City Bike  Not Found'}
    />
  )
}

export const mountainBikeImage = () => {
  return (
    <img
      src={`${frontEndEnvURL}/icons/Bikes/mountainBike.png`}
      alt={'City Bike  Not Found'}
    />
  )
}

export const vouwBikeImage = () => {
  return (
    <img
      src={`${frontEndEnvURL}/icons/Bikes/vouwBike.png`}
      alt={'City Bike  Not Found'}
    />
  )
}

export const accessoriesImage = () => {
  return (
    <img
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
