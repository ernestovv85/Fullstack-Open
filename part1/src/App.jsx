import Hello from "./components/Hello";

function App() {
  const name = 'Peter'
  const age = 10;
  return (
    <div>
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
    </div>
  );
}

export default App; // without this line the console send: "The requested module '/src/App.jsx?t=1716325551321' does not provide an export named 'default'"
