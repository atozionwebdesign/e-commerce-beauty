export default function Button({ children, onClick, disabled = false, className, id }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${className} w-full`}
        id={id}
      >
        {children}
      </button>
    );
  }