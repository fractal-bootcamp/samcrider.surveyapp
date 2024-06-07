import { Fields } from "./types";

const Component = ({ surveys }: Fields) => {
  return (
    <div className="flex flex-col items-center gap-10 p-10 h-[100%]">
      <div className="text-2xl font-bold uppercase w-[100%]">Total Survey</div>
      <div className="flex flex-row justify-evenly">
        <div className="w-[50%]">
          Do you like surveys? If you do, you've come to the right place.
          Wondering what to do now that you're here? Take or Create baby!
        </div>
        <a className="btn btn-secondary" href="/create">
          Create a survey
        </a>
      </div>

      <div className="divider divider-start mx-10 mt-10">Surveys</div>

      <div className="flex flex-row gap-10 flex-wrap">
        {surveys.map((survey, i) => (
          <div className="card w-96 bg-neutral shadow-xl" key={i}>
            <div className="card-body ">
              <h2 className="card-title text-accent ">{survey.title}</h2>
              <div className="card-actions justify-end">
                <a className="btn btn-accent" href={`/survey/${survey.title}`}>
                  take it
                </a>

                <a className="btn btn-accent" href={`/results/${survey.title}`}>
                  view results
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
