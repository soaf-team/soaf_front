import { useMovieDetail } from "../../queries";

import { Flex } from "@soaf/react-components-layout";
import { Header, BackButton, StarRating } from "@/shared/components";

import { MovieItem } from "./MovieItem";
import { ReviewSection } from "../ReviewSection";

interface Props {
  onPrevStep: () => void;
  movieId: string;
}

export const SetMovieInfo = ({ onPrevStep, movieId }: Props) => {
  const { movieInfo } = useMovieDetail({ id: movieId });

  if (!movieInfo) return null;

  const actors = movieInfo.credits.cast
    .filter((actor) => actor.known_for_department === "Acting")
    .map((actor) => actor.name)
    .slice(0, 2)
    .join(", ");

  return (
    <>
      <Header
        leftSlot={<BackButton onClick={onPrevStep} />}
        rightSlot={
          <button type="submit" className="label2">
            저장
          </button>
        }
      >
        <h1 className="head6b">새로운 리뷰</h1>
      </Header>

      <Flex justify="center" className="pt-[58px] pb-[16px]">
        <StarRating size={40} onChange={() => {}} />
      </Flex>

      <Flex direction="column" gap={32}>
        <MovieItem type="set" movie={movieInfo} />

        <ReviewSection
          title="감상평"
          placeholder="영화를 본 후 어떤 생각이 드셨나요?"
          maxLength={2000}
        />

        <ReviewSection title="배우" data={actors} maxLength={200} />

        <ReviewSection
          title="줄거리"
          data={movieInfo.overview}
          maxLength={500}
        />
      </Flex>
    </>
  );
};
