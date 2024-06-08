export function LoadingDots() {
  return (
    <div className="flex justify-center items-center gap-[8px]">
      <div className="w-[10px] h-[10px] bg-primary rounded-full animate-loading-dots" />
      <div
        className="w-[10px] h-[10px] bg-primary rounded-full animate-loading-dots"
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className="w-[10px] h-[10px] bg-primary rounded-full animate-loading-dots"
        style={{ animationDelay: "0.4s" }}
      />
    </div>
  );
}
