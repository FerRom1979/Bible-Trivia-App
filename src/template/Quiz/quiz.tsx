import React, { useEffect } from "react";

function Quiz() {
  const getQuestions = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/questions?page=1&size=10`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}` || "",
        },
      });
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);

  return <div>quiz</div>;
}

export default Quiz;
