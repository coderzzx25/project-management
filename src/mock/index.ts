import Mock from 'mockjs';
import { IRoutes } from '@/global/type';
import { localCache } from '@/utils/cache';

const menuData: IRoutes[] = [
  {
    icon: 'HomeOutlined',
    title: '数据大屏',
    path: '/data/data'
  },
  {
    icon: 'PaperClipOutlined',
    title: '关于我',
    path: '/about/about'
  }
];

const mock = [
  {
    path: /\/api\/login/,
    method: 'post',
    response: (option: any) => {
      const userInfo = JSON.parse(option.body);
      if (!userInfo) {
        return {
          code: 400,
          msg: '参数错误'
        };
      }
      const { username, password } = userInfo;
      if (username !== 'admin' || password !== '123456') {
        return {
          code: 400,
          msg: '用户名或密码错误'
        };
      }
      localCache.setCache('username', username);
      return {
        code: 200,
        msg: 'success',
        data: {
          userInfo: {
            username: 'admin',
            userhead: 'https://avatars.githubusercontent.com/u/56866901?v=4'
          },
          token: Mock.Random.string(32)
        }
      };
    }
  },
  {
    path: /\/api\/menulist/,
    method: 'get',
    response: () => {
      const username = localCache.getCache('username');
      if (username === 'admin') {
        return {
          code: 200,
          msg: 'success',
          data: menuData
        };
      } else {
        return {
          code: 200,
          msg: 'success',
          data: menuData.slice(1)
        };
      }
    }
  }
];

for (const i of mock) {
  Mock.mock(i.path, i.method, i.response);
}

export default Mock;
