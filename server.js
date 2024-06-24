const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Новий контакт:', { name, email, message });
    res.status(200).send('Контактні дані отримано');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
