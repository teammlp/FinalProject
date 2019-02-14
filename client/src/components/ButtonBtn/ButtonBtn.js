import React from "react";
import "./ButtonBtn.css";


class ButtonBtn extends Component {
    render() {
        return (
            <button type="button" class="btn btn-primary">Primary</button>
        )
    }
}

// const ButtonBtn = props => (
//     <button className="btn btn-primary" {...props}>
//         {props.children}
//     </button>
// );

export default ButtonBtn;