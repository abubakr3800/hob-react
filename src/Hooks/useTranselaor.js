import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function useTraselator(page){

    const lan = useSelector((state) => state.language.lan)

    const itWords = useSelector((state) => state.it[page])
    const enWords = useSelector((state) => state.en[page])
    const arWords = useSelector((state) => state.ar[page])

    const [transelatedWords,setTranselatedWords] = useState({})

    useEffect(()=>{
        if (lan === 'en') {
            setTranselatedWords(enWords);
        }
        else if (lan === 'ar') {

            setTranselatedWords(arWords);
        }
        else {
            setTranselatedWords(itWords);
        }
    },[lan])

    return([transelatedWords,lan])
}