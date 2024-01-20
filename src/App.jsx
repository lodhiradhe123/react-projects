import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);
  const someobj = { name: "radhe", cast: "lodhi" };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card ele="radhe" />
      <Card ele="shyam" elem={someobj} />
    </>
  );
}

export default App;
