import { handleSort } from "./sortUtils";

it("should sort data", () => {
  const data = [{ title: "c" }, { title: "b" }, { title: "a" }];
  const result = handleSort(data, "az");
  expect(result).toEqual([{ title: "a" }, { title: "b" }, { title: "c" }]);
});

it("should sort from Z to A", () => {
  const data = [{ title: "c" }, { title: "b" }, { title: "a" }];
  const result = handleSort(data);
  expect(result).toEqual([{ title: "c" }, { title: "b" }, { title: "a" }]);
});

it("should return empty array if invalid props provided", () => {
  expect(handleSort()).toEqual([]);
  expect(handleSort({})).toEqual([]);
  expect(handleSort(123)).toEqual([]);
  expect(handleSort("abv")).toEqual([]);
  expect(handleSort(null)).toEqual([]);
  expect(handleSort(false)).toEqual([]);
  expect(handleSort(undefined)).toEqual([]);
});
