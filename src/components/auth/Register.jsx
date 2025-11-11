import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const initialUserData = {
  name: "",
  email: "",
  password: "",
};

const RegisterSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const Register = () => {
  const [message, setMessage] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialUserData,
    resolver: yupResolver(RegisterSchema),
  });

  const RegisterSubmit = (data) => {
    const payload = {
      name: "john",
      email: "john@mail.com",
      password: "changeme",
    };

    if (
      data.name === payload.name &&
      data.email === payload.email &&
      data.password === payload.password
    ) {
      setMessage("Thanks For Registration");
      reset(initialUserData);
    } else {
      setMessage("Fill The Fields Correctly");
    }
  };

  return (
    <>
      <Card
        sx={{
          mt: 10,
          width: 500,
          height: 520,
          justifySelf: "center",
          alignContent: "center",
          boxShadow: "#000000ff",
          border: 2,
        }}
      >
        <div className="flex justify-center  text-3xl font-black mt-10">
          <p>Register</p>
        </div>
        <br />
        <form onSubmit={handleSubmit(RegisterSubmit)}>
          <div>
            <div className="flex justify-center">
              <div>
                <label>Name</label> <br />
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <TextField {...field} />}
                />
                <p className="text-red-500 italic">{errors?.name?.message}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <label>Email </label> <br />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <TextField {...field} />}
                />
                <p className="text-red-500 italic">{errors?.email?.message}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <label>Password</label> <br />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => <TextField {...field} />}
                />
                <p className="text-red-500 italic">
                  {errors?.password?.message}
                </p>
              </div>
            </div>
            <div className="text-center mt-4 shrink-0">
              <Button type="submit" sx={{ border: 2, color: "#000" }}>
                Register
              </Button>
            </div>
            <div className="text-center mt-2 text-green-400 font-bold">
              {message}
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};
