


const deleteCategory = ( {target}, categoriesState, setCategoriesState  )=>{

    //Obtener el hermano anterio para saber que vamos a borrar del localStorage
    const getTitle = target.previousElementSibling.innerText;

    const gifRemove = categoriesState;
    const index = categoriesState.indexOf( getTitle );
    gifRemove.splice( index, 1 );
    

    if( gifRemove.length === 0 && index === 0 ){

        localStorage.setItem( 'categories', [] );
        setCategoriesState( [] );
        return
    }
    if( gifRemove.length >= 1 ) {
        localStorage.setItem( 'categories', gifRemove );
        setCategoriesState( [...gifRemove] );
        return
    }

};

export {
    deleteCategory
};