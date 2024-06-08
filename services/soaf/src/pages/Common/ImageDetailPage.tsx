/* eslint-disable react/prop-types */

import { PageLayout, XButton } from "@/shared/components";
import { ActivityComponentType } from "@stackflow/react";

type ImageDetailPageParams = {
  src: string;
  alt: string;
};

const BASE_URL = "https://i.namu.wiki/i/";

const ImageDetailPage: ActivityComponentType<ImageDetailPageParams> = ({
  params,
}) => {
  const { src, alt } = params;

  return (
    <PageLayout
      header={{
        rightSlot: <XButton />,
      }}
      className="px-0 flex felx-col items-center pb-[56px]"
    >
      <img src={`${BASE_URL}${src}.webp`} alt={alt} className="w-full" />
    </PageLayout>
  );
};

export default ImageDetailPage;
