import { useEffect, useState } from "react";

import { getGifs } from "../helpers/get-gifs";

const useFetchGifs = ( category, limit ) => {
  
    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    const getImages = async( category, limitValue )=>{

        setTimeout(async() => {
            const newImage = await getGifs( category, limit );
            setImages( newImage );
            setIsLoading( false );
        }, 500);    
    }

    useEffect( ()=>{
        getImages( category, limit )
    },[])

    return {
        images,
        isLoading,
    }
};

export {
    useFetchGifs
};
