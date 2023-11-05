export function assignProps<T>(component: T, props: Partial<T> | undefined): T {
  if (!props) {
    return component;
  }

  for (const key in props) {
    if (key) {
      component[key] = props[key] as T[typeof key];
    }
  }
  return component;
}
