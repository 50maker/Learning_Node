// export default interface IUser {
//   id: string;
//   name: string;
//   age: number;
// }

type User = {
  id: string;
  name: string;
  age: number;
};

const logUser = (user: User): number => {
  console.log(user.name);
  return user.age;
};

const user: User = { id: "", age: 20, name: "Texas" };
