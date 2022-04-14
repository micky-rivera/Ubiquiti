/// <reference types="react-scripts" />

type Detail = {
    label: string,
    content: string
}

type Product = {
    name: string,
    line: string,
    deviceId: string,
    details: Detail[]
}

type AppState = {
    search: string,
    productList: Product[],
    format: string,
    chosenProduct: Product,
    filters: string[]    
}

interface ListItemProps {
    name: string,
    line: string,
    deviceId: string,
    details: Detail[]
}