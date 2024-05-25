import { useState } from "react";

export default function Jokes({ onChangeJokes }) {
  const [joke, setJoke] = useState({});
  async function onChangeJokes() {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();
      console.log(data)
      setJoke(data); // Update the state with the entire joke object
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  }

  return (
    <div>
      <h1>Jokes Creater App</h1>
      <button onClick={onChangeJokes}>Click to Create Jokes</button>
      <h1>Type:{joke.type}</h1>
      {joke.setup && <h3>{joke.setup}</h3>} {/* Conditional rendering to avoid undefined error */}
      {joke.punchline && <p>{joke.punchline}</p>}
    </div>
  );
}


// import { useState } from "react";
// export default function Jokes(){
//     const url="https://hindi-jokes-api.onrender.com/jokes/?api_key=dccc93d4ca9ce1635844f3c38d72";
//     const[joke,setJoke]=useState({
//     })
//     let onHandleJokes=async()=>{
//         let data=await fetch(url);
//         let jsonData=await data.json();
//         console.log(jsonData)
//         setJoke({jokeContent1:jsonData.jokeContent})
//     }
//     return(
//         <>
//             <div>
//                <h1>Jokes!!!!!!!</h1>
//                <h3>{joke.jokeContent1}</h3>
//                <button onClick={onHandleJokes}>Click to generate Joke</button>
//             </div>
//         </>
//     )
// }

