import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
// import Button from "./Button/Button.jsx"
import Student from './Student.jsx'
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import Button from './ButtonOnClick.jsx'
import ProfilePicture from "./ProfilePicture.jsx"
import ReactHook from "./ReactHook.jsx"
import Counter from "./Counter.jsx"
import MyComponent from "./MyComponent_onChange.jsx"
import ColorPicker_Try from "./ColorPicker_Try.jsx"
import UpdaterFunction from "./UpdaterFunction.jsx"
import UpdateState from "./UpdateState.jsx"
import UpdatingArrayState from "./UpdatingArrayState.jsx"
import UpdatingArrayOfObjectsState from './UpdatingArrayOfObjectsState.jsx'
import UseEffect from "./UseEffect.jsx"
import UseEffectHeightWidth from "./UseEffectHeightWidth.jsx"
import ComponentA from "./ComponentA.jsx"
import MyComponent_UseRef from "./MyComponent_UseRef.jsx"

function App() {
  const fruits = [
    {id: 1, name: 'apple', calories: 95}, {id: 2, name: 'beetroot', calories: 100},
    {id: 3, name: 'carrot', calories: 88}, {id:4, name: 'dragon fruit', calories: 150}
  ];
  const vegetables = null;
  return (
    <>
      <Header/>
      <Card />
      <Food/>
      <Button />
      <Student 
        name="Spongebob"
        age={30}
        isStudent={true}
      />
      <Student 
        name="Patrick"
        age = {42}
        isStudent={true}
      />
      <Student 
        name="Squidward"
        age={50}
        isStudent={true}
      />
      <Student />
      <UserGreeting 
        isLoggedIn={true}
        username = 'Test User'
      />
      <List 
        items ={fruits}
        category="Fruits"
      />
      <ProfilePicture />
      <ReactHook />
      <Counter />
      <MyComponent />
      <ColorPicker_Try />
      <UpdaterFunction />
      <UpdateState />
      <UpdatingArrayState />
      <UpdatingArrayOfObjectsState />
      <UseEffect />
      <UseEffectHeightWidth />
      <ComponentA />
      <MyComponent_UseRef />
      <Footer />
    </>
  );
}

export default App
