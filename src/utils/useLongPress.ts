import { useCallback, useRef } from "react";

const LONG_PRESS_DELAY = 500;

export default function useLongPress<T>(onLongPress: (item: T) => void) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const bind = useCallback(
    (item: T, enabled: boolean) => {
      if (!enabled) return {};
      return {
        onPointerDown: () => {
          clear();
          timerRef.current = setTimeout(() => onLongPress(item), LONG_PRESS_DELAY);
        },
        onPointerUp: clear,
        onPointerLeave: clear,
        onPointerCancel: clear,
      };
    },
    [clear, onLongPress],
  );

  return bind;
}
