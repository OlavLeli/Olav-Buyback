const axios = require('axios');
const fs = require('fs');

const saveFilePath = './itemPrices.json'; // Speicherort für die Preisdaten

async function fetchAndSaveItemPrices() {
    try {
        const response = await axios.get('https://esi.evetech.net/latest/markets/10000002/prices/');
        const data = response.data;

        // Speichere die Daten in einer JSON-Datei
        fs.writeFileSync(saveFilePath, JSON.stringify(data));
        console.log('Item prices updated successfully at ' + new Date());
    } catch (error) {
        console.error('Error fetching item prices:', error);
    }
}

// Starte den Abruf alle 60 Minuten (3600000 ms)
fetchAndSaveItemPrices();
setInterval(fetchAndSaveItemPrices, 3600000);
