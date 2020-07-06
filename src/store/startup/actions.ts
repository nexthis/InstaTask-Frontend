import { createAction } from '@reduxjs/toolkit';

export enum StartupTypes {
  STARTUP = 'STARTUP',
  STARTUP_LOADING = 'STARTUP_LOADING',
  STARTUP_SUCCESS = 'STARTUP_SUCCESS',
  STARTUP_FAILURE = 'STARTUP_FAILURE',
}

// interface C extends ActionCreators {
//   startup: () => { type: StartupTypes.STARTUP };
// }

const CreatedActions = createAction( StartupTypes.STARTUP, () => {
    return{
        payload: {
            startup: null
        }
    }
});

export default CreatedActions;
