import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";
import CheckIcon from "../assets/icons/Check.svg?react";
import Skeleton from "./skeleton";

export const inputCheckoBoxWrapperVariants = cva(
  `
    inline-flex items-center justify-center relative
    group
  `
);
// appearance-none reseta o estilo do elemento
// é usado o peer aqui, para ter o envolvimento com o componente icon que é irmão

// com a criação do skeleton é necessário criar uma variant sem estilização para não sobrepor os valores do skeleton
export const inputCheckboxVariants = cva(
  `
    appearance-none peer flex items-center justify-center
     transition overflow-hidden cursor-pointer
    
  `,
  {
    variants: {
      variant: {
        none: "",
        default: `
          border-2 border-solid border-green-base hover:border-green-dark hover:bg-green-dark/20
        checked:border-green-base checked:bg-green-base
        group-hover:border-green-dark group-hover:checked:bg-green-dark
        `,
      },
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  }
);

// peer-checked:block irá trocar a visibilidade de hidden para block quando houver o check
export const inputCheckboxIconVariants = cva(
  `
    absolute top-1/2 left-1 -translate-y-1/2
    hidden peer-checked:block fill-white
  `,
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface InputCheckboxProps
  extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function InputCheckbox({
  variant,
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={inputCheckboxVariants({ size, variant: "none" })}
      />
    );
  }
  return (
    <label className={inputCheckoBoxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ variant, size, disabled })}
        {...props}
      />
      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  );
}
