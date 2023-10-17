/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */
import React, { useEffect, useRef } from "react";
import { StyledInput } from './FocusableInput.styles'
 
/* function Input(props) {
  return <input {...props} />;
} */

const TextInput = React.forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export function FocusableInput({ focusable = false }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (focusable && inputRef.current) {
      inputRef.current.focus();
    } else if (!focusable && inputRef.current) {
      inputRef.current.blur();
    }
  }, [focusable]);

  return <TextInput ref={inputRef} />;
}
