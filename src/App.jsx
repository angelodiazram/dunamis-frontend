import './App.css';
import { UserState } from './context/Users/UserState';
import { GeneralRouter } from './router/GeneralRouter';

export const App = () => {
  return (
    <>
      {/* DE ESTA MANERA PROVEEMOS A NUESTRA APP DEL CONTEXTO QUE NECESITEMOS */}
      <UserState>
        <h1>dunamis</h1>
        <GeneralRouter />
      </UserState>
    </>
  )
}