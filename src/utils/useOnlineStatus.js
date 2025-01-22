import { useEffect, useState } from "react";

const useOlineStatus = () => {
  // Check if online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("Offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("Online", () => {
      setOnlineStatus(true);
    });
  }, []);
  // Boolean Value
  return onlineStatus;
};

export default useOlineStatus;
