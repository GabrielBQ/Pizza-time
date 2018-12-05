/* TODO: Create the PizzaIngredient Component consisting of:
  - An `li` with
    class `{this.props.ingredient.selected ? "marked" : ""}`
    onClick that switch the value of the current ingredient `selected` property
    (HINT: 👆 Remember, to change state you need to declare a function where state lives)
    - A `span` with class `phrase`
      Show the value of the current ingredient `name` property
    - A `span` with class `points`
      Show the value of the current ingredient `cash` property.
      (HINT: 👆 Check out `src/helpers.js` to import the `formatPrice` function)
*/
import React from "react";

class PizzaIngredient extends React.Component {
  render() {
    return (
      <li className={this.props.ingredients.selected ? "marked" : ""}>
        <span className="phrase" />
        <span className="points" />
      </li>
    );
  }
}

export default PizzaIngredient;
