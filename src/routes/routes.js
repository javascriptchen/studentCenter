import login from '../pages/login'
import search from '../pages/search'
import test from '../pages/test'
import userCenter from '../pages/userCenter'
import myData from '../pages/myData'
import studyCenter from '../pages/studyCenter'
import email from '../pages/email'
import detail from '../pages/detail'
import lookPaper from '../pages/lookPaper'
import submit from '../pages/submit'

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: login},
  {path: '/search', component: search},
  {path: '/test', component: test},
  {path: '/userCenter', component: userCenter},
  {path: '/studyCenter', component: studyCenter},
  {path: '/myData', component: myData},
  {path: '/email', component: email},
  {path: '/detail', component: detail},
  {path: '/lookPaper', component: lookPaper},
  {path: '/submit', component: submit},
]
export default routes;
