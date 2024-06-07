import Component from "./component";
import { SurveyPageProps } from "./types";

const Survey = ({ survey }: SurveyPageProps) => {
  return <Component survey={survey} />;
};

export default Survey;
