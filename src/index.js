import React from "react";
import ReactDom from "react-dom/client";
import "../src/index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      {/* <Example /> */}
    </div>
  );
}

// function Example() {
//   return <Welcome name="Esther" age="20" location="Kaduna" />;
// }

// function Welcome(props) {
//   return (
//     <div>
//       <h1>Hello, {props.name} How may we help you?</h1>;
//       <h2>
//         {props.name} is {props.age} years old and you live in {props.location}
//       </h2>
//       ;<p>{props.name}, kindly go through our menu</p>;
//     </div>
//   );
// }

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {/*Creating list element  instead of one by one pizza component*/}
          {pizzas.map((pizza) => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : null}
      {/* <Pizza 
      name="Pizza Spinaci"
      ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      photoName="pizzas/spinaci.jpg"
      price={10}
      /> 

      <Pizza 
      name="Pizza Funghi"
      ingredients="Tomato, mozarella, mushrooms"
      price={12}
      photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  if (props.pizzaobj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />;
      <div>
        <h3>{props.pizzaobj.name} </h3>
        <p>{props.pizzaobj.ingredients}</p>
        <span>{props.pizzaobj.price + 3}</span>
      </div>
    </li>
  );
}

function Header() {
  // const style = {color:"red", fontSize: "48px", textTransform: "uppercase"}
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry,we're closed");

  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    );

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// React v18 rendering
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>
);
