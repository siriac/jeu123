import logo from './logo.svg';
import './App.css';
import Body from './component/body';
function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light navbar-expand">
    <div className="navbar-brand" >123 Game</div>
      <ul className="navbar-nav ml-auto">
      <button className="btn btn-primary btn-sm" type="button" onClick={()=>window.location.reload()}>New Game</button>
      </ul>
</nav>
<Body/>
    </div>
  );
}

export default App;
