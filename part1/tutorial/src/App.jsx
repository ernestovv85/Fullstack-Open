import Footer from './components/Footer';
import Hello from './components/Hello';

function App() {
  const friends = [
    { name: 'John', age: 25 },
    { name: 'Maya', age: 10 },
  ];
  return (
    <div>
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
    </div>
  );
}

export default App; // without this line the console send: "The requested module '/src/App.jsx?t=1716325551321' does not provide an export named 'default'"
