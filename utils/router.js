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
    const url = `/job?type=SALARY&latitude=12.2&longitude=23.2&_page=1&_count=10&pluralism=[1,2,3]&timeType=LONG`;
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