const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
app.use(cors());

app.get('/api/all', (req,res) => {
    fetch('https://static.ui.com/fingerprint/ui/public.json')
    .then(res => res.json())
    .then(data => {
        const allProducts = [];
        data.devices.forEach(device => {
            allProducts.push({
                line: device.line.name,
                name: device.product.name
            });
        })
        shortenedList = allProducts.slice(0, 11);
        return res.json(shortenedList);
    })
})

app.get('/', async (req, res) => {
  const root = path.join(__dirname, '..', 'client', 'build')
  app.use(express.static(root));
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

module.exports.app = app;
app.listen(process.env.PORT || 8080);