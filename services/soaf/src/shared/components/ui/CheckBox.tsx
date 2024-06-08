import { Flex } from "@soaf/react-components-layout";
import CheckIcon from "@assets/icons/check-box/CheckIcon.svg";
import NoneCheck from "@assets/icons/check-box/check-gray.svg";
import Checked from "@assets/icons/check-box/check-primary.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  isChecked?: boolean;
}

const CheckBox = ({
  style,
  className = "",
  label,
  isChecked = false,
  onClick,
  ...props
}: Props) => {
  return (
    <Flex direction="row" align="center" gap={8}>
      <div
        className={`${className} w-6 h-6 rounded-lg flex items-center justify-center
                    ${isChecked ? "bg-main_gradient" : "bg-gray-100"}
        `}
      >
        <button
          type="button"
          className="flex items-center"
          style={style}
          onClick={onClick}
          {...props}
        >
          <img src={CheckIcon} width={15} alt="checkbox" />
        </button>
      </div>

      {label && <span>{label}</span>}
    </Flex>
  );
};

const Check = ({ isChecked, label, onClick, className, ...props }: Props) => {
  return (
    <Flex direction="row" align="center" gap={8}>
      <button type="button" className={className} onClick={onClick} {...props}>
        <img
          src={isChecked ? Checked : NoneCheck}
          width={24}
          alt="check-icon"
        />
      </button>

      {label && <span>{label}</span>}
    </Flex>
  );
};

export { CheckBox, Check };
