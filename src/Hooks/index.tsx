import React, { useCallback, useState } from 'react';

// Hook
// Parameter is the boolean, with default "false" value
export const useToggle = (
  initialState: boolean = true
): [boolean, React.MouseEventHandler] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);
  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};
