import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(
        () => {

            const abortConst = new AbortController();
            setTimeout(() => {
                fetch(url, {signal : abortConst.signal})
                .then((res) => {
                    if(!res.ok){
                        throw Error('could not fetch the date from the source')
                    }
                    return res.json()
                })
                .then((data) =>  {setData(data); setIsPending(false); setError(null)})
                .catch((err) => {
                    if(err.name === 'AbortError'){
                        console.log("fetch aborted");
                    }else{
                        setIsPending(false)
                        setError(err.message)
                    }
                    
                });

                return () => abortConst.abort();
            }, 1000);

        },[url]
    );

    return {data, isPending, error};
}

export default useFetch;