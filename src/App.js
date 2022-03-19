import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer tittle="Deals"/>
    </div>
  );
}

export default App;
