import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// eslint-disable-next-line react/prop-types
const ReCaptCha = ({ setCaptcha }) => {
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptcha(true);
    } else {
      setCaptcha(false);
    }
  };

  return (
    <div>
      <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={onChange} ref={captcha} />
    </div>
  );
};
export default ReCaptCha;
