import { Component } from "react";


// class Addcomponent extends Component {
//     render(){
//         return <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>
//     }
// }
// export default Addcomponent

function AddComponent(props){
    
    return(
        <h1>Total: {props.firstNumber + props.secondNumber}</h1>
    )
}
export default AddComponent