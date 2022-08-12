
import './App.css';
import CounterButton from './CounterButton';
import CounterButtonWithContext from './CounterButtonWithContext';
import { CounterProvider } from './CounterProvider';
import ProgressBar from './ProgressBar';

function App() {
  return (
    <>
      <CounterProvider>
        <h1>State Management Example</h1>
        <CounterButtonWithContext />
      </CounterProvider>
      <hr/>
      <CounterButton />
    </>
  );
}

export default App;
