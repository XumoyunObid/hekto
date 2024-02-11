import clsx from "clsx";
const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "py-[15px] px-[40px]",
        {
          "bg-primaryPink text-white": variant === "primary",
          "bg-offGreen text-white":
            variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
