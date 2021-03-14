import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book"; 

// setup vars

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={index}></Book>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById("root"));
