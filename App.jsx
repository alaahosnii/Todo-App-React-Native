
import { SafeAreaView, } from 'react-native';
import Home from './components/Home/Home';
import RouterComponent from './components/Router/RouterComponent';
import { TodosContextProvider } from './contexts/TodosContext';

export default function App() {

  return (
    // <SafeAreaView>
    <TodosContextProvider>
      <RouterComponent />
    </TodosContextProvider>
    // </SafeAreaView>
  );
}


