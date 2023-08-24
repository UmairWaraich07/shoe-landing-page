const Button = ({
  label,
  icon,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center border
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : ` bg-coral-red text-white border-coral-red`
      }
    px-7 py-4 text-lg gap-2 font-montserrat rounded-full leading-none 
    ${fullWidth && "w-full"} `}
    >
      {label}
      {icon && (
        <img
          src={icon}
          alt={`${label} icon`}
          className="ml-2 w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
