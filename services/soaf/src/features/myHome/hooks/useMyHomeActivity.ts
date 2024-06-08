export const useMyHomeActivity = () => {
  const isMyHome = [
    "/my-home/music/",
    "/my-home/movie/",
    "/my-home/books/",
    "/my-home/youtube/",
  ].includes(window.location.pathname);

  return {
    isMyHome,
  };
};
