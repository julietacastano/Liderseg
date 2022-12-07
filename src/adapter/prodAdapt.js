export const prodAdaptedFromFirestore = (doc) =>{
    const data = doc.data()

    const prodAdapted = {
        id:doc.id,
        name: data.name,
        category: data.category,
        description:data.description
    }

    return prodAdapted
}