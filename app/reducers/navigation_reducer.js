import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../AppNavigator';

export default function nav(state = null, action) {
  let nextState;
 
  switch (action.type) {
    case 'Info':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Info' }),
        state
      );
      break;
    case 'Preview':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Preview',params:action.params }),
          state
        );
        break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}