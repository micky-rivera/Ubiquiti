/// <reference types="react-scripts" />

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