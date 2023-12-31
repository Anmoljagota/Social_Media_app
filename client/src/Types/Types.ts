interface RegisterUserDetails{
    name?:string ;
    email?:string ;
    PhoneNumber?:number ;
    password?:string|number ;
    city?:string 
  }

  export interface details_type {
    inputfield: number;
    setDetails: React.Dispatch<
    React.SetStateAction<RegisterUserDetails | null>
  >;
  handleSubmit:(setDetails:any)=>void;
    text:string;
details:RegisterUserDetails | null
  }

  export interface action {
    type: string;
    payload?: any;
  }
 export interface postdataobject {
    postId: number;
    description: string;
    image: string;
    timestamp_column: string;
    userId: number;
    name: string;
    email: string;
  }
 export interface intial_data {
    loading: boolean;
    error: boolean;
    postdata: postdataobject[];
  }

  export default RegisterUserDetails