const USER_SIGNUP_LOADING:string="user_signup_loading";
const USER_SIGNUP_SUCCESS:string="user_signup_success";
const USER_SIGNUP_ERROR:string="user_signup_error"
export type AppAction =
  | { type: typeof USER_SIGNUP_LOADING , payload:any}
  | { type: typeof USER_SIGNUP_ERROR , payload:any} // Define the payload type according to your response data
  | { type: typeof USER_SIGNUP_SUCCESS , payload:any }
export {USER_SIGNUP_LOADING,USER_SIGNUP_SUCCESS,USER_SIGNUP_ERROR}