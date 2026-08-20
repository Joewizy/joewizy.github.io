import { useState, useEffect } from "react";

// Types out `text` one character at a time, then leaves a blinking cursor.
export default function Typewriter({ text, speed = 90, startDelay = 350, className = "" }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let timer;
    const tick = () => {
      setShown(text.slice(0, i + 1));
      i += 1;
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {shown}
      <span className="cursor">_</span>
    </span>
  );
}
