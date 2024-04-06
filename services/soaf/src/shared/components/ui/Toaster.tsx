import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@shared/components";
import { useActiveActivity, useToast } from "@shared/hooks";
import { Stack } from "@stackflow/core";

export function Toaster({ stack }: { stack: Stack }) {
  const { toasts } = useToast();
  const { isBottomTabAcitivity } = useActiveActivity(stack);

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
          zIndex: 10000,
        }}
      />
    </ToastProvider>
  );
}
