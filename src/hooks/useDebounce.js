import {useState, useEffect} from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    // eslint-disable-next-line
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;