import { useEffect, useState } from "react";

// 排除0的情况，判断值非unfefined, null
export const isFalse = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: any) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalse(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 目的是延迟修改目标值value
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次在value变化后，设置一个新的定时器，
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完运行。第一次设置完的timeout被第二个清理
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
