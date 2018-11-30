/****
 * 这个文件封装了微信的http请求
 */



let Config = {
  API_HOST: 'https://565a4f76-3469-4cc2-bf98-beb7b1462a3b.mock.pstmn.io',
  UPLOAD_URL: 'https://api.dayukeji.xin/p18008/api/common/file',
  STATIC_URL: 'https://api.dayukeji.xin/static/p18002'
}

class Agent {
  constructor(host, headers = {}) {
    this.host = host;
    this.headers = headers;
  }

  filterParam(params) {
    if (Array.isArray(params)) {
      return params;
    }
    return Object.keys(params).reduce((result, key) => {
      if (params[key] !== undefined) result[key] = params[key];
      return result;
    }, {});
  }

  doRequest(method, path, options = {}) {
    return new Promise((resolve) => {
      const callback = (resp) => {
        if (resp.errMsg !== 'request:ok') {
          resolve({
            status: -2,
            msg: resp.errMsg
          });
          return;
        }
        if (resp.statusCode !== 200) {
          resolve({
            status: resp.statusCode,
            msg: 'Bad Request.'
          });
          return;
        }
        resolve(resp.data);
      };

      wx.request({
        url: this.host + path,
        data: this.filterParam(options),
        method: method,
        header: this.headers,
        success: callback,
        fail: callback,
      });
    });
  };

  addHeader = (headers) => {
    this.headers = {
      ...this.headers,
      ...headers,
    };
  };

  post = (path, data) => {
    return this.doRequest('POST', path, data);
  };

  get = (path, param) => {
    return this.doRequest('GET', path, param);
  };

  put = (path, data) => {
    return this.doRequest('PUT', path, data);
  };

  delete = (path, data) => {
    return this.doRequest('DELETE', path, data);
  };
}

const agent = new Agent(
  Config.API_HOST, {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=31536000',
  }
);

// export default {
/**
 * 添加公共请求头对象
 * @param headers 请求头对象。
 */
// addHeader: agent.addHeader,
// 项目相关接口在这里列出来，如果较多，可以放到多个 js 文件中。
// login: (code) => agent.post(`/user/login`, {code}),
// ads: () =>  agent.get(`/user/advertisment`),
// microcosm: () => agent.get(`/user/microcosm`),
// mission: () => agent.post(`/user/mission`, {}),
// };

export default agent;
