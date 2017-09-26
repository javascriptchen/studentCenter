import {User} from "../model/data/customer"
import {Exam} from '../model/data/examList'

function adapterUser(user) {
  let m = new User();
  m.id = user.my_id;
  m.name = user.my_name;
  m.addr = user.my_addr;
  m.age = user.my_age;
  m.sex = user.my_sex;
  m.birth = user.my_birth;
  return m;
}

function adapterUsers(users) {
  let Users = [];
  users.forEach(function (user) {
    let m = adapterUser(user);
    Users.push(m);
  });
  return Users;
}

function adapterExam(user) {
  let s = new Exam();
  s.title = user.my_title;
  s.name = user.my_name;
  s.addr = user.my_addr;
  s.age = user.my_age;
  s.birth = user.my_birth;
  s.sex = user.my_sex;
  s.color = user.my_color;
  s.shuzu = user.my_shuzu;
  s.num = user.my_num;
  return s;
}

function adapterExams(users) {
  let Exams = [];
  users.forEach(function (user) {
    let s = adapterExam(user);
    Exams.push(s);
  });
  return Exams;
}

export {
  adapterUsers,
  adapterExams,
};
