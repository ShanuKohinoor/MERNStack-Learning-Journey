


      const express = require('express');
      const app = express();

      const path = require('path')

      app.set('view engine','ejs')
      app.set('views',path.join(__dirname,'views2'))


      const books = [
        { name: 'Randamoozham', author: 'M.T.Vasudhevan Nair', price: '$50', coverImage:'https://tse2.mm.bing.net/th/id/OIP.ahKPcVr2QDCBDihyCuGgtAHaLV?rs=1&pid=ImgDetMain&o=7&rm=3'},
        { name: 'Ente kadha', author: 'Madhavikutty', price: '$45', coverImage:'https://d1af37c1pl2nfl.cloudfront.net/images/books/dcb/front/ente-katha.jpg'},
        { name : 'Khasakkinte Ithihasam', author: 'O.V.Vijayan', price:'$46', coverImage:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1462709894l/2623267.jpg'},
        { name: 'Balyakaalasakhi', author:'Vaikom Muhammad Basheer' , price:'$50', coverImage: 'https://archive.org/services/img/Balyakalasakhi/full/pct:200/0/default.jpg'}
      ]

      app.get('/books',(req,res)=>{
        res.render('books',{books})
      })

      app.listen(30001,()=>{
        console.log('Server is running at http://localhost:30001');
        
      })
      
      
      
      
      
      
      
      
      
      
