// 路由类型
export interface IRoutes {
  icon: string;
  title: string;
  path: string;
  children?: IRoutes[];
}
