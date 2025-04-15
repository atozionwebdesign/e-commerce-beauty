import { MouseEventHandler } from "react";

type ButtonProps = {
  children: React.ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  className: string,
  id?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, className, id}) => {
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

export default Button;