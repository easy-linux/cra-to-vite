import users from './users/reduser'
import dialog from './dialog/reduser'
import { usersApi, userApi } from '../services'

const redusers =  {
    dialog,
    users,
    [usersApi.reducerPath]: usersApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
}

export default redusers