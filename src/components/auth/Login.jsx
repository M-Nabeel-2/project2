import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const initialUserData = {
  name: "",
  email: "",
  password: "",
};

const LoginSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaulVfalues: initialUserData,
    resolver: yupResolver(LoginSchema),
  });
  const LoginSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

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
                Login
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};
