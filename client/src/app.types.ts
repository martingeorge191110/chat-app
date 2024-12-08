


export interface LoadingSpinnerProps {
   size?: string;
   color?: string;
}

export interface regstiering {
   first_n: string;
   last_n: string;
   email: string;
   password: string;
   confirm_password: string;
}

export interface loginning {
   email: string;
   password: string;
}

export interface PayloadTypes {
   success: boolean;
   message: string;
   result?: object;
   errors?: Array<object>
}

export interface UserAccount {
   id: string;
   first_n: string;
   last_n: string;
   email: string;
   phone:string;
   avatar:string;
   bio:string;
   country: string;
}

export interface UserState {
   token: (string | null);
   data: (UserAccount | null)
}
