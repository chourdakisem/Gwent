const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.post('/deck', async (req, res) => {
    const {deck} = req.body;
    console.log(deck);
    try {
        const result1 = await pool.query(`SELECT * FROM ${deck}`, []);
        const result2 = await pool.query('SELECT * FROM special_cards', []);        
        const result3 = await pool.query('SELECT * FROM unique_cards', []);        
        res.json([...result1.rows, ...result2.rows, ...result3.rows]);
    } catch (err) {
        console.error(err.message);
    }
    
});

app.listen(5000, () => console.log('Server running on port 5000'));