import axios from 'axios';
import qs from 'qs';

// let base = "http://sltk.newgs.net";//正式环境
let base = "http://sltktest.newgs.net"; //测试环境
let baseUrl = '';

function transformRequest(params) {
  return qs.stringify(params);
  //return params;
}

//登录
export const login = params => {
  return axios.post(`${base}/api/studLogin`, transformRequest(params));
};
//获取商品详情页面，5种按钮
export const getDetail = params => {
  return axios.get(`${base}/api/mockProduct`, transformRequest(params));
};
//获取排名
export const getRank = params => {
  return axios.get(`${base}/api/getRank`, transformRequest(params));
};
//获取排名
export const clickGetMore = (url, params) => {
  return axios.get(url, transformRequest(params));
};
//获取优惠券
export const getTicketList = params => {
  return axios.post(`${base}/api/myCoupons`, transformRequest(params));
};
//使用优惠券
export const useTicket = params => {
  return axios.post(`${base}/api/useCoupon`, transformRequest(params));
};
//奖励列表
export const getAwardList = params => {
  return axios.post(`${base}/api/getReward`, transformRequest(params));
};
//点击领取奖励
export const getNow = params => {
  return axios.post(`${base}/api/receiveReward`, transformRequest(params));
};
//密训营购买页
export const mixunProduct = params => {
  return axios.get(`${base}/api/mxyProduct`, transformRequest(params));
};
//抽奖页面数据列表
export const getLottery = params => {
  return axios.post(`${base}/api/lotteryInfo`, transformRequest(params));
};
//点击抽奖
export const getRoll = params => {
  return axios.post(`${base}/api/roll`, transformRequest(params));
};
//提交地址
export const addUserAddress = params => {
  return axios.post(`${base}/api/addUserAddress`, transformRequest(params));
};
//获取用户是否填了地址
export const getUserRollLottery = params => {
  return axios.post(`${base}/api/getUserRollLottery`, transformRequest(params));
};
//学员中心登陆
export const studentLogin = params => {
  return axios.post(`${baseUrl}/api/studLogin`, params).then(res => res.data);
};
//修改密码
export const changePassWord = params => {
  return axios.post(`${baseUrl}/api/changePassWord`, params).then(res => res.data);
};
//获取验证码
export const getNumber = params => {
  return axios.get(`${baseUrl}/api/getNumber`, {
    params: params
  });
};
//修改邮箱
export const changeEmail = params => {
  return axios.post(`${baseUrl}/api/changeEmail`, params).then(res => res.data);
};
//获取套餐列表
export const getOrderList = params => {
  return axios.get(`${baseUrl}/api/getOrderList`, transformRequest(params));
};
//点击进入不同的套餐页面
export const toExamList = params => {
  return axios.get(`${baseUrl}/api/toExamList`, {
    params: params
  });
};
//获取套餐详情
export const getExamDetail = params => {
  return axios.get(`${baseUrl}/api/getExamDetail`, {
    params: params
  });
};
//点击进入不同的试卷页面
export const toExamDetail = params => {
  return axios.post(`${baseUrl}/api/toExamDetail`, transformRequest(params));
};
//发表评价
export const evaluate = params => {
  return axios.post(`${baseUrl}/api/evaluate`, params).then(res => res.data);
};
//重新发送邮件
export const sendAgain = params => {
  return axios.get(`${baseUrl}/api/sendAgain`, {
    params: params
  });
};
//查看试卷
export const lookPaper = params => {
  return axios.post(`${baseUrl}/api/lookPaper`, transformRequest(params));
};

//填写地址
export const wxMockActJoin = params => {
  return axios.post(`${base}/api/wxMockActJoin`, transformRequest(params));
};
//获取验证码
export const getMsgCode = params => {
  return axios.get(`${base}/api/getPhoneCode`, {
    params: params
  });
};