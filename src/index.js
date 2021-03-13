import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/618LsqHnfgL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>How to Catch a Leprechaun</h1>;
};

const Author = () => {
  return <h4>Adam Wallace</h4>;
};


ReactDom.render(<BookList />, document.getElementById("root"));
