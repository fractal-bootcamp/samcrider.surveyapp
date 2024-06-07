import s from "./styles.module.css";
import { Fields } from "./types";

const Component = ({ survey }: Fields) => {
  console.log("IN SUCCESS COMPONENT", survey);
  return (
    <div className={s.success}>
      <div>Your Survey Response Has Been Recorded!</div>
      <a href={`/results/${survey.title}`}>view survey results</a>
      <a href="/">return home</a>
    </div>
  );
};

export default Component;
