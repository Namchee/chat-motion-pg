import React from "react";

export default function useFocusWithin(ref: React.RefObject<unknown>) {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  function hasFocus(el: HTMLElement): boolean {
    if (!el || !document) {
      return false;
    }

    return el.contains(document.activeElement);
  }

  React.useEffect(() => {
    function focusInHandler() {
      if (!ref.current) {
        return false;
      }
      setIsFocused(hasFocus(ref.current as HTMLElement));
    }
    function focusOutHandler() {
      if (!ref.current) {
        return false;
      }

      setIsFocused(false);
    }

    document.addEventListener('focusin', focusInHandler);
    document.addEventListener('focusout', focusOutHandler)
    return () => {
      document.removeEventListener('focusin', focusInHandler, false);
      document.removeEventListener('focusout', focusOutHandler, false);
    }

  }, [ref, setIsFocused]);

  return isFocused;
}
