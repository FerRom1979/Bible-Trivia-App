export interface IToast {
  message?: string;
  severity?: "error" | "warning" | "success";
  title?: string;
  setMsg?: any;
}

export interface IToastStyledProps {}
