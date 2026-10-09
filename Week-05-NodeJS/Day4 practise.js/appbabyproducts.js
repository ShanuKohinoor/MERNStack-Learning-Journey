




const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const products = [
  { name: 'Baby Stroller', price: '$150', image: 'https://mamadidit.com/wp-content/uploads/2023/08/The-9-Best-Luxury-Baby-Strollers-of-2024-1.jpg' },
  { name: 'Baby Bottle', price: '$20', image: 'https://images.immediate.co.uk/production/volatile/sites/28/2021/02/Untitled-1-a681ebb.jpg?quality=90&fit=700,466' },
  { name: 'Baby Toy', price: '$25', image: 'https://tse2.mm.bing.net/th/id/OIP.LXs7GlFtCgr2tRrsns4sdwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Baby Crib', price: '$200', image: 'https://i5.walmartimages.com/asr/aa93eb51-699e-4bff-a2fb-cadca060c1fb.ce1b5d3c0d84cc8797a7381d655dcdcd.jpeg' },
];

app.get('/products', (req, res) => {
  res.render('products', { products });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
