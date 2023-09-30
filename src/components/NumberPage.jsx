const NumberPage = ({ num, text }) => {
  return (
    <div className="flex gap-10 text-[#372821] font-bold text-xl pl-[250px]">
      <span>{num}</span>
      <p>{text}</p>
    </div>
  );
};

export default NumberPage;
