export let actionTypes = {
  UPDATE_TEAM_LIST: 'UPDATE_TEAM_LIST',
  UPDATE_PROFILE_LOGIN: 'UPDATE_PROFILE_LOGIN',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_USER_REPOS: 'UPDATE_USER_REPOS',
  UPDATE_USER_FOLLOWS: 'UPDATE_USER_FOLLOWS',
  UPDATE_USERS: 'UPDATE_USERS',
  UPDATE_TAB: 'UPDATE_TAB'
}

export const updateTeamList = (team) => {
  return {
    type: actionTypes.UPDATE_TEAM_LIST,
    payload: team
  }
}

export const updateProfileLogin = (login) => {
  return {
    type: actionTypes.UPDATE_PROFILE_LOGIN,
    payload: login
  }
}

export const updateUserProfile = (data) => {
  return {
    type: actionTypes.UPDATE_USER,
    payload: data
  }
}

export const updateUserRepos = (data) => {
  return {
    type: actionTypes.UPDATE_USER_REPOS,
    payload: data
  }
}

export const updateUserFollow = (data) => {
  return {
    type: actionTypes.UPDATE_USER_FOLLOWS,
    payload: data
  }
}

export const updateUsers = (data) => {
  return {
    type: actionTypes.UPDATE_USERS,
    payload: data
  }
}

export const updateTab = (tab) => {
  return {
    type: actionTypes.UPDATE_TAB,
    payload: tab
  }
}