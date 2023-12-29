import { BASE_URL, TIME_OUT } from './config';
import Request from './request';

// 统一的请求对象
const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
    requestFailureFn: (error) => {
      return error;
    },
    responseSuccessFn: (response: any) => {
      // 后端直接返回promise,可以在此处使用try catch进行错误处理，mock中暂时不知道怎么处理
      switch (response.code) {
        case 200:
          return response.data;
        case 400:
          return Promise.reject(response.msg);
        default:
          return Promise.reject(response.msg);
      }
    },
    responseFailureFn: (error) => {
      return error;
    }
  }
});

export default request;
