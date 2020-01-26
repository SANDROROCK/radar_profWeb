import {ADD_TASK} from '../../types';
import api from '../../../services/api';

export function getProfs(payload) {
    return {
        type: ADD_TASK,
        payload:{
           getProf();
        }
    }
};


async function getProf(){
    return await api.get('/prof');

}