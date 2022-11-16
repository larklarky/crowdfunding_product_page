import React, { useState, createContext, useContext, useReducer } from 'react';
import styles from './App.module.css';
import {IoClose, IoMenu} from 'react-icons/io5';
import {ProjectHeader} from './ProjectHeader';
import {Statistics} from './Statistics';
import {MainInfo} from './MainInfo';
import {ThanksPopup} from './ThanksPopup';

export type Pledge = {
  id: number;
  title: string;
  pledge: number;
  description: string;
  amount: number;
}


interface AppContextInterface {
  goal: number;
  money: number;
  currency: string;
  backers: number;
  days: number;
  pledges: Pledge[];
  thanksModal: boolean;
}

type Payload = {
  money: number;
  pledgeId: number;
}

type ModalPayload = {
  thanksModal: boolean;
}

type Action = {
  type: string;
  payload: any;
}

type ContextValue = {
  state: AppContextInterface;
  dispatch: (action: Action) => void;
}

const AppData: AppContextInterface ={
  goal: 100000,
  money: 89914,
  currency: 'USD',
  backers: 5007,
  days: 56,
  pledges: [
    {id: 1,
    title: 'Bamboo Stand',
    pledge: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.`,
    amount: 101
    },
    {id: 2,
    title: 'Black Edition Stand',
    pledge: 75,
    description: `You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.`,
    amount: 64
    },
    {id: 3,
    title: 'Mahogany Special Edition',
    pledge: 200,
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included. `,
    amount: 0
    }
  ],
  thanksModal: false,
}



export const AppContext = createContext<ContextValue>({state: AppData, dispatch: (action: Action) => {}});

const initialState = AppData;

function reducer(state: AppContextInterface, action: Action) {
  switch (action.type) {
    case 'add':
      return Object.assign({}, state, {
        money: state.money + action.payload.money,
        backers: state.backers + 1,
        pledges: state.pledges.map(pledge => {
          if(pledge.id === action.payload.pledgeId) {
            return {...pledge, amount: pledge.amount - 1}
          } else {
            return pledge
          }
        })
      })
      case 'thanksModal':
        return Object.assign({}, state, {
          thanksModal: action.payload.thanksModal
        })
    default:
      return state
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [active, setActive] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{state, dispatch}}>
        <div className={styles.App}>
          <ThanksPopup thanksModal={state.thanksModal}/>
          <div className={styles.navbar}>
            <div className={styles.logo}>crowdfund</div>
            <div className={styles.links}>
            <button 
              className={`${styles.menu}`}
              onClick={() => setActive(!active)}
            >
              {active ? <IoClose/> : <IoMenu/>}
            </button>
              <ul className={active ? styles.dropped : ''}>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
              </ul>
            </div>
          </div>
          <div className={styles.container}>
            <ProjectHeader />
            <Statistics goal={state.goal} money={state.money} backers={state.backers} days={state.days} currency={state.currency}/>
            <MainInfo pledges={state.pledges}/>
            
          </div>
        
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
