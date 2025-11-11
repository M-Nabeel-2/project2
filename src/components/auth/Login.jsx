import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import URLS from "../../API_EndPoint/API_URLS";
import { useState } from "react";

const initialUserData = {
  email: "",
  password: "",
};

const LoginSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const Login = () => {
  const [message, setMessage] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialUserData,
    resolver: yupResolver(LoginSchema),
  });
  const LoginSubmit = async (data) => {
    console.log(data);
    const payload = {
      email: "john@mail.com",
      password: "changeme",
    };

    let resp = await axios.post(URLS.login, payload);
    localStorage.setItem("token", resp.data.access_token);

    console.log(resp);

    if (data.email === payload.email && data.password === payload.password) {
      setMessage("Welcome To Emporium");
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
          <p>LOGIN</p>
        </div>
        <br />
        <form onSubmit={handleSubmit(LoginSubmit)}>
          <div>
            <div className="flex justify-center">
              <div>
                <label>Email</label> <br />
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
                Login
              </Button>
            </div>
            <div className="text-center mt-2 text-red-400 font-bold ">
              {message}
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};
