import "./App.css";
import Garage from "./Garage";
import Comment from "./Comment";
import Me from "./Me";

// function App() {
//   return (
//     <div>
//       <Garage />
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kitty",
//     avatarUrl: "http://placekitten.com/g/65/65",
//   },
// };

// function App() {
//   return (
//     <div>
//       <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//       />
//     </div>
//   );
// }

const me = {
  date: new Date(),
  text: "I want to be the best",
  author: {
    name: "gachon",
    logo: "good.png",
  },
};

function App() {
  return (
    <div>
      <Me date={me.date} text={me.text} author={me.author} />
    </div>
  );
}

export default App;
