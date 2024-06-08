import { Form } from "@remix-run/react";
import { Fields } from "./types";

const Component = ({ onClick, questions }: Fields) => {
  return (
    <div className="flex flex-col items-center gap-10 p-10 h-[100%]">
      <a href="/" className="text-2xl font-bold uppercase w-[100%] text-accent">
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

      <div className="divider divider-secondary divider-start mx-10 mt-10 uppercase text-accent">
        Create a survey
      </div>

      <Form method="post" className="flex flex-col items-center w-[100%]">
        <div className="flex flex-row justify-center items-end gap-10 pb-5 w-[inherit]">
          <label className="form-control w-[50%]">
            <div className="label">
              <span className="label-text">What is your survey name?</span>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered input-primary"
            />
          </label>

          <button type="button" className="btn btn-neutral" onClick={onClick}>
            add question
          </button>
        </div>
        {questions.map((q, i) => (
          <label key={i} className="form-control w-[50%] pb-5">
            <div className="label">
              <span className="label-text">Question {i + 1}</span>
            </div>
            <input
              type={q.type}
              name={q.name}
              placeholder="Type here"
              className="input input-bordered input-primary w-full"
            />
          </label>
        ))}
        <button
          type="submit"
          className="btn btn-neutral mt-5 btn-wide text-center"
        >
          create
        </button>
      </Form>
    </div>
  );
};

export default Component;
