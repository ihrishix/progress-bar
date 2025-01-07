export const LitupButton = ({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick: () => void;
  disabled: boolean;
}) => {
  if (disabled) {
    return (
      <button
        disabled={disabled}
        className="p-[2px] relative"
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-3 py-1  bg-black rounded-[5px]  relative group transition duration-200 text-white ">
          {text}
        </div>
      </button>
    );
  }

  return (
    <button disabled={disabled} className="p-[2px] relative" onClick={onClick}>
      <div className="absolute inset-0 rounded-lg" />
      <div className="px-3 py-1  bg-black rounded-[5px]  relative group transition duration-200 text-white hover:bg-gradient-to-r from-indigo-500 to-purple-500">
        {text}
      </div>
    </button>
  );
};
