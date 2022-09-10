const storeItem = <T>(key: string, value: T) => {
  if (typeof window == 'undefined') {
    console.warn(`Tried setting localStorage key “${key}”`);
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error storing localStorage key “${key}”:`, error);
  }
};

const getItem = <T>(key: string, initialValue?: T): T | undefined => {
  if (typeof window === 'undefined') {
    return initialValue;
  }
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  } catch (error) {
    console.warn(`Error reading localStorage key “${key}”:`, error);
    return initialValue;
  }
};

const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

export const localStorageHelper = {
  storeItem,
  getItem,
  removeItem,
};
