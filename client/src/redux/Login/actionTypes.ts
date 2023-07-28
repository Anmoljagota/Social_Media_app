const USER_SIGNUP_LOADING:string="user_signup_loading";
const USER_SIGNUP_SUCCESS:string="user_signup_success";
const USER_SIGNUP_ERROR:string="user_signup_error"
const USER_LOGIN_LOADING:string="user_login_loading";
const USER_LOGIN_SUCCESS:string="user_login_success";
const USER_LOGIN_ERROR:string="user_login_error"
export type AppAction =
  | { type: typeof USER_SIGNUP_LOADING , payload:any}
  | { type: typeof USER_SIGNUP_ERROR , payload:any} // Define the payload type according to your response data
  | { type: typeof USER_SIGNUP_SUCCESS , payload:any }
export {USER_SIGNUP_LOADING,USER_SIGNUP_SUCCESS,USER_SIGNUP_ERROR,USER_LOGIN_LOADING,USER_LOGIN_SUCCESS,USER_LOGIN_ERROR}