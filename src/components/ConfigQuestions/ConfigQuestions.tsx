import React from "react";

const ConfigQuestions = () => {
  return (
    <div>
      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <select name="difficulty" title="Difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="category" title="category" id="category">
          <option value="characters">Characters</option>
          <option value="general">General</option>
          <option value="oldTestament">Old Testament</option>
          <option value="newTestament">New Testament</option>
        </select>
      </div>
    </div>
  );
};

export default ConfigQuestions;
