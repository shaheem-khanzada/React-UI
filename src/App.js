import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ComposerInput from './components/ComposerInput';
import MessageItem from './components/MessageItem';

function App() {
  return (
    <div className="App">
      <MessageItem />
      <ComposerInput />
    </div>
  );
}

export default App;
