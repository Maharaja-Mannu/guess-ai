export enum Gender {
  male = "male",
  female = "female",
}

export type UserDetail = {
  name: string;
  age: string;
  gender: Gender;
  nationality: string;
};

export type State = { message: string; data: UserDetail };
