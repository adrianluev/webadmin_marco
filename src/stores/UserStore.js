import { extendObservable } from "mobx";

/**
 * UserStore
 */

class UserStore{
    constructor(){
        extendObservable(this, {
            loading: false,
            isLoggedIn: true,
            username: 'adrianluev'
        })
    }
}


export default new UserStore();