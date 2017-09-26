import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  Users
} from './data/user';
import {
  Exams
} from './data/user'
let _Users = Users;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    // let mock = new MockAdapter(axios);

    // // mock success request
    // mock.onGet('/success').reply(200, {
    //   msg: 'success'
    // });

    // // mock error request
    // mock.onGet('/error').reply(500, {
    //   msg: 'failure'
    // });


    // // //获取用户列表
    // mock.onGet('/api/getOrderList').reply(config => {
    //   let mockUsers = _Users.filter(user => {
    //     return true;
    //   });
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         users: mockUsers
    //       }]);
    //     }, 1000);
    //   });
    // });


    // // //点击进入不同的套餐页面
    // mock.onGet('/api/toExamList').reply(config => {
    //   let {
    //     id
    //   } = config.params;
    //   let mockUsers = _Users.filter(user => {
    //     return true;
    //   });
    //   _Users = _Users.filter(u => u.id !== id);
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '成功',
    //         users: mockUsers
    //       }]);
    //     }, 500);
    //   });
    // });

    // //获取套餐列表
    // mock.onGet('/api/getExamDetail').reply(config => {
    //   let mockUsers = Exams.filter(user => {
    //     return true;
    //   });
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         users: mockUsers
    //       }]);
    //     }, 1000);
    //   });
    // });
    // //点击进入不同的按钮页面
    // mock.onGet('/api/toExamDetail').reply(config => {
    //   let {
    //     id
    //   } = config.params;
    //   let mockUsers = _Users.filter(user => {
    //     return true;
    //   });
    //   _Users = _Users.filter(u => u.id !== id);
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '成功',
    //       }]);
    //     }, 500);
    //   });
    // });
    // //重发邮件
    // mock.onGet('/api/sendAgain').reply(config => {
    //   let {
    //     email
    //   } = config.params;
    //   let mockUsers = _Users.filter(user => {
    //     return true;
    //   });
    //   _Users = _Users.filter(u => u.email !== email);
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '重发成功',
    //       }]);
    //     }, 500);
    //   });
    // });
    // //提交评价
    // mock.onPost('/api/evaluate').reply(config => {
    //   let {star,emailContent} = JSON.parse(config.data);
    //   return new Promise((resolve, reject) => {
    //     let user = null;
    //     setTimeout(() => {
    //       if (true) {
    //         resolve([200, { status: 200, msg: '评价成功', user }]);
    //       } else {
    //         resolve([200, { status: 500, msg: '错误' }]);
    //       }
    //     }, 500);
    //   });
    // });
    // //获取验证码
    // mock.onGet('/api/getNumber').reply(config => {
    //   let {
    //     phone
    //   } = config.params;
    //   let mockUsers = _Users.filter(user => {
    //     return true;
    //   });
    //   _Users = _Users.filter(u => u.phone !== phone);
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         code: 200,
    //         msg: '重发成功',
    //       }]);
    //     }, 500);
    //   });
    // });
    //  //重设密码
    //  mock.onPost('/api/changePassWord').reply(config => {
    //   let {phone,verify,name} = JSON.parse(config.data);
    //   return new Promise((resolve, reject) => {
    //     let user = null;
    //     setTimeout(() => {
    //       if (true) {
    //         resolve([200, { status: 200, msg: '请求成功', user }]);
    //       } else {
    //         resolve([200, { status: 500, msg: '账号或密码错误' }]);
    //       }
    //     }, 500);
    //   });
    // });
    //  //重设邮箱
    //  mock.onPost('/api/changeEmail').reply(config => {
    //   let {email} = JSON.parse(config.data);
    //   return new Promise((resolve, reject) => {
    //     let user = null;
    //     setTimeout(() => {
    //       if (true) {
    //         resolve([200, { status: 200, msg: '请求成功', user }]);
    //       } else {
    //         resolve([200, { status: 500, msg: '邮箱错误' }]);
    //       }
    //     }, 500);
    //   });
    // });
    //  //登陆
    //  mock.onPost('/api/studLogin').reply(config => {
    //   let {phone,nickname} = JSON.parse(config.data);
    //   return new Promise((resolve, reject) => {
    //     let user = null;
    //     setTimeout(() => {
    //       if (true) {
    //         resolve([200, { status: 200, msg: '请求成功', user }]);
    //       } else {
    //         resolve([200, { status: 500, msg: '账号或密码错误' }]);
    //       }
    //     }, 500);
    //   });
    // });
  }
};
