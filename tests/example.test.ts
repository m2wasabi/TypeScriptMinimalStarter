/**
 * Created by m2wasabi on 2016/07/17.
 */
import * as assert from "assert";

describe("Mocha Test Suite 1", () => {
    it("Mocha Test Example A", () => {
        assert.ok(true, "This shouldn't fail");
    });

    it("Mocha Test B", () => {
        assert.ok(1 === 1, "This shouldn't fail");
        // assert.ok(false, "This should fail");
    });
});
