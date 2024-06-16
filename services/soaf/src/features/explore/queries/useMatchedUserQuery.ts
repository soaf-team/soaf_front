import { useQuery } from "@tanstack/react-query";

import { User } from "@/shared/types";

// import { axiosBase } from "@/shared/apis";

export const useMatchedUserQuery = () => {
  const fetchUser = async () => {
    // const response = await axiosBase.get("/soaf-explore");
    // return response.data;
    return [
      {
        id: 1,
        name: "나현님",
        percent: 95,
      },
      {
        id: 2,
        name: "농담곰",
        percent: 85,
      },
      {
        id: 3,
        name: "정훈",
        percent: 75,
      },
      {
        id: 4,
        name: "바보유빈",
        percent: 65,
      },
      {
        id: 5,
        name: "엉동균",
        percent: 55,
      },
      {
        id: 6,
        name: "수현",
        percent: 45,
      },
      {
        id: 7,
        name: "어진맴",
        percent: 35,
      },
      {
        id: 8,
        name: "김민수",
        percent: 25,
      },
      {
        id: 9,
        name: "최민수",
        percent: 15,
      },
      {
        id: 10,
        name: "조민수",
        percent: 5,
      },
    ] as User[];
  };

  const { data: matchedUsers = [] as User[] } = useQuery({
    queryKey: ["matchedUser"],
    queryFn: fetchUser,
  });

  return { matchedUsers };
};
