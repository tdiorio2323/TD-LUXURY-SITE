import * as Services from "../app/services/page";
test("services has metadata", () => {
  // @ts-expect-error
  expect(Services.metadata?.title).toBeTruthy();
});
