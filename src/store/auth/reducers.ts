import { AUTH, IAuthState, IAuthCheckAction } from 'store/auth/types'

const initialState: IAuthState = {
  isAuth: false,
  login: '',
  password: ''
}

export function authReducer(
  state = initialState,
  action: IAuthCheckAction
): IAuthState {
  switch (action.type) {
    case AUTH:
      return Object.assign(
        {},
        {
          isAuth: !state.isAuth,
          login: state.login,
          password: state.password
        }
      )
    default:
      return state
  }
}
