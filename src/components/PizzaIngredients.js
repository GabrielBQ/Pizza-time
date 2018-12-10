/* TODO: Create the PizzaIngredients Component consisting of:
  - An `ul` where you `map` over `ingredients` to create a `PizzaIngredient` per `ingredientKey`
*/
import React from "react";
import { formatPrice } from "../helpers";
import PizzaIngredient from "./PizzaIngredient";

class PizzaIngredients extends React.Component {
  render() {
    return (
      <ul>
        {Object.keys(this.props.ingredients).map(ingredientKey => (
          <PizzaIngredient
            ingredients={this.props.ingredients}
            ingredientKey={ingredientKey}
            addToTotal={this.props.addToTotal}
          />
        ))}
      </ul>
    );
  }
}

export default PizzaIngredients;

//{Object.keys(this.props.ingredients).map(ingredientKey => formatPrice(this.props.ingredients[ingredientKey].cash))}esto es para mostrar los precios
