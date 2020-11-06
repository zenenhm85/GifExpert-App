import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Tests in useFetchGifs", () => {
  test("should return the start state", async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Batman"));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return an Array of img and loading equal false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Batman"));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    
    expect(data.length).toBe(3);
    expect(loading).toBe(false);
  })
  
});
