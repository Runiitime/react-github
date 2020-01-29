import {createStore} from 'redux'
import {actionTypes} from './actions'

let initialAppState = {
  team: [],
  profileLogin: 'Runiitime',
  user: {},
  repos: [],
  follows: [],
  users: [],
  tab: 'repos'
}

const reducer = (state = initialAppState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_TEAM_LIST: 
      return {
        ...state,
        team: [...action.payload]
      }
    case actionTypes.UPDATE_PROFILE_LOGIN:
      return {
        ...state,
        profileLogin: action.payload
      }
    case actionTypes.UPDATE_USER: 
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.UPDATE_USER_REPOS: 
      return {
        ...state,
        repos: action.payload
      }
    case actionTypes.UPDATE_USER_FOLLOWS: 
      return {
        ...state,
        follows: action.payload
      }
    case actionTypes.UPDATE_USERS:
      return {
        ...state,
        users: action.payload
      }
    case actionTypes.UPDATE_TAB: 
      return {
        ...state,
        tab: action.payload
      }
    default: return state;
  }
}

export const initializeStore = (initial = initialAppState) => {
  return createStore(reducer, initial);
}