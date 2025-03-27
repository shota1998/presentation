import { describe, it, expect } from "vitest";
import { sum } from "../app";

describe("sum function", () => {
  it("should add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
