import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
    <div className="App-header">
      <TodoAdd />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;
