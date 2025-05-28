import { useEffect, useState } from "react";
import { GifItem } from "./gif-tem";
import { useFetchGifs } from "../hooks/use-fetch-gifs";
import { deleteCategory } from "../helpers/delete-category";



const GifGrid = ( {category, categoriesState, setCategoriesState, limit }  ) => {

    const {images , isLoading } = useFetchGifs( category, limit )
   
  return (
    <>
        {
            category.length !== 0 && (
                <div className="container-title">
                    <h3>{category} </h3>
                        <div className="button-delete" onClick={ (e)=> deleteCategory(e, categoriesState, setCategoriesState) }>
                            X
                        </div>
                </div>
        )}
        {
            isLoading && <h2>Cargando...</h2>
        }
            <div className="card-grid">
        {
            images.map( gifData =>(
                <GifItem key={ gifData.id } { ...gifData } />
            ))
        }
        </div>
    </>
  )
}

export {
    GifGrid
}
