import s from "./styles.module.css";
import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  console.log("IN SUCCESS COMPONENT", survey);
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
      <div className="text-2xl font-bold">
        Your Survey Response Has Been Recorded!
      </div>
      <a href={`/results/${survey.title}`} className="btn btn-accent">
        view survey results
      </a>
    </div>
  );
};

export default Component;
