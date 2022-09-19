import './search.css'

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

export function Search() {

  // const [search, setSearch] = useState('');
 
  // const history = useHistory();

  // function newBook() {
  //   history.push('/livros/new');
  // }

  // function handleOnSubmit(event) {
  //   event.preventDefault();
  //   const books = getBooks();
  //   const results = books.filter(book => book.titulo.toLowerCase().indexOf(search) !== -1);
  //   props.setBooks(results);
  // }
  
  // function handleSearchChange(event) {
  //   setSearch(event.target.value.toLowerCase());
  // }

  return (
    <form className="search" >
      <input className="campoInput"
        // id="search"
        // type="search"
        // onChange={buscarInput}
        placeholder="Qual livro você está procurando" /> {/* value="🔍" */}

      <button className="lupa" value="🔍"></button>
    </form>
  );
}