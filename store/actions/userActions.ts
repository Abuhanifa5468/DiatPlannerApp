import {SAVE_IP, SAVE_JWT_TOKEN} from './actionTypes';

export const saveIpAction = (payload: string) => ({
  type: SAVE_IP,
  payload,
});

export const saveJWTTokenAction = (payload: any) => ({
  type: SAVE_JWT_TOKEN,
  payload,
});
