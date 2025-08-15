import RouterComponent from './components/Router/RouterComponent';
import { TodosContextProvider } from './contexts/TodosContext';

export default function App() {

  return (
    <TodosContextProvider>
      <RouterComponent />
    </TodosContextProvider>
  );
}


