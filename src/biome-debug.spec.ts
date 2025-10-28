import { readFile } from "node:fs/promises"
import test, { expect } from "playwright/test"
import { thisFunctionReturnsPromise } from "./randomModule.ts"

/** used to just see the rule works at least partially */
async function asyncFn() {
  return Promise.resolve()
}

test.describe("Dummy", () => {
  test("this is a test", async ({ page }) => {
    expect(page.locator("p")).toHaveText("foobar")
    readFile("any/path/whatever")
    asyncFn()
    thisFunctionReturnsPromise()
  })
})
