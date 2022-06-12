interface UseMouseInteractionProps {
    mouseStateSetter: (state: boolean) => void
}

function useMouseInteraction({
    mouseStateSetter,
}: UseMouseInteractionProps): React.HTMLAttributes<HTMLElement> {
    return {
        onMouseEnter: () => mouseStateSetter(true),
        onMouseLeave: () => mouseStateSetter(false),
        onTouchStart: () => mouseStateSetter(true),
    }
}

export default useMouseInteraction