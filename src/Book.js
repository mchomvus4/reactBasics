import React from 'react'

const Book = (props) => {
  const { img, title, author, url, by_now } = props;
  const clickHandler = () => {
    alert('Helloo NOTTECH Lab this is onMouseOver event handler')
  }


  return (
  
    <article className="book">
      <img onMouseOver={clickHandler} src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      
      <p><a  className="by_now" rel="noopener noreferrer" href={url} target="_blank">{by_now}</a></p>
      
    
    </article>
      
      
  );
};

export default Book
