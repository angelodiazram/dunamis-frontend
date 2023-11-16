import './App.css';
import { Footer } from './components/Footer/Footer';

import { Navbar } from './components/NavBar/Navbar';
import { UserProvider } from './context/Users/UserProvider';
import { PlannerProvider } from './context/planners/PlannerProvider';
import { PolerasProvider } from './context/poleras/PolerasProvider';
import { GeneralRouter } from './router/GeneralRouter';

export const App = () => {
  return (
    <UserProvider>
      {/* DE ESTA MANERA PROVEEMOS A NUESTRA APP DEL CONTEXTO QUE NECESITEMOS */}
        <PolerasProvider>
          <PlannerProvider>
            <Navbar />
            <GeneralRouter />
          </PlannerProvider>
        </PolerasProvider>
      <Footer />
    </UserProvider>
  )
}

