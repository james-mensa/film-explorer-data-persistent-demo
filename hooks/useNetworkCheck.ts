import { useEffect, useRef, useState, useCallback } from 'react';

const TEST_URL =  '/api/ping';

export function useNetworkCheck(pingInterval = 10000) {
  const [isOnline, setIsOnline] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);

  const checkOnlineStatus = useCallback(async () => {
    if (isChecking) return;

    setIsChecking(true);
    const controller = new AbortController();
    controllerRef.current = controller;

    const timeout = setTimeout(() => controller.abort(), 3000);

    try {
      const response = await fetch(TEST_URL, {
        method: 'HEAD',
        cache: 'no-store',
        signal: controller.signal,
      });
      setIsOnline(response.ok);
    } catch (error) {

      setIsOnline(false);
    } finally {
      clearTimeout(timeout);
      setIsChecking(false);
      controllerRef.current = null;
    }
  }, []);

  useEffect(() => {
    checkOnlineStatus();

    const interval = setInterval(checkOnlineStatus, pingInterval);

    const handleOnline = () => checkOnlineStatus();
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      controllerRef.current?.abort();
    };
  }, [checkOnlineStatus, pingInterval]);

  return { isOnline, isChecking };
}
