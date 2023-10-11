import { useRoutes} from 'react-router-dom'
import './App.css';
import Routes from './Routes.js'
function App() {
  let Masir = useRoutes(Routes)
  return Masir
}

export default App;
