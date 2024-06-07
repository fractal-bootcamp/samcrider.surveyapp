import { Fields } from "./types";

const Component = ({ surveys }: Fields) => {
  return (
    <div>
      <h1>Surveys Surveys Surveys!</h1>
      <a href="/create">Create a survey</a>

      {surveys.map((survey, i) => (
        <div key={i}>
          {survey.title}
          <a href={`/survey/${survey.title}`}>take it</a>
          <button>view results</button>
        </div>
      ))}
    </div>
  );
};

export default Component;
