import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IReCaptchaProps } from "./types";

const ReCaptCha = ({ setCaptcha }: IReCaptchaProps) => {
  const captcha = useRef<any>(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptcha(true);
    } else {
      setCaptcha(false);
    }
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY || ""}
        onChange={onChange}
        ref={captcha}
      />
    </div>
  );
};
export default ReCaptCha;
