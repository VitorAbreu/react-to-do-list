import React from "react";
import { cva, type VariantProps } from "class-variance-authority"; // passando o type no import você trás apenas o tipo do objeto sem importa-lo

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

// faz um extensão dos tipos do textVariants
interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements; // mapeia cada tag para seu tipo em react, ajuda o intellisense a recomendar as tags html
  className?: string;
  children?: React.ReactNode; // tipo que serve de coringa para cobrir diversos tipos de objetos
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
