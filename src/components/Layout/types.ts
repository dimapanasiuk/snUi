interface ILoginData {
    __typename?: string;
    id: string;
    username: string;
    password?: string;
    email?: string;
    todo?: Array<any>
  }
  
  export interface IMainLayout {
    loginData: ILoginData
  }