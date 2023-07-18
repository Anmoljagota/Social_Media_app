interface RegisterUserDetails{
    name:string | "";
    email:string | "";
    PhoneNumber:number | "";
    password:string|number | "";
    city:string | ""
  }

  export interface details_type {
    inputfield: number;
    setSignupData: React.Dispatch<
      React.SetStateAction<RegisterUserDetails | null>
    >;
  }

  

  export default RegisterUserDetails