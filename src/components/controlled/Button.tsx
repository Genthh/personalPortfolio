import React, { forwardRef } from "react";
import clsx from "clsx";
import { ButtonProps } from "@/types/types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, className }, ref) => {
    return (
      <div>
        <button
          ref={ref}
          onClick={onClick}
          className={clsx(
            "border-2 border-darkPurple text-customWhite md:text-xl md:text ease-in duration-150 rounded md:px-4 px-1 py-1",
            className
          )}
        >
          {text}
        </button>
      </div>
    );
  }
);
