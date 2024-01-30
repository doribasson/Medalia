export interface IUser {
  id: string;
  name: string;
  messages: IMessage[];
  countReadMeassges: number;
}

export interface IData {
  userData: IUser;
  loading?: boolean;
  error?: {};
}

export interface IUserActionModel {
  type: string;
  payload: IUser | any;
}

export interface IMessage {
  id?: string;
  subject: string;
  content: string;
  isRead?: boolean;
}
