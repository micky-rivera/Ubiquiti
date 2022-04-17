const addDetails = require('./index').addDetails;
const fetch = require('node-fetch');
const mockData = require('./mock.json');

const details = [
    {label:'ID', content:'unifi-network'},
    {label:'Short Name', content:'UAP6'},
    {label:'Max. power', content:'25W'},
    {label:'Speed', content:'1000 Mbps'},
    {label:'Number of ports', content:1}
]

describe('addDetails function', () => {
    test('parses data correctly', () => {
        const result = addDetails(mockData);
        expect(result).toEqual(details);
    })
})