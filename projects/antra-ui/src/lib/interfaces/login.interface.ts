export type LoginActionType = 'Login' | 'ForgotPassword' | 'GoogleLogin' | 'MsftLogin';

/**
 * Interface to capture login actions such as 'Login', 'ForgotPassword', 'GoogleLogin', 'MsftLogin' 
 * along with login credentials such as email and password.
 */

export interface LoginActions {
  actionType: LoginActionType;
  email: string;
  password: string;
}
