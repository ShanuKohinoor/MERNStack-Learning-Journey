import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

  export default function Home(){    

    const {cart,setCart} = useContext(CartContext)

    const products= [
      {id: '1', name:'Electric nail Trimmer', price:'£2.64',image:'/images/ElectricNailtrimmer.jpg'},
      {id: '2', name:'Crochet Set', price:'£9.58',image:'/images/CrochetSet.jpg'},
      {id: '3', name:'1 pc Baking Mat', price:'£ 1.14', image:'/images/BakingMat.jpg'},
      {id: '4', name:'Strechable Sofa Cover', price:'£9.67', image:'/images/StrechableSofaCover.jpg'},
      {id: '5', name:'1/2/5 pcs Art Scissors', price:'75p', image:'/images/ArtScissor.jpg'},
      {id: '6', name:'2pcs/3pcs Egg Shell Separator', price:'£1.43', image:'/images/EggShellSeperator.jpg'},
      { id: '7', name: 'Silicone Kitchen Tongs Set', price: '£3.99', image: '/images/SiliconeKitchenTongSet.jpg'},
      { id: '8', name: 'LED Fairy String Lights', price: '£4.50', image: '/images/LEDFairyStringLights.jpg' },
      { id: '9', name: 'Mini Portable Fan', price: '£6.20', image: '/images/MiniPortableFan.jpg' }, 
      { id: '10', name: 'Reusable Shopping Bags (Pack of 3)', price: '£2.80', image: '/images/ReusableShoppingBag.jpg' } 
    ] 
      
        
      const addToCart = (product)=>{
        setCart([...cart,product])
      }

      return(
        <div>
            <h1>Home Page</h1>
            <div className='productContainer'>
                {products.map((product)=>(
                  <ProductCard
                     key={product.id}
                     product={product}
                     addToCart={addToCart}
                  />
                ))}
            </div>

        </div>
    )
  }