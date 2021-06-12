const defaultState = { 
    users: [],
    page: 0,
    dragedUser: ''
};

export default function reducer(state=defaultState, action){
    
    switch(action.type){
      case 'ERROR':{//for feature
        return {
          ...state,
          errorMessage: action.message
        }
      }
      case 'GET_USERS':{
        return {
          ...state,
          users: action.users
        }
      }
      case 'ADD_USER':{
        let users = [ action.user, ...state.users];
        return {
          ...state,
          users
        }
      }
      case 'DELETE_USER':{
        let users = state.users.filter(user => {
          return user._id !== action.userId
        });
        return {
          ...state,
          users
        }
      }
      case 'CHANGE_PAGE':{
        return {
          ...state,
          page: action.page
        }
      }
      case 'DELETE_CHECKED':{
        let users = state.users.filter(user => {
          return !action.checkedUsers.includes(user._id);
        });
        return {
          ...state,
          users
        }
      }
      case 'DRAG_USER':{     
        return {
          ...state,
          dragedUser: action.user
        }
      }
      case 'DROP_USER':{     
        let beforeIndex = state.users.findIndex(user => user._id === state.dragedUser._id);
        let afterIndex = state.users.findIndex(user => user._id === action.id);
        let allUsers = [...state.users].map((user,index) => {
          if(index === parseInt(afterIndex)) return state.dragedUser;
          if(index === parseInt(beforeIndex)){
            return state.users[afterIndex];
          } 
          return user;
        })
        return {
          ...state,
          users: allUsers,
          dragedUser: ''
        }
      }
      case 'UPDATE_FROM_STORAGE' :{
        return {
          ...state,
          users: action.users
        }
      }
      case 'SAVE_USER_CHANGES':{
        let users = [...state.users];
        let userIndex = users.findIndex(item => {
          return item._id === action.user._id
        })
        users[userIndex] = action.user;
        return {
          ...state,
          users
        };
      }
      default: return state;
    }
}