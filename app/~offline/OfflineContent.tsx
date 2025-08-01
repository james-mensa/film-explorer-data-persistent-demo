"use client"
import Image from "next/image";


export  function OfflineClient() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 text-center">
      <img src="/icons/offline.png" width="200" height="200" alt="Offline" />


      <h1 className="text-3xl font-bold text-gray-800 mb-2">You’re Offline</h1>

      <p className="text-gray-600 max-w-md mb-4">
        This page hasn&apos;t been visited before, so it&apos;s not available while you&apos;re offline.
      </p>

      <p className="text-gray-500 mb-6">
        Get back online and reload the page to make it available offline next time.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition"
      >
        Try Again
      </button>
    </main>
  );
}
