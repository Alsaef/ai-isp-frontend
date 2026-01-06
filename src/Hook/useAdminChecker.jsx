import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

import axiosInstance from "./axiosSecure";
import { AuthContext } from "../provider/AuthProvider";

const useAdminChecker = () => {
  const { user, loading } = useContext(AuthContext);

  const {
    data: isAdmin,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/admin-checker?email=${user.email}`
      );
      return res.data.admin;
    },
  });

  return [isAdmin, isLoading, refetch];
};

export default useAdminChecker;
