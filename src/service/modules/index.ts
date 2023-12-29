// 使用示例
import request from '..';

// 用户登录
export const userLogin = (data: { username: string; password: string }) => {
  return request.post({
    url: '/api/login',
    data
  });
};

// 获取菜单列表
export const menuList = () => {
  return request.get({
    url: '/api/menulist'
  });
};
