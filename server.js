require('dotenv').config();

const express = require('express');
const supabase = require('./supabase');

const app = express();

app.get('/products', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});