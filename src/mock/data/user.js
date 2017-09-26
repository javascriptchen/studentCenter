import Mock from 'mockjs';
import {
  User
} from "../../model/data/customer"
import {
  Exam
} from "../../model/data/examList"

const LoginUsers = [{
  phone: '17190326885',
  nickname: '学霸17190326885',
}];

const Users = [];
const Exams = [];


for (let i = 0; i < 5; i++) {
  let u = new User();
  u.id = Mock.mock('@id')
  u.name = Mock.Random.cname();
  u.addr = Mock.mock('@county(true)');
  u.age = '20';
  u.birth = Mock.Random.date();
  u.sex = Mock.Random.integer(0, 1);
  Users.push(Mock.mock(u));
}

for (let i = 0; i < 3; i++) {
  let e = new Exam();
  e.title = Mock.mock('@title')
  e.name = Mock.Random.cname();
  e.addr = Mock.mock('@county(true)');
  e.age = Mock.mock('@id');
  e.birth = Mock.Random.date();
  e.color = Mock.mock('@hsl')
  e.sex = Mock.Random.integer(0, 5);
  e.shuzu = Mock.mock({
    name: {
      "string|1-10": "★",
      word: '@word',
    }
  })
  e.num = Mock.mock({
    // name: {
      // first: '@FIRST',
      // middle: '@FIRST',
      // last: '@LAST',
      // full: '@first @middle @last',
      // 'regexp1': /[a-z][A-Z][0-9]/,
      // 'regexp2': /\w\W\s\S\d\D/,
      "num|2-6": {
        "first": "北京市",
        "middle": "天津市",
        "last": "河北省",
        "full": "山西省",
        "regexp1": "广东省",
        "regexp2": "浙江省"
      // }
    }
  });
  Exams.push(Mock.mock(e));
}
export {
  LoginUsers,
  Users,
  Exams
};
