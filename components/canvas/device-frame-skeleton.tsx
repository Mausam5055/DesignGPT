import React, { CSSProperties } from "react";
import { Skeleton } from "../ui/skeleton";

type PropsType = {
  style: CSSProperties;
};
const DeviceFrameSkeleton = ({ style }: PropsType) => {
  return (
    <div
      className="absolute origin-center overflow-hidden shadow-sm ring"
      style={{
        background: "#fff",
        ...style,
      }}
    >
      <div className="flex items-center gap-2 p-3 border-b">
        <Skeleton className="h-5 w-5 rounded-md" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="p-4 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />

        <Skeleton className="h-48 w-full rounded-xl" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default DeviceFrameSkeleton;
