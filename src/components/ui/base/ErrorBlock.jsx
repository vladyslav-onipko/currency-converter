const ErrorBlock = ({ message }) => {
  return (
    <div className="w-1/2 min-h-[100px] mx-auto border-2 border-red-950 bg-red-200 flex-col p-[20px] text-center">
      <header className="w-full min-h-[50pxp-[15px] text-center mb-[15px]">
        <p className="text-[2.6rem]">Sorry, en error ocuurred</p>
      </header>
      <p className="text-[2.2rem]">{message}</p>
    </div>
  );
};

export default ErrorBlock;
