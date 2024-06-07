import { Form } from "@remix-run/react";
import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  return (
    // <div>
    //   <h1>{survey.title}</h1>
    //   <a href="/">Go home</a>
    //   <Form method="post">
    //     {survey.questions.map((q) => (
    //       <div key={q.id}>
    //         <label>{q.question}</label>
    //         <input type="text" name={q.question} />
    //       </div>
    //     ))}
    //     <button type="submit">submit</button>
    //   </Form>
    // </div>
    <div className="flex flex-col items-center gap-10 p-10 h-[100%]">
      <div className="text-2xl font-bold uppercase w-[100%]">Total Survey</div>
      <div className="flex flex-row justify-evenly">
        <div className="w-[50%]">
          Do you like surveys? If you do, you've come to the right place.
          Wondering what to do now that you're here? Take or Create baby!
        </div>
        <a className="btn btn-secondary" href="/">
          Go Home
        </a>
      </div>
      <div className="divider divider-start mx-10 mt-10 uppercase">
        {survey.title}
      </div>
      <Form method="post">
        {survey.questions.map((q) => (
          <label key={q.id} className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">{q.question}</span>
            </div>
            <input
              type="text"
              name={q.question}
              className="input input-bordered input-gray w-full max-w-xs"
              placeholder="Type here"
            />
          </label>
        ))}
        <button
          type="submit"
          className="btn btn-warning mt-10 btn-wide text-center"
        >
          submit
        </button>
      </Form>
    </div>
  );
};

export default Component;
