/// <reference types="react-scripts" />

type AppState = {
    search: string,
  productList: [{name: string, line: string, deviceId: string}],
  format: string,
  chosenProduct: {
    name: string,
    line: string,
    lineId: string,
    deviceId: string,
    shortName: string,
    maxPower: string,
    speed: string,
    numOfPorts: string,
  },
  filters: string[]    
}

interface ListItemProps {
    name: string,
    line: string,
    deviceId: string
}

interface ProductPageProps {
    name: string,
    shortName: string,
    line: string,
    lineId: string,
    deviceId: string,
    maxPower: string,
    speed: string,
    numOfPorts: string,
}