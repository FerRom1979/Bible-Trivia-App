import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IReCaptchaProps } from "./types";

const ReCaptCha = ({ captcha }: IReCaptchaProps) => {
  return (
    <div>
      <ReCAPTCHA
        sitekey={"6LeopA8iAAAAAATtXk7RZTI7SE4jOSfleAIBRbFV"}
        size={"invisible"}
        ref={captcha}
      />
    </div>
  );
};
export default ReCaptCha;
