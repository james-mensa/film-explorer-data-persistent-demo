"use client";

import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
}

export function Skeleton({ 
  className = "", 
  isLoading = true,
  children,
  ...props 
}: SkeletonProps) {
  if (!isLoading) return <>{children}</>;

  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`}
      {...props}
    />
  );
}