const defaultState = {
  login: {}
}
export default (state = defaultState, action) => {
  if(action.type === 'login') {
    let state = JSON.parse(JSON.stringify(defaultState))
    state.login = action.value
    return state
  }
  return state
}