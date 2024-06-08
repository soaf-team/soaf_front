import { useFlow } from "@/pages/stackflow";
import { OAuthButtonGroup } from "@/features/login/components";
import EmotionGroup from "@/features/login/components/EmotionGroup";
import { PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";

const Login = () => {
  const { push } = useFlow();

  const handleButtonClick = () => {
    push("Terms", {});
  };

  return (
    <PageLayout>
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={20}
        className="h-[70vh]"
      >
        <EmotionGroup />

        <Flex
          direction="column"
          className="font-bold text-[22px] text-black leading-[32px]"
        >
          <p>소프에 오신것을</p>
          <p>환영해요!</p>
        </Flex>

        <p className="text-[16px] leading-5 font-medium text-gray200">
          감정과 취향이 맞는 소울프렌드를 찾아보세요
        </p>

        <div className="fixed_bottom">
          <OAuthButtonGroup
            onKakaoClick={handleButtonClick}
            onGoogleClick={handleButtonClick}
            onNaverClick={handleButtonClick}
            onAppleClick={handleButtonClick}
          />
        </div>
      </Flex>
    </PageLayout>
  );
};

export default Login;
