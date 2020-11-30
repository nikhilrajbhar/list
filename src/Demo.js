import React from 'react';
// import { render } from 'react-dom';
import './Demo.css';

// class Demo extends Component {
//     render() {
//         return(
//         <div className = "maindiv_style">
//             <h1>HEllo nikhil</h1>
//             <p> I'm from UttarPradesh</p>
//             <body>Come  in centre lorem4    kjdsndkjsndkdsjndkdsjndsjknfjdsnfsmbdhbcbvdsbfih</body>
//         </div>)
//     }
// }
// export default Demo

const Demo = () => {

    return (
        <div className="main_div">
            <div className="Center_div">
                <br />
                    <h1> TO DO LIST</h1>
                <br />
                <input type="text" placeholder="Add an Item"/>
                <button > + </button>
                <ol>
                    <li>AN Apple</li>
                </ol>

            </div>

        </div>)
}

export default Demo
