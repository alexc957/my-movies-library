import { useToast, Button, Flex, Input } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useSearchStore from '../../hooks/useSearchStore';

type Inputs = {
    search: string;
} 

export default function SearchForm() {
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const toast = useToast()
    const search = useSearchStore((state) => state.searchValue);
    const setSearch = useSearchStore((state) => state.setSearchValue);
    const navigate = useNavigate();
    useEffect(()=> {
        if(errors.search){
            toast({
                title: "you need to specified what to search",
                status:"error"
            })

        }
    }, [errors.search])
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setSearch(data.search)
        navigate("/list/search");
    }
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <Flex mx="2">
        <Input bg="white" defaultValue={search}  {...register("search",{required: true})} role="input"/>
        <Button type="submit">Search</Button>
    </Flex>
   </form>
  )
}
