import { useState } from "react";

const Titulo = ({ color }) => {

    const [text, setText] = useState("Título inicial");
    const [inputText, setInputText] = useState("");

    function clicou() {
        setText(inputText);
    }

    return (
        <div>
            <h1 style={{ color: color }}>{text}</h1>
            <input value={inputText} onChange={(e) => { setInputText(e.target.value) }} type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    )
};

export default Titulo



// const Titulo = () => {
//     let name = 'William';
//     let sum = 10 + 10;
//     const urlImg = "https://imgs.search.brave.com/fsvao46Yi_B1ur440AXOEkY47vJmCK_PIKh7VaBXY5M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9wb3J0dWd1/ZXNlL25ld3MvY29u/dGVudC9pbWFnZXMv/c2l6ZS93MjAwMC8y/MDIzLzAzL0VrcmFu/LVJlc21pLTIwMTkt/MTEtMTgtMTguMDgu/MTMucG5n";
//     return (
//         <div>
//             <h1>Oi eu sou um título {name} {sum}</h1>
//             <img width={150} src={urlImg} />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate magnam laborum odit corrupti ad exercitationem dignissimos id, a ipsa nesciunt voluptates eius consequatur? Dolorum quidem maxime repellat architecto dolores!</p>
//         </div>
//     )
// };

// export default Titulo


// const Titulo = ({ name, paragraph }) => {
//     return (
//         <div>
//             <h1>Eu sou {name ? name : 'VASCO DA GAMA!!!!'}</h1>
//             {paragraph ?
//                 <p>Lorem ipsum dolor sit amet con
//                     sectetur adipisicing elit. Reprehenderit dolore ipsam totam sit dignissimos perferendis libero officiis incidunt maxime eaque ipsum deleniti obcaecati perspiciatis consequuntur, quo nesciunt ad consectetur sequi?</p>
//                 : <p />
//             }
//         </div>
//     )
// };

// export default Titulo

// const Titulo = ({ name, color }) => {
//     return (
//         <div>
//             <h1 style={{ color: color }}>Eu sou {name ? name : 'VASCO DA GAMA!!!!'}</h1>
//             <p>Lorem ipsum dolor sit amet con
//                 sectetur adipisicing elit. Reprehenderit dolore ipsam totam sit dignissimos perferendis libero officiis incidunt maxime eaque ipsum deleniti obcaecati perspiciatis consequuntur, quo nesciunt ad consectetur sequi?</p>
//         </div>
//     )
// };

// export default Titulo
