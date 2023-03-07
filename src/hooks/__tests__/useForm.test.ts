import { renderHook, act } from "@testing-library/react-hooks";

import useForm from "../useForm";

describe("useForm", () => {
  it("should initialize with empty values when no initial values are passed", () => {
    const { result } = renderHook(() => useForm());

    expect(result.current.values).toEqual({});
  });

  it("should initialize with the given initial values", () => {
    const initialValues = { name: "Peter Mayaki", age: "20" };
    const { result } = renderHook(() => useForm({ initialValues }));

    expect(result.current.values).toEqual(initialValues);
  });

  it("should update the value of a single field when handleChange is called", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Peter" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values).toEqual({ name: "Peter" });
  });

  it("should update the value of multiple fields when handleChange is called multiple times", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Peter" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: "age", value: "20" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values).toEqual({ name: "Peter", age: "20" });
  });

  it("should update the value of a single field when setFieldValue is called", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setFieldValue({ name: "Peter" });
    });

    expect(result.current.values).toEqual({ name: "Peter" });
  });

  it("should update the value of a field when setFieldValue is called", () => {
    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.setFieldValue({ age: 10 });
      result.current.setFieldValue({ name: "Peter" });
    });

    expect(result.current.values).toEqual({ age: 10, name: "Peter" });
  });
});
