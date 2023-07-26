import cn from "@/utils/cn";
import React from "react";

type ContainerProps<C extends React.ElementType> = {
  component?: C;
  className?: string;
};

type Props<C extends React.ElementType> = React.PropsWithChildren<ContainerProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ContainerProps<C>>;

export default function Container<C extends React.ElementType = "div">({
  children,
  className,
  component,
  ...rest
}: Props<C>) {
  const Component = component || "div";

  return (
    <Component className={cn("container", className)} {...rest}>
      {children}
    </Component>
  );
}
