import React from 'react';
import Rota  from'./routes';
import { Provider } from 'react-redux';
import profStore  from '../src/redux/stores/profs';


function App() {


  return (
    <Provider store={profStore }>
    <Rota/>
    </Provider>
   
  );
}

export default App;
