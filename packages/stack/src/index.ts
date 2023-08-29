import { Stack as StackMain } from './Stack';

export function createStack<StyledStackProps>({
  Root,
}: {
  Root: React.ComponentType<StyledStackProps>;
}) {
  const Stack = StackMain(Root);

  Stack.displayName = 'Stack';

  return Stack;
}
