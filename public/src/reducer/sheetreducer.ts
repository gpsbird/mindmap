import * as types from '../constants/ActionTypes';
import { deepAssign } from '../apptools/commonfunc';

export default (currentState = {}, action) => {
  switch (action.type) {

    case types.SHEET_UNDO :
    {
      return action.pastState;
    }

    case types.SHEET_REDO :
    {
      return action.futureState;
    }

    case types.UPDATE_SHEET_BGCOLOR :
    {
      return deepAssign({}, currentState, {
        bgColor : action.bgColor
      });
    }

    default : {
      return currentState;
    }
  }
};