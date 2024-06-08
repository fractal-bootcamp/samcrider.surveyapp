import { Form } from "@remix-run/react";
import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  return (
    <div className="flex flex-col items-center gap-10 p-10 h-[100%]">
      <a href="/" className="text-4xl font-bold uppercase w-[100%] text-accent">
        Total Survey
      </a>
      <div className="flex flex-row justify-evenly">
        <div className="w-[50%] text-accent text-md">
          Do you like surveys? If you do, you've come to the right place.
          Wondering what to do now that you're here? Take or Create baby!
        </div>
        <a className="btn btn-warning" href="/">
          Go Home
        </a>
      </div>
      <div className="divider divider-secondary text-accent divider-start mx-10 mt-10 uppercase">
        {survey.title}
      </div>
      <Form method="post" className="flex flex-col items-center w-[100%]">
        {survey.questions.map((q) => (
          <label key={q.id} className="form-control w-[50%] pb-5">
            <div className="label">
              <span className="label-text text-accent">{q.question}</span>
            </div>
            <input
              type="text"
              name={q.question}
              className="input input-bordered input-primary"
              placeholder="Type here"
            />
          </label>
        ))}
        <button
          type="submit"
          className="btn btn-neutral mt-10 btn-wide text-center"
        >
          Finish
        </button>
      </Form>
    </div>
  );
};

export default Component;
