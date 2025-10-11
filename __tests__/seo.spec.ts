import * as Home from "../app/page";
test("home has metadata", () => {
  // @ts-expect-error metadata is a typed export
  expect(Home.metadata?.title).toBeTruthy();
  // @ts-expect-error
  expect(Home.metadata?.description).toBeTruthy();
});
