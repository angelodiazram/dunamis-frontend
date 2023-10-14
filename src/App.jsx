import './App.css';
import { Navbar } from './components/Navbar';
import { GeneralRouter } from './router/GeneralRouter';

export const App = () => {
  return (
    <>
      {/* DE ESTA MANERA PROVEEMOS A NUESTRA APP DEL CONTEXTO QUE NECESITEMOS */}
      <Navbar />
      <h1>dunamis</h1>
      <GeneralRouter />
    </>
  )
}