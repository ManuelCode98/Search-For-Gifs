import { useState } from "react"
import { AddCategory, GifGrid } from "./components/index";


const GifExpertApp = (  )=>{

    const [ categories, setCategories ] = useState([]);
    const [ limit, setLimit ] = useState(1);

    if( categories.length === 0 && localStorage.length !== 0 ){

        const getItem = localStorage.getItem( 'categories' );
        const getLimit = parseInt( localStorage.getItem( 'limit' ) );
        const separateByComma = getItem.split(',');
        
        setCategories( separateByComma );
        setLimit(getLimit)

    }
    if( categories.length >= 1 ){
        const LocalCategories = categories;
        localStorage.setItem( 'categories', LocalCategories );
    }

    const onAddCategory = ( newCategory, inputLimit )=>{

        if( categories.includes( newCategory ) ) return;
        setCategories( [ newCategory, ...categories ] );
        setLimit( inputLimit );
    }
    
    return (
        <>
            <h1>Los Mejores Gifs</h1>
            <AddCategory 
                onNewCategory = { onAddCategory }
            />
        
            { categories.map( category => (
                
                <GifGrid category={ category } categoriesState={ categories } setCategoriesState={ setCategories } limit={limit} key={category} />

            )) }
           
        </>
    )



}

export {
    GifExpertApp
}