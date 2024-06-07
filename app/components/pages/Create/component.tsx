import { Form } from "@remix-run/react";
import { Fields } from "./types";

const Component = ({ onClick, questions }: Fields) => {
  return (
    <div>
      <h1>Create a survey</h1>
      <a href="/">go home</a>

      <Form method="post">
        <label>name</label>
        <input type="text" name="title" />
        <button type="button" onClick={onClick}>
          add question
        </button>
        {questions.map((q, i) => (
          <div key={i}>
            <label>Question {i + 1}</label>
            <input type={q.type} name={q.name} />
          </div>
        ))}
        <button type="submit">create</button>
      </Form>
    </div>
  );
};

export default Component;
