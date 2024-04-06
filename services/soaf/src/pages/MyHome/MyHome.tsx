import { PageLayout } from "@shared/components";
import CheckBox from "@shared/components/ui/CheckBox";

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
