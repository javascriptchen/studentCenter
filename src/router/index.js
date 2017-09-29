//配置路由
const login = () => import('../kedooWap/login')
const ticket = () => import('../kedooWap/getTicket')
const apply = () => import('../kedooWap/apply')
const award = () => import('../kedooWap/getAward')
const ranking = () => import('../kedooWap/ranking')
const notFund = () => import('../kedooWap/404')
const mixun = () => import('../kedooWap/mixun')
const nowAward = () => import('../kedooWap/nowAward')
const address = () => import('../kedooWap/address')
const studentLogin = () => import('../studentCenter/studentLogin')
const search = () => import('../studentCenter/search')
const userCenter = () => import('../studentCenter/userCenter')
const userInfo = () => import('../studentCenter/userInfo')
const orderList = () => import('../studentCenter/orderList')
const examList = () => import('../studentCenter/examList')
const modifyEmail = () => import('../studentCenter/modifyEmail')
const viewExam = () => import('../studentCenter/viewExam')
const postAnswer = () => import('../studentCenter/postAnswer')
const sendEmailAgin = () => import('../studentCenter/sendEmailAgin')
const evaluate = () => import('../studentCenter/evaluate')
const lookAnswer = () => import('../studentCenter/lookAnswer')
const gkComment = () => import('../studentCenter/gkComment')
//5个写死的页面
// import paperAnswer from '../kedooWap/paperAnswer/paperAnswer'
// const paperAnswer = () => import('../kedooWap/paperAnswer/paperAnswer')

import paperAnswer from '../kedooWap/paperAnswer/paperAnswer'
import basic from '../kedooWap/paperAnswer/basic'
import risk from '../kedooWap/paperAnswer/risk'
import city from '../kedooWap/paperAnswer/city'
import teacher from '../kedooWap/paperAnswer/teacher'
import fast from '../kedooWap/paperAnswer/fast'
//模考大赛注册页
import register from '../h5/register/register'
import getSuccess from '../h5/getSuccess/getSuccess'
import nowStart from '../h5/nowStart/nowStart'
import explain from '../h5/explain/explain'
// const register = () => import('../h5/register/register')

import advertise from '../kedooWap/advertise'

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: login},
  {path: '/ticket', component: ticket},
  {path: '/advertise', component: advertise},
  {path: '/apply', component: apply},
  {path: '/award', component: award},
  {path: '/ranking', component: ranking},
  {path: '/nowAward', component: nowAward},
  {path: '/address', component: address},
  {path: '/mixun', component: mixun},
  {path: '/paperAnswer', component: paperAnswer},
  {path: '/paperAnswer/basic',component: basic},
  {path: '/paperAnswer/risk',component: risk},
  {path: '/paperAnswer/city',component: city},
  {path: '/paperAnswer/teacher',component: teacher},
  {path: '/paperAnswer/fast',component: fast},
  {path: '/studentLogin', component: studentLogin},
  {path: '/search', component: search},
  {path: '/userCenter', component: userCenter},
  {path: '/orderList', component: orderList},
  {path: '/userInfo', component: userInfo},
  {path: '/modifyEmail', component: modifyEmail},
  {path: '/examList', component: examList},
  {path: '/viewExam', component: viewExam},
  {path: '/postAnswer', component: postAnswer},
  {path: '/sendEmailAgin', component: sendEmailAgin},
  {path: '/evaluate', component: evaluate},
  {path: '/gkComment', component: gkComment},
  {path: '/lookAnswer', component: lookAnswer},
  {path: '/register', component: register},
  {path: '/getSuccess', component: getSuccess},
  {path: '/nowStart', component: nowStart},
  {path: '/explain', component: explain},
  {path: '*', component: notFund},
]
export default routes;