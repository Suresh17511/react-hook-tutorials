import React, {createContext, useReducer} from 'react';
import './App.css';
import CustomCounterOne from './Components/CostumHook/CustomCounterOne';
import CustomCounterTwo from './Components/CostumHook/CustomCounterTwo';
import DocumentTitleOne from './Components/CostumHook/DocumentTitleOne';
import DocumentTitleTwo from './Components/CostumHook/DocumentTitleTwo';
import UserForm from './Components/CostumHook/UserForm';
import Parent from './Components/useCallBack/Parent';
import ComponentC from './Components/useContext/ComponentC';
import ConditionalRunEffect from './Components/useEffect/ConditionalRunEffect';
import DataFetching from './Components/useEffect/DataFetching/DataFetching';
import DataFetchingThree from './Components/useEffect/DataFetching/DataFetchingThree';
import DataFetchingTwo from './Components/useEffect/DataFetching/DataFetchingTwo';

import EffectHookOne from './Components/useEffect/EffectHookOne';
import InCorrectDependency from './Components/useEffect/InCorrectDependency';
import Timer from './Components/useEffect/Timer';
import UseEffectOnlyOnce from './Components/useEffect/UseEffectOnlyOnce';
import UseEffectWithCleanUp from './Components/useEffect/UseEffectWithCleanUp';
import Counter from './Components/useMemo/Counter';
import CounterOne from './Components/useReducer/CounterOne';
import CounterThree from './Components/useReducer/counterThree';
import CounterTwo from './Components/useReducer/CounterTwo';
import FetchingDataWithUseReducer from './Components/useReducer/FetchingDate/FetchingDataWithUseReducer';
import ComponentA from './Components/useReducer/useReducerWithContext/ComponentA';
import ComponentB from './Components/useReducer/useReducerWithContext/ComponentB';
import ComponentBchild from './Components/useReducer/useReducerWithContext/ComponentBchild';
import FocusInput from './Components/useRef/FocusInput';
import HookTimer from './Components/useRef/HookTimer';
import HookFour from './Components/useState/HookFour';
import HookFourExtend from './Components/useState/HookFourExtend';
import HookOne from './Components/useState/HookOne';
import HookThree from './Components/useState/HookThree';
import HookTwo from './Components/useState/HookTwo';
export const CountContext = React.createContext();
const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
};

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <CountContext.Provider
        value={{countState: count, countDispatch: dispatch}}
      >
        <UserContext.Provider value={'Surya '}>
          <ChannelContext.Provider value={'RockStar'}>
            {/* <ComponentC /> */}
            {/* <ComponentA />
            <ComponentB />
            <ComponentBchild /> */}
          </ChannelContext.Provider>
        </UserContext.Provider>
      </CountContext.Provider>

      {/* <h2>Count - {count}</h2> */}
      {/* <HookOne /> */}
      {/* <HookTwo /> */}
      {/* <HookThree /> */}
      {/* <HookFour /> */}
      {/* <HookFourExtend /> */}
      {/* <EffectHookOne /> */}
      {/* <ConditionalRunEffect /> */}
      {/* <UseEffectOnlyOnce /> */}
      {/* <UseEffectWithCleanUp /> */}
      {/* <InCorrectDependency /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingThree /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <Timer /> */}
      {/* <FetchingDataWithUseReducer /> */}
      {/* <Parent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
      {/* <DocumentTitleOne />
      <DocumentTitleTwo /> */}
      {/* <CustomCounterOne />
      <CustomCounterTwo /> */}
      <UserForm />
    </div>
  );
}

export default App;
