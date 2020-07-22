
import  { useRef, useEffect } from 'react';

export const useEffectSkipFirst  =  (effect: (void | ((first: boolean) => void | undefined)), deps?: ReadonlyArray<any>) =>{

    const isFirstRun = useRef(true);
    useEffect(()=>{
        if (isFirstRun.current) {
            isFirstRun.current = false;
            if(effect)
                effect(true);
            return;
        }
        if(effect)
            effect(false)
    },deps)

}