import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from './axiosSecure';

const usePackageServices = () => {
    const { data: packages = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ["packages"],
        queryFn: async () => {
            const res = await axiosInstance.get(
                `/packages`
            );
            return res.data;
        },
    })
    return [packages,isLoading,isError,error,refetch]
};

export default usePackageServices;