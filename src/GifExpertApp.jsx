import { useState } from "react";
import { AddCategory, GifGrid } from "./componentes/";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        /* setCategories(cat => {
            return [...cat, 'A']
        }) */
    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {
                categories.map( category  => (
                        <GifGrid 
                        key={category} 
                        category={category}
                        />
                    )
                )
            }
        </>
    );
}