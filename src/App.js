
import './App.css';
import CounterButton from './CounterButton';
import CounterButtonWithContext from './CounterButtonWithContext';
import CounterButtonWithRecoil from './CounterButtonWithRecoil';
import CounterButtonWithRecoilSelector from './CounterButtonWithRecoilSelector';
import { CounterProvider } from './CounterProvider';

import { RecoilRoot } from 'recoil';
import { DisplayCount } from './DisplayCount';

function App() {
  return (
    <>
      <h1>State Management Example</h1>
      <RecoilRoot>
        <h2>Counter with Recoil</h2>
        <CounterButtonWithRecoil />
        <CounterButtonWithRecoil />
        <DisplayCount />
        <CounterButtonWithRecoilSelector />
      </RecoilRoot>
      <hr/>
      <CounterProvider>
        <h2>createContext and useContext examples</h2>
        <CounterButtonWithContext />
      </CounterProvider>
      <hr/>
      <h2>useState example</h2>
      <CounterButton />
    </>
  );
}

export default App;
