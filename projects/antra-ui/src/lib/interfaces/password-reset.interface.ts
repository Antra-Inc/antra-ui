export type PasswordResetActionType = 'PasswordReset' | 'ChangePassword';

/**
 * Interface to capture login actions such as 'Login', 'ForgotPassword', 'GoogleLogin', 'MsftLogin'
 * along with login credentials such as email and password.
 */

export interface PasswordResetActions {
  actionType: PasswordResetActionType;
  email: string;
  password: string;
  confirmPassword: string;
}
