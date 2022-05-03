import React, {Component} from "react";

class App extends React.Component {
  hug(id) {
    console.log("hugging" + id);
  }

  render() {
    let name = "kitteh";
    let button = <button onClick={(e) =>this.hug(name, e)}>Hug Button</button>
    return button;
  }
}

export default App;


//class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokeDex: ["chamander", "eevie"]
//     };
//     console.log(this.state.pokeDex)
//   }
// }