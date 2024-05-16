// import { request } from "@/shared/apis";
// import { QUERY_KEY } from "@/shared/constants";
// import { useSuspenseQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  // const getCurrentUser = async () => {
  //   const response = await request({
  //     url: "/api/user",
  //     method: "GET",
  //   });

  //   return response.data;
  // };

  // const { data: currentUser } = useSuspenseQuery({
  //   queryKey: [QUERY_KEY.CURRENT_USER],
  //   queryFn: getCurrentUser,
  // });

  const currentUser = {
    id: "123",
    name: "홍길동",
  };

  return currentUser;
};
