import { Checkbox, Container, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { IMovieResult, INewMovie } from "../../interfaces/movies";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const fields: string[] = [];

const schema = yup
  .object({
    poster_path: yup.string().notRequired(),
    adult: yup.boolean(),
    overview: yup
      .string()
      .min(15, "min lenght is 15")
      .max(200, "max length is 50 ")
      .required("Overview is required"),
    title: yup.string().max(25, "max length is 25").required(),
    stars: yup
      .number()
      .min(0, "min num of stars is 0")
      .max(10, "max num of stars is 10")
      .notRequired(),
  })
  .required();

export default function NewMovie() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewMovie>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: INewMovie) => {
    console.log("data ", data);
  };

  return (
    <Layout searchBar>
      <Container>
        <h3>new movie</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("title")} />
          <Textarea {...register("overview")} />
          <Checkbox {...register("adult")} />
          <Input {...register("poster_path")} />
          <Input {...register("stars")} />
        </form>
      </Container>
    </Layout>
  );
}
