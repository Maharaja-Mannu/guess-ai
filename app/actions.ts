"use server";

import { State } from "@/types/user";

const getAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};
const getGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};
const getNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

export const fetchUserDetail = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const name = formData.get("name") as string;
  if (!name) return { ...prevState, message: "Name is required" };
  const pattern = /^[a-zA-Z ]+$/;
  if (!pattern.test(name)) {
    return { ...prevState, message: "Only Alpha Characters are allowed." };
  }

  const ageData = getAge(name);
  const genderData = getGender(name);
  const nationalityData = getNationality(name);

  const [age, gender, nationality] = await Promise.all([
    ageData,
    genderData,
    nationalityData,
  ]);
  return {
    message: "",
    data: {
      name: name,
      age: age.age,
      gender: gender.gender,
      nationality: nationality.country.length
        ? nationality.country[0].country_id
        : "",
    },
  };
};
