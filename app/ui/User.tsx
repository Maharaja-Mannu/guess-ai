"use client";

import { useFormState } from "react-dom";
import { fetchUserDetail } from "../actions";
import { Gender, State } from "@/types/user";

const initialState: State = {
  message: "",
  data: {
    name: "",
    age: "",
    gender: Gender.male,
    nationality: "",
  },
};
export const User = () => {
  const [state, formAction] = useFormState(fetchUserDetail, initialState);

  const data = state.data;
  return (
    <>
      {data && data.name ? (
        <p>
          Hi {state.data.name}, It seems like your age is {data.age},
          indentifies as {data.gender} and you are from {data.nationality}.
        </p>
      ) : (
        ""
      )}
      <div className="w-3/4">
        <form action={formAction} className="flex">
          <input
            name="name"
            placeholder="Enter Your Name"
            className="flex-1 px-4 py-2 w-3/4 border focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white border- bg-gray-500 hover:bg-gray-700  focus:bg-gray-700"
          >
            Submit
          </button>
        </form>
        {state.message && (
          <p className="p-1 text-sm text-red-600">{state.message}</p>
        )}
      </div>
    </>
  );
};
