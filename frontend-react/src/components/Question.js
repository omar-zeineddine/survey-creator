import "../App.css";

const Question = ({ id, text, type, values, setValues }) => {
  const question_type = () => {
    return <Input id={id} type={type} values={values} setValues={setValues} />;
  };

  return (
    <div className="question">
      <h3>{text}</h3>
      {question_type()}
    </div>
  );
};

export default Question;
