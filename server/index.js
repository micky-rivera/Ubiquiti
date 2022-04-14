const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
app.use(cors());

const addDetails = (data, device, deviceIndex) => {
    const details = [];

    if(device.line.id !== 'Unknown') {
        details.push({label: 'ID', content: device.line.id});
    }

    details.push({label: 'Short Name', content: device.shortnames[0]});

    try {
        if (device.unifi.network.radios.na.maxPower) { //ADD UNITS TO DATA
            details.push({label: 'Max. power', content: device.unifi.network.radios.na.maxPower});
        }
        if (device.unifi.network.ethernetMaxSpeedMegabitsPerSecond) {
            details.push({label: 'Speed', content: device.unifi.network.ethernetMaxSpeedMegabitsPerSecond});
        }
        if (device.unifi.network.numberOfPorts) {
            details.push({label: 'Number of ports', content: device.unifi.network.numberOfPorts});
        }
    } catch (err) {

    }

    return details;
}

app.get('/api/all', (req,res) => {
    fetch('https://static.ui.com/fingerprint/ui/public.json')
    .then(res => res.json())
    .then(data => {
        const allProducts = [];
        data.devices.forEach((device, index) => {
            let productLine;
            if (device.line.name === 'Unknown') {
                productLine = device.product.name.split(' ')[0];
            } else {
                productLine = device.line.name
            }
            allProducts.push({
                line: productLine,
                name: device.product.name,
                deviceId: device.icon.id,
                details: addDetails(data, device, index)
            });
        })
        shortenedList = allProducts.slice(0, 11);
        return res.json(allProducts);
    })
})

app.get('/', async (req, res) => {
  const root = path.join(__dirname, '..', 'client', 'build')
  app.use(express.static(root));
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

module.exports.app = app;
app.listen(process.env.PORT || 8080);