const express = require ('express')
const app = express();

const path = require ('path')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views3'))

const phones = [
{ name : 'iphone', price: '£532' , image: 'https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/787200c1-2262-4509-88ba-086ab0beeffc-1_097a7b50-2c85-4d12-867f-240ddd69389c.jpg' },
{ name : 'Nokia',  price:'£125' , image: 'https://techmarket.co.uk/cdn/shop/files/Nokia_G10_Dual_SIM_4G_Android_11_Smartphone_Night_Blue.jpg?v=1744365356'},
{ name : 'Samsung' , price: '£71', image: 'https://m.media-amazon.com/images/I/512lExVtgrL._AC_SL1020_.jpg'}
]

app.get('/phones',(req,res)=>{
    res.render('phones',{phones})
})


app.listen(30002,()=>{
    console.log('Server is running at http://localhost:30002');
    
})