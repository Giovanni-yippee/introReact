// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import MovieList from './components/MovieList';
// import MovieDetail from './components/MovieDetail';
// import Search from './components/Search';
// import BookGallery from '../../my-react-app/src/components/BookGallery';

// function App() {
//   const [movies, setMovies] = useState([]);

//   return (
//     <BrowserRouter>
//       <div className='app'>
//         <h1>Movie Search App</h1>
//         <Search onSearch={setMovies} />

//         <Routes>
//           <Route path='/' element={<MovieList movies={movies} />} />
//           <Route path='/movie/:id' element={<MovieDetail />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;








// home 
// const Home = () => {
//   return (
//     <div className="p-4">
//       <h1>Welcome User!</h1>
//     </div>
//   );
// };

// export default Home;


// BookGallery
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import BookDetailPage from '../../my-react-app/src/pages/BookDetailPage';

// const BookGallery = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books')
//       .then(response => {
//         setBooks(response.data);
//       })
//       .catch(error => {
//         console.error('API қате:', error);
//       });
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4 p-4">
//       {books.map((book) => (
//         <div key={book.id} className="border p-2 hover:scale-105 transition-all">
//           <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
//           <h2 className="text-center mt-2">{book.title}</h2>
//           <a href={`/book/${book.id}`} className="block text-center text-blue-500 mt-2">View Details</a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookGallery;

// BookDetailPage
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BookDetail = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
//       .then(response => {
//         setBook(response.data);
//       })
//       .catch(error => {
//         console.error('API қате:', error);
//       });
//   }, [id]);

//   if (!book) return <div>Жүктелуде...</div>;

//   return (
//     <div className="p-4">
//       <h1>{book.title}</h1>
//       <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
//       <p><strong>Автор:</strong> {book.author}</p>
//       <p><strong>Түсініктеме:</strong> {book.description}</p>
//     </div>
//   );
// };

// export default BookDetail;


// App

// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import BookGallery from './pages/BookGallery';
// import BookDetail from './pages/BookDetail';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <nav className="p-4">
//         <Link to="/home" className="mr-4">Home</Link>
//         {isAuthenticated && <Link to="/book-gallery">Book Gallery</Link>}
//       </nav>

//       <Routes>
//         <Route path="/" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
//         <Route path="/home" element={
//           <ProtectedRoute isAuthenticated={isAuthenticated}>
//             <Home />
//           </ProtectedRoute>
//         } />
//         <Route path="/book-gallery" element={
//           <ProtectedRoute isAuthenticated={isAuthenticated}>
//             <BookGallery />
//           </ProtectedRoute>
//         } />
//         <Route path="/book/:id" element={
//           <ProtectedRoute isAuthenticated={isAuthenticated}>
//             <BookDetail />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
