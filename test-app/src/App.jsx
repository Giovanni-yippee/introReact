import React from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import ProductCard from './components/ProductCard'
import BookCard from './components/BookCard'

function App() {
  return (
    <>
      {/* <Header name='Galymbek' hobby='Coding'/>
      <ProfileCard
        name = 'Asadbek'
        bio = 'Lorem ipsum dolor sit amet.'
        img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuR6lY1HPFS4Q_R2A5r70ECdchXmR_n1b8g&s'
      />
      <ProductCard
        name = 'Ноутбук'
        image = 'https://onepoint.kz/uploads/products/644/xiaomi-mi-notebook-pro-156-2020-enhanced-edition-i7-10510u16gb1tbmx350.jpeg'
        price = '250 000'
      />
      <ProductCard
        name = 'Телефон'
        image = 'https://m.media-amazon.com/images/I/61cTi9MBqOL._AC_SL1500_.jpg'
        price = '150 000'
      />
      <Footer/> */}
      <div className="app">
      <h1>Менің кітаптарым</h1>
      <div className="book-cards-container">
        <BookCard 
          title="Atomic Habits" 
          author="James Clear" 
          year="2018" 
          img = 'https://cdn.shopify.com/s/files/1/0194/2855/files/atomic-habits_600x600.jpg?v=1624825894' 
        />
        <BookCard 
          title="The Psychology of Money" 
          author="Morgan Housel" 
          year="2020" 
          img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIzqbdHa0ZS4MMPRHajrtsIyA05sD5A79Nw&s' 
        />
        <BookCard 
          title="Deep Work" 
          author="Cal Newport" 
          year="2016" 
          img = 'https://i0.wp.com/itsmoreofacomment.com/wp-content/uploads/2021/01/CalNewportDeepWork.jpg?fit=2000%2C1200&ssl=1'
        />
      </div>
    </div>
    </>
  )
}

export default App