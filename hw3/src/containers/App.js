import './App.css';
import Title from './Title'
import Main from './Main'
import Footer from './Footer'

global.todoCnt = 0;

function App() {
  return (
    <div className="todo-app__root">
      <Title />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
