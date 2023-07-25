
import { useState } from "react";

const useFlip = (currentState = false) => {
    const [isFlipped, setIsFlipped] = useState(currentState)

    function flip() {
        setIsFlipped(isFlipped => !isFlipped)
    }

    return [isFlipped, flip]
}

export default useFlip;