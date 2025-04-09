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

import React from "react";
import { LanguageProvider } from "./LanguageProvider";
import Test from "./Test";

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <Test />
      </div>
    </LanguageProvider>
  );
};

export default App;