export interface ILogin {
  setShowLogin?: any;
}

export interface IMsg {
  message?: string;
  title?: string;
  severity?: "error" | "warning" | "success" | undefined;
}
