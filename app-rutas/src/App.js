import {Outlet, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Ejercicios React-Router-1</h1>
      <p>
      Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
      dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
      Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
      sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
      </p>
      <p>
      Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
      dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
      Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
      sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
      </p>
      <h2>Opciones</h2>
      <nav>
        <Link to='/facturas'>Facturas</Link>
        <br/>
        <Link to='/gastos'>Gastos</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
