/* TODO: Create the PizzaHeader Component consisting of:
  - A `header`
    - An `h1` with class `pizza-text`
      Show the text `🍕 It's Pizza Time!`
*/
import React from "react";

class PizzaHeader extends React.Component {
  render() {
    return (
      <header className="pizza-text">
        <h1>
          <span role="img" aria-labelledby="pizza">
            🍕
      </span>
          It's Pizza Time!</h1>
      </header >
    )

  }
}

export default PizzaHeader;