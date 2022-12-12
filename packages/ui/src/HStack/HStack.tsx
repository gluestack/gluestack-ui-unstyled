import React from "react";
import type { IHStackProps } from "./types";
import { UIContext } from "../UIProvider";
import { flattenChildren } from "../utils/getSpacedChild";

export function HStack({ children, space, ...props }: IHStackProps) {
  const { HStack: StyledHStack, HStackSpacer: StyledHStackSpacer } =
    React.useContext(UIContext);

  const getSpacedChildren = (children: any) => {
    let childrenArray = React.Children.toArray(flattenChildren(children));

    childrenArray = childrenArray.map((child: any, index: number) => {
      return (
        <React.Fragment key={child.key ?? `spaced-child-${index}`}>
          {child}
          {index < childrenArray.length - 1 && (
            <StyledHStackSpacer size={space} />
          )}
        </React.Fragment>
      );
    });

    return childrenArray;
  };
  return <StyledHStack {...props}>{getSpacedChildren(children)}</StyledHStack>;
}
