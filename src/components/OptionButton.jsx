const OptionButton = ({onOption}) => {
  return (
    <div>
      <button className="copy-btn" onClick={() => console.log(onOption)}>
      +
    </button>
    </div>
  );
};

export default OptionButton;