import CheckIcon from "@assets/icons/check-box/CheckIcon.svg";

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
    <div className="flex items-center gap-2">
      <div
        className={`${className} w-6 h-6 rounded-lg flex items-center justify-center`}
        style={{ backgroundColor: `${isChecked ? "#8CE3FF" : "#E2E3E9"}` }} // TODO: 컬러 토큰 적용
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

      <span>{label}</span>
    </div>
  );
};

export default CheckBox;
