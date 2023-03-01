import { combineReducers } from 'redux';
import HistorySlice  from './reducers/historyReducer';
import LoginReducer from './reducers/loginReducer';
import ModalReducer from './reducers/modalsReducer';
import MusicReducer from './reducers/musicReducer';
import  PlayListSlice  from './reducers/playListReducer';
import UserReducer from './reducers/userReducer';


const rootReducer = combineReducers({
   login: LoginReducer,
   music:MusicReducer,
   user: UserReducer,
   modal:ModalReducer,
   playlist:PlayListSlice,
   history:HistorySlice,
})

export default rootReducer;