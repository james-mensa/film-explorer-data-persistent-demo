"use client"
import { useNetworkCheck } from "@/hooks/useNetworkCheck";
export default function OfflineBanner() {
  const { isOnline } = useNetworkCheck();

  return (
    <>
      {!isOnline && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p>You are currently offline. Showing cached data.</p>
        </div>
      ) }
    </>
  );
}
