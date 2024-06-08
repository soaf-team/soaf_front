import { Flex } from "@soaf/react-components-layout";
import KakaoIcon from "@/assets/icons/oauth/kakao.svg";
import GoogleIcon from "@/assets/icons/oauth/google.svg";
import NaverIcon from "@/assets/icons/oauth/naver.svg";
import AppleIcon from "@/assets/icons/oauth/apple.svg";

import { cn } from "@/shared/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onKakaoClick?: () => void;
  onGoogleClick?: () => void;
  onNaverClick?: () => void;
  onAppleClick?: () => void;
}

const buttonStyle =
  "inline-flex items-center justify-center whitespace-nowrap rounded-[16px] w-full h-[48px] px-0 py-[17px] text-[16px] font-bold gap-[2px] leading-5";

const iconStyle = "w-[24px] h-[24px] object-cover";

function OAuthButtonGroup({
  onKakaoClick,
  onGoogleClick,
  onNaverClick,
  onAppleClick,
}: ButtonProps) {
  return (
    <Flex direction="column" gap={8}>
      <KakakoLoginButton onClick={onKakaoClick} />
      <GoogleLoginButton onClick={onGoogleClick} />
      <NaverLoginButton onClick={onNaverClick} />
      <AppleLoginButton onClick={onAppleClick} />
    </Flex>
  );
}

function KakakoLoginButton({ onClick, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn("bg-kakao text-black", buttonStyle, className)}
      onClick={onClick}
    >
      <img src={KakaoIcon} className={iconStyle} />
      <p>카카오로 시작하기</p>
    </button>
  );
}

function GoogleLoginButton({ onClick, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-white text-black border-border border",
        buttonStyle,
        className,
      )}
      onClick={onClick}
    >
      <img src={GoogleIcon} className={iconStyle} />
      <p>구글로 시작하기</p>
    </button>
  );
}

function NaverLoginButton({ onClick, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn("bg-naver text-white", buttonStyle, className)}
      onClick={onClick}
    >
      <img src={NaverIcon} className={iconStyle} />
      <p>네이버로 시작하기</p>
    </button>
  );
}

function AppleLoginButton({ onClick, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn("bg-black text-white", buttonStyle, className)}
      onClick={onClick}
    >
      <img src={AppleIcon} className={iconStyle} />
      <p>애플로 시작하기</p>
    </button>
  );
}

export {
  OAuthButtonGroup,
  KakakoLoginButton,
  GoogleLoginButton,
  NaverLoginButton,
  AppleLoginButton,
};
