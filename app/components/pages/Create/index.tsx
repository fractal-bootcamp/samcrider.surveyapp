import Component from "./component";
import { useCreatePageData } from "./data";

const Create = () => {
  const { handleAddQuestion, questions } = useCreatePageData();

  return <Component onClick={handleAddQuestion} questions={questions} />;
};

export default Create;
