import React from 'react'

const Book = (props) => {
  const { img, title, author } = props; // このようにpropsの中身をconstで定義しておくことで↓でprops.imgのように毎回propsを書くなくて良くなる。childrenは<Book>の子要素であり、変数名はなんでも良い

  // attribute, envetHandler
  // onClick, onMouseOver
  const clickHander = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHander}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book // Defaultインポート
