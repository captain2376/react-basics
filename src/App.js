// import logo from './logo.svg';
import './App.css';
import { ClickHandler } from './components/ClickHandler';
import Counter from './components/Counter';
import { FunctionMessage } from './components/FunctionMessage';
import {Greet} from './components/Greet';
import { Hello } from './components/Hello';
import { Inline } from './components/Inline';
import { Message } from './components/Message';
import { NamedList } from './components/NamedList';
import { ParentComponent } from './components/ParentComponent';
import { StyleSheets } from './components/StyleSheets';
import { UserGreetings } from './components/UserGreetings';
import {Welcome} from './components/Welcome';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'
import {Form} from './components/Form'
import { FormDetail } from './components/FormDetail';
import { FragmentDemo } from './components/FragmentDemo';
import { Table } from './components/Table';
import { FragmentList } from './components/FragmentList';
import LifeCycleA from './components/LifeCycleA';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import { WelcomeRefDemo } from './components/WelcomeRefDemo';
import FocusInput from './components/FocusInput';
import FRParentinput from './components/FRParentinput';
import ErrorBoundary from './components/ErrorBoundary';
import {Hero} from './components/Hero'
import { PortalDemo } from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';

function App() {

  return( 
    <div className='App'>
    {/* <h1>Welcome to CGG</h1> */}
    {/* <Greet name="React" designation="SSD">
     <p>This is Children Prop</p>  
    </Greet>
    <Greet name="Angular" designation="SD">
      <button>Active</button>
    </Greet>
    <Greet name="Vue" designation="TL"/>
    <Welcome name="React" designation="SSD">
    <p>This is Children Prop</p> 
    </Welcome>
    <Welcome name="Angular" designation="SD"/>
    <Welcome name="Vue" designation="TL"/> */}
    {/* <Hello/> */}
    {/* <Message/> */}
    {/* <FunctionMessage/> */}
    {/* <Counter/> */}
    {/* <ClickHandler/> */}
    {/* <UserGreetings/> */}
    {/* <ParentComponent/> */}
    {/* <NamedList/> */}
    {/* <StyleSheets primary={false}/> */}
    {/* <Inline/>
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    {/* <Form/> */}
     {/* <FormDetail/> */}
     {/* <FragmentDemo/> */}
     {/* <Table/> */}
     {/* <FragmentList/> */}
     {/* <LifeCycleA/> */}
     {/* <PureComp/> */}
     {/* <ParentComp/> */}
     {/* <WelcomeRefDemo/> */}
     {/* <FocusInput/> */}
     {/* <FRParentinput/> */}
     {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Joker'/>
     </ErrorBoundary> */}
     {/* <PortalDemo/> */}
     {/* <ClickCounter name='Cgg' />
     <HoverCounter/> */}
     {/* <ClickCounterTwo/>
     <HoverCounterTwo/>
     <User render={(isLoggedIn)=>isLoggedIn?'CGG':'Guest'}/> */}
    <CounterTwo render={(count,incrementCount)=>
      (<ClickCounterTwo count={count}
      incrementCount={incrementCount} />)
    } />
    <CounterTwo render={(count,incrementCount)=>(
      <HoverCounterTwo count={count}
      incrementCount={incrementCount} />)
    } />

   </div>
  );
  
}

export default App;
