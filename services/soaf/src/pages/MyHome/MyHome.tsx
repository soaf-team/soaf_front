import { PageLayout } from "@src/shared/components";
import CheckBox from "@src/shared/components/ui/CheckBox";

const MyHome = () => {
  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: null,
        rightSlot: "아이콘",
      }}
    >
      <div>
        MyHome
        <CheckBox isChecked label="똥" />
      </div>
    </PageLayout>
  );
};

export default MyHome;
