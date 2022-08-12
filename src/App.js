
import './App.css';
import CounterButton from './CounterButton';
import CounterButtonWithContext from './CounterButtonWithContext';
import CounterButtonWithRecoil from './recoil-components/CounterButtonWithRecoil';
import CounterButtonWithRecoilSelector from './recoil-components/CounterButtonWithRecoilSelector';
import { CounterProvider } from './CounterProvider';

import { RecoilRoot } from 'recoil';
import { DisplayCount } from './recoil-components/DisplayCount';

function App() {
  return (
    <>
      <h1>State Management Example</h1>
      <RecoilRoot>
        <h2>state management withh Recoil</h2>
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
