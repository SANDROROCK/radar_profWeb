import {createStore} from 'redux';
import profsReducer from "../../reducers/profs";


const profStore = createStore(profsReducer);


export default profStore ;