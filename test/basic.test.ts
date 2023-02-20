import {
  expectModuleToBeCalledWith,
  setupTest,
  getNuxt,
} from "@nuxt/test-utils";

describe("Value tests", () => {
  setupTest({
  });
  test("should inject plugin", () => {
    expectModuleToBeCalledWith("addPlugin", {
      src: expect.stringContaining("runtime/plugin"),
      fileName: "plugin.ts",
      options: getNuxt().options.snackStack,
    });
  });
});
