import s from "./styles.module.css";

const Component = () => {
  return (
    <div className={s.success}>
      <div>Your Survey Response Has Been Recorded!</div>
      <a href="/">view survey results</a>
      <a href="/">return home</a>
    </div>
  );
};

export default Component;
