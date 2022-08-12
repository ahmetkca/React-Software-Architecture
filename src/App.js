
import './App.css';
import CounterButton from './CounterButton';
import CounterButtonWithContext from './CounterButtonWithContext';
import CounterButtonWithRecoil from './recoil-components/CounterButtonWithRecoil';
import CounterButtonWithRecoilSelector from './recoil-components/CounterButtonWithRecoilSelector';
import { CounterProvider } from './CounterProvider';

import { RecoilRoot } from 'recoil';
import { DisplayCount } from './recoil-components/DisplayCount';

import { Provider } from 'react-redux';
import { reduxStore } from './redux-files/store';
import { CounterButtonWithRedux } from './redux-files/CounterButtonWithRedux';


function App() {
  return (
    <>
      <h1>State Management Example</h1>
      <Provider store={reduxStore}>
        <h2>State Management with <b>Redux</b></h2>
        <CounterButtonWithRedux />
      </Provider>
      <hr/>
      <RecoilRoot>
        <h2>state management with <b>Recoil</b></h2>
        <CounterButtonWithRecoil />
        <CounterButtonWithRecoil />
        <DisplayCount />
        <CounterButtonWithRecoilSelector />
      </RecoilRoot>
      <hr/>
      <CounterProvider>
        <h2><b>createContext</b> and <b>useContext</b> examples</h2>
        <CounterButtonWithContext />
      </CounterProvider>
      <hr/>
      <h2>useState example</h2>
      <CounterButton />
    </>
  );
}

export default App;
