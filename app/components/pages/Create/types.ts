export type Question = {
  type: string;
  name: string;
};

export type Fields = {
  onClick: () => void;
  questions: Question[];
};
