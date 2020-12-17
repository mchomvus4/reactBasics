import React from 'react';
import './index.css';
import { books } from './BookData';
import Book from './Book'
import Footer from './Footer'

function BookList() {
  return (
    <>
    <section className="bookList"> 
    {books.map((book) => {
        return (
      <Book key={book.id} {...book} />
        )
        
      })}
    </section>
    <section className="footer">
        <Footer/>
      </section>
      </>
  )
         
}
 
export default BookList;
