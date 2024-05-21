function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
}

export default App; // without this line the console send: "The requested module '/src/App.jsx?t=1716325551321' does not provide an export named 'default'"
