import React from "react";

function Food({ favorite }) {
  return <h1>I like {favorite}!</h1>;
}

function App() {
  return (
    <div>
      Hello!
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgyeobsal" />
      <Food favorite="chicken" />
    </div>
  );
}

export default App;
