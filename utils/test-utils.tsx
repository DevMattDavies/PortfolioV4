// test-utils.tsx
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import React from "react";

const render = (ui: React.ReactElement, options?: any) =>
  rtlRender(ui, { wrapper: ThemeProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
