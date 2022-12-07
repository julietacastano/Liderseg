import { getDocs, query, where, collection} from "firebase/firestore";
import { prodAdaptedFromFirestore } from "../../adapter/prodAdapt";
import { db } from "../firebase";

export const getProd = (categoryId) =>{
    return new Promise((resolve,reject)=>{
        const collectionRef = query(collection(db,'products'), where('category', '==', categoryId))
        getDocs(collectionRef).then(resp=>{
            const prodAdapt =  resp.docs.map(doc=>{
                return prodAdaptedFromFirestore(doc)
            })
            resolve (prodAdapt)
        }).catch((error)=>{reject(error)})
    })
}
