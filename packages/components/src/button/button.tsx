import { ComponentProps } from "react";

export const Button = (props: ComponentProps<"button">) => {
  const { children, ...rest } = props;

  return (
    <button {...rest} type="button">
      {children}
    </button>
  );
}

Button.displayName = "Button";
