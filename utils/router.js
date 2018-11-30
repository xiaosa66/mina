/***
 * 和路由一起搭配使用完成http请求
 */

import agent from 'agent';
/**
 * 工作类
 */
export default class Address {

  /**
   * 返回首页兼职列表
   */
  static getLobList() {
    const url = `/job`;
    return agent.get(url);
  }

  /**
   * 立即投递兼职
   */
  static seek(postData) {
    const url = `/seek`;
    return agent.post(url, postData);
  }
}