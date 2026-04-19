// src/hooks/useTheme.js (opcional pero pro)
import { useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(false);

  const toggle = () => setDark(!dark);

  return { dark, toggle };
}