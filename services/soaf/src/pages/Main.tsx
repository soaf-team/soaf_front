import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

const Main: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "Main" }}>
      <div>My Activity</div>
    </AppScreen>
  );
};

export default Main;
