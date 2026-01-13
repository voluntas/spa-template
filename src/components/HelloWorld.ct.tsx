import { expect, test } from "vitest";
import { render } from "vitest-browser-preact";
import HelloWorld from "./HelloWorld";

test("renders Hello World text", async () => {
  const screen = render(<HelloWorld />);

  await expect.element(screen.getByText("Hello World")).toBeVisible();
});
