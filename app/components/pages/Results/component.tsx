import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  return (
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
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
        {survey.questions.map((question, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-center">
              {question.question}
            </div>
            <div className="flex flex-col h-[100%] max-w-72 overflow-auto border-2 rounded-lg p-5">
              {question.answers.map((answer) => (
                <li key={answer.id}>{answer.answer}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
