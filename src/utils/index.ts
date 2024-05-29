import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>,
    callback: Dispatch<SetStateAction<string>>
  ) => {
    callback(event.target.value);
  };

  type DisplayState<T extends string> = {
    [K in T]: boolean;
  };
  
  type ActionMap<T extends string> = {
    [action: string]: T;
  };
  
  export const createReducer = <T extends string>(actionMap: ActionMap<T>) => {
    return (state: DisplayState<T>, action: string): DisplayState<T> => {
      const key = actionMap[action as keyof typeof actionMap];
      if (key) {
        return { ...state, [key]: !state[key] };
      }
      return state;
    };
  };