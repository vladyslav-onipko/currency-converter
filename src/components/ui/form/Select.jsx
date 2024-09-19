const Select = ({ children, ...props }) => {
  return (
    <select className="form-select min-w-[300px] min-h-[50px] rounded-md text-[1.5rem] border-cyan-700" {...props}>
      {children}
    </select>
  );
};

export default Select;
