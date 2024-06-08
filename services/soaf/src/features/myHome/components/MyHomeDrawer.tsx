import {
  PlusButton,
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "@/shared/components";

interface Props {
  component: React.ReactNode;
}

export function MyHomeDrawer({ component }: Props) {
  return (
    <Drawer>
      <DrawerTrigger>
        <PlusButton />
      </DrawerTrigger>
      <DrawerContent className="overflow-auto min-h-[92%] max-h-[92%] after:content-none">
        <div>{component}</div>
      </DrawerContent>
    </Drawer>
  );
}
