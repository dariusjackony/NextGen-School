export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` bg-white px-6 py-3 font-medium text-black cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}