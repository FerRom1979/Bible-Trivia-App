import React from "react";
import { useState, useEffect } from "react";

export default function Countdown({ getTime, stop, startTime }: any) {
  const [mins, setMinutes] = useState(startTime);
  const [secs, setSeconds] = useState(0);
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
      getTime(`${mins}.${secs}`);
    }, 1000);
    if (stop) clearInterval(sampleInterval);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div className="count-down">
      {!(mins || secs) ? (
        startTime
      ) : (
        <>
          {mins}:{secs < 10 ? `0${secs}` : secs}
        </>
      )}
    </div>
  );
}
