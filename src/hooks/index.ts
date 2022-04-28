export const toggler = (state: boolean, setState: Function) => {
  return setState((state: boolean) => !state);
};
