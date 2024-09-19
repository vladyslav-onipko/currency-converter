const Input = (props) => {
  return (
    <input
      className="form-input min-h-[50px] min-w-[300px] text-[1.5rem] rounded-md border-cyan-700 placeholder:italic"
      {...props}
    />
  );
};

export default Input;
