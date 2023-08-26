import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Gasstations from './components/Gasstations';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gasstations></Gasstations>
      </header>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
    </QueryClientProvider>
  );

}

export default App;
 