import ReactDOM from 'react-dom';
import App from './components/App';
import {TodosContextProvider} from './store/todos-context'

ReactDOM.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>,
  document.getElementById('root')
);

