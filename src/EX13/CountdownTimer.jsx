import { useEffect, useState } from "react";

export default function CountdownTimer({ initialValue = 10 }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);
  useEffect(() => {
    setTimeRemaining(initialValue);
  }, [initialValue]);
  useEffect(() => {
    if (timeRemaining <= 0) return;
    const timerId = setTimeout(() => setTimeRemaining((t) => Math.max(0, t - 1)), 1000);
    return () => clearTimeout(timerId);
  }, [timeRemaining]);
  return <section className="exercise"><h2>2. Countdown Timer</h2><p>Time Remaining: {timeRemaining}</p></section>;
}
