import { useQuery } from "@tanstack/react-query";

import { User } from "@/shared/types";

import { axiosBase } from "@/shared/apis";

export const useMatchedUserQuery = () => {
  const fetchUser = async () => {
    const response = await axiosBase.get("/soaf-explore");
    return response.data;
  };

  const { data: matchedUsers = [] as User[] } = useQuery({
    queryKey: ["matchedUser"],
    queryFn: fetchUser,
  });

  return { matchedUsers };
};
