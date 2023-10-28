import './App.css';
import { Footer } from './components/Footer/Footer';

import { Navbar } from './components/NavBar/Navbar';
import { UserState } from './context/Users/UserState';
import { GeneralRouter } from './router/GeneralRouter';

export const App = () => {
  return (
    <>
      {/* DE ESTA MANERA PROVEEMOS A NUESTRA APP DEL CONTEXTO QUE NECESITEMOS */}
      <Navbar />
      <UserState>
        <GeneralRouter />
      </UserState>
      <Footer />
    </>
  )
}

