import requestServer from '../workers/requestServer';
import {BASE_URL, METHODS} from '../constants/API_constants';

const req_get_category = 'get_category.php';
const req_get_check_branch = 'check_branch.php';
//OnlY POST
//Get query key

export const getCategoryRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_category,
      {login_id: params.queryKey[1]},
    );
    return response.status === 200
      ? {status: true, statusCode: response.status, res: response.data.GTS}
      : failedLog('getCategoryRemote()', response);
  } catch (err) {
    console.log('errr', err);
    return {
      status: false,
      statusCode: err?.statusCode,
      res: err.data,
    };
  }
};

export const getCheckBranchRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_check_branch,
      payload,
    );
    return response.status === 200
      ? {status: true, statusCode: response.status, res: response.data.GTS}
      : failedLog('getCheckBranchRemote()', response);
  } catch (err) {
    console.log('errrr', err);
    return {
      status: false,
      statusCode: err?.statusCode,
      res: err?.data,
    };
  }
};

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
  );
  throw response;
};
