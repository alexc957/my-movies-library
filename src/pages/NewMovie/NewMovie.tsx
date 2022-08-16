import { Button, Checkbox, Container, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout/Layout";
import { IMovieResult, INewMovie } from "../../interfaces/movies";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from '@hookform/devtools';



const schema = yup
  .object({
    poster_path: yup.string().notRequired(),
    adult: yup.boolean().default(false),
    overview: yup
      .string()
      .min(15, "min lenght is 15")
      .max(200, "max length is 50 ")
      .required("Overview is required"),
    title: yup.string().max(25, "max length is 25").required("this field is required"),
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
    control,
    formState: { errors, isSubmitting },
  } = useForm<INewMovie>({
    resolver: yupResolver(schema),
    mode: 'onChange', // -> validation strategy
  });

  const onSubmit = (data: INewMovie) => {
    console.log("data ", data);
  };

  return (
    <Layout searchBar>
      <Container mb={"96"}>
        <h3>new movie</h3>
        <DevTool control={control} placement="top-left" />
        
        <form onSubmit={handleSubmit(onSubmit)}>

          
          <FormControl isInvalid={errors.title? true : false}>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <Input
              id='title'
              placeholder='title'
              {...register('title')}
            />
            <FormErrorMessage>
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.overview? true : false}>
            <FormLabel htmlFor='overview'>First name</FormLabel>
            <Textarea
              id='overview'
              placeholder='overview'
              {...register('overview')}
            />
            <FormErrorMessage>
              {errors.overview && errors.overview.message}
            </FormErrorMessage>
          </FormControl>
          

          <FormControl isInvalid={errors.adult? true : false}>
            <FormLabel htmlFor='adult'>adult</FormLabel>
            <Checkbox
              id='adult'
              placeholder='adult'
              {...register("adult")}
            />
            <FormErrorMessage>
              {errors.adult && errors.adult.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.poster_path? true : false}>
            <FormLabel htmlFor='poster_path'>Title</FormLabel>
            <Input
              id='poster_path'
              placeholder='poster_path'
              {...register('poster_path')}
            />
            <FormErrorMessage>
              {errors.poster_path && errors.poster_path.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.stars? true : false}>
            <FormLabel htmlFor='stars'>Num stars</FormLabel>
            <Input
              id='stars'
              placeholder='stars'
              {...register('stars')}
            />
            <FormErrorMessage>
              {errors.stars && errors.stars.message}
            </FormErrorMessage>
          </FormControl>
     
          <Button  isLoading={isSubmitting} type="submit">Create</Button>
        </form>
      </Container>
    </Layout>
  );
}
