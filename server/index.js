const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
app.use(cors());

const addDetails = (device) => {
    const details = [];

    if(device.line.id.toLowerCase() !== 'unknown') {
        details.push({label: 'ID', content: device.line.id});
    }

    details.push({label: 'Short Name', content: device.shortnames[0]});

    try {
        if (device.unifi.network.radios.na.maxPower) {
            details.push({label: 'Max. power', content: `${device.unifi.network.radios.na.maxPower}W`});
        }
        if (device.unifi.network.ethernetMaxSpeedMegabitsPerSecond) {
            details.push({label: 'Speed', content: `${device.unifi.network.ethernetMaxSpeedMegabitsPerSecond} Mbps`});
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
        data.devices.forEach((device) => {
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
                details: addDetails(device)
            });
        })
        shortenedList = allProducts.slice(0, 11);
        return res.json(allProducts);
    })
    .catch((err) => {
        res.status(404).send('Not found');
    })
})

app.get('/', async (req, res) => {
  const root = path.join(__dirname, '..', 'client', 'build')
  app.use(express.static(root));
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

module.exports.app = app;
module.exports.addDetails = addDetails;
app.listen(process.env.PORT || 8080);