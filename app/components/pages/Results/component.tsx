import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  return (
    <div>
      <h1>{survey.title}</h1>
      <a href="/">go home</a>
      <div>
        {survey.questions.map((question, i) => (
          <div key={i}>
            <h2>{question.question}</h2>
            <div>
              {question.answers.map((answer) => (
                <div key={answer.id}>{answer.answer}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
