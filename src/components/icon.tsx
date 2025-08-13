import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const iconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});
// pega as propriedades do svg e coloca na interface
interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  // torna a propriedade svg um componente funcional "FC" com base num elemento svg que irá receber
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
