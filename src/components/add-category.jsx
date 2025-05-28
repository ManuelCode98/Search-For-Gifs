import { useState } from "react";


const AddCategory = ( { onNewCategory, limitValue } ) => {

    const [ inputValue, setInputValue ] = useState('');
    const [ inputValueLimit, setInputValueLimit ] = useState(1);

    const onInputChangeLimit = ( { target } )=>{

        setInputValueLimit( target.value ) 
    }
    
    const onInputChange = ( { target } )=>{
        
        setInputValue( target.value )  
    }

    const onSubmit = ( event )=>{
        event.preventDefault()

        const removeSpaces = inputValue.trim();
        const limit = inputValueLimit;
        if( removeSpaces.length <= 1 ) return;

        onNewCategory( removeSpaces, limit )
        setInputValue( '' );
        setInputValueLimit( limit );
        localStorage.setItem( 'limit', limit );
        
    };


  return (
    <div>
        <form className="container-form" onSubmit={ onSubmit } >
            <div className="container-input-search">
                <input className="inputs" type="text" value={ inputValue } onChange={onInputChange} placeholder="Buscar Gifs..." />
            </div>
            <div className="container-limit">
                <span>Limite</span>
                <input className="inputs input-limit" type="number" value={ inputValueLimit } defaultValue={inputValue} onChange={onInputChangeLimit} min={1} max={50}  placeholder="10" />
            </div>
            <button className="button-submit" type="submit">Buscar</button>
        </form>
    </div>
  )
}

export {
    AddCategory
}
