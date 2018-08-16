const stateDefault = {auth: false, authInfo: {}};
export default (state = stateDefault, action) => {
  switch (action.type) {
    case 'addAuth':
      return {
        auth: true,
        authInfo: action.playload
      };
    case 'removeAuth':
      return {
        auth: false,
        authInfo: {}
      }
    default:
      return {
        auth: false,
        authInfo: {}
      }
  }
}