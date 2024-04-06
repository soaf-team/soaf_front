import {
  TABS,
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@shared/components";
import { useToast } from "@shared/hooks";
import { Stack } from "@stackflow/core";

export function Toaster({ stack }: { stack: Stack }) {
  const { toasts } = useToast();
  const currentActivityName =
    stack.activities.find((activity) => activity.isActive)?.name || "";

  const isBottomTabAcitivity = [
    "DiaryCalendar",
    "DiaryStats",
    "SoafExplore",
    "Chat",
    "MyHome",
  ].includes(currentActivityName);

  return (
    <ToastProvider duration={2000}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1 text-center">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
          </Toast>
        );
      })}
      <ToastViewport
        style={{
          bottom: isBottomTabAcitivity ? "93px" : "10px",
        }}
      />
    </ToastProvider>
  );
}
