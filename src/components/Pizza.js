/* TODO: Create the Pizza Component consisting of:
  - A `div` with a class `content`
    - A `PizzaHeader` component
    - A `PizzaIngredients` component
    - A `PizzaTotal` component
  - You need 👇 code to set the initial state
    
*/
import React from "react";
import PizzaHeader from "./PizzaHeader";
import PizzaIngredients from "./PizzaIngredients";
import PizzaTotal from "./PizzaTotal";
import AddIngredient from "./AddIngredient";

class Pizza extends React.Component {
  state = {
    ingredients: {
      dough: {
        id: 1,
        name: "Dough",
        cash: 500,
        selected: true
      },
      pinneaple: {
        id: 2,
        name: "Pinneaple",
        cash: 150,
        selected: false
      },
      mozzarella: {
        id: 3,
        name: "Mozzarella",
        cash: 200,
        selected: false
      },
      pepperoni: {
        id: 4,
        name: "Pepperoni",
        cash: 125,
        selected: false
      },
      ham: {
        id: 5,
        name: "Ham",
        cash: 150,
        selected: false
      },
      tuna: {
        id: 6,
        name: "Tuna",
        cash: 100,
        selected: false
      }
    }
  };

  selectIngredient = ingredientKey => {
    const ingredients = { ...this.state.ingredients };

    if (ingredients[ingredientKey].selected) {
      ingredients[ingredientKey].selected = false;
    } else {
      ingredients[ingredientKey].selected = true;
    }
    this.setState({ ingredients: ingredients });
  };

  addOneToId = x => Object.keys(this.state.ingredients).length + 1;

  addIngredient = newIng => {
    // 1. Take a copy of the existing `state`
    const ingredients = { ...this.state.ingredients };
    const ing = {
      id: this.addOneToId(),
      name: newIng.name,
      cash: parseFloat(newIng.cash),
      selected: false
    };
    // 2. Add our newFish to newFishes
    ingredients[newIng.name.toLowerCase()] = ing;
    // 3. Set newFishes as the new `state`
    this.setState({ ingredients: ingredients });
  };

  render() {
    return (
      <div className="content">
        <PizzaHeader />
        <PizzaIngredients
          ingredients={this.state.ingredients}
          selectIngredient={this.selectIngredient}
        />
        <PizzaTotal ingredients={this.state.ingredients} />

        <AddIngredient
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient}
        />
      </div>
    );
  }
}

export default Pizza;
