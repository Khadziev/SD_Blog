import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeaver: () => void
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeaver = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => [isHover, { onMouseEnter, onMouseLeaver }], [isHover, onMouseEnter, onMouseLeaver]);
};
