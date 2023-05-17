import React, { useRef } from "react"

export default function useRenderCount(screenname: string) {
    let renderCount = useRef(1)
    console.log(`${screenname} renders ${renderCount.current++}`)
    return 0

}