import React from 'react';
import {connect} from 'react-redux';

export function CheeseList(props) {

  //const listOfCheese = props.cheeses.map(cheese => <li>cheese</li>)

  return (
    <div>
      <h1>A list of various cheese</h1>
      <ul>{listOfCheese}</ul>
    </div>
  )
}

// const mapStateToProps = state => {
//   console.log(state)
//   return {cheeses: state.cheeses}
// }
//
// export default connect(mapStateToProps)(CheeseList)
