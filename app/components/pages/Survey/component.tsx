import { Form } from "@remix-run/react";
import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  return (
    <div>
      <h1>{survey.title}</h1>
      <a href="/">Go home</a>
      <Form method="post">
        {survey.questions.map((q) => (
          <div key={q.id}>
            <label>{q.question}</label>
            <input type="text" name={q.question} />
          </div>
        ))}
        <button type="submit">submit</button>
      </Form>
    </div>
  );
};

export default Component;
