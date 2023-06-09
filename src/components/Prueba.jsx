import { useEffect } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const Prueba = () => {
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, 'Items', '1ErYO4FRBwmqjJkznM78');
        getDoc(producto).then((resultado) => {
            resultado.exists() ? console.log(resultado.data()) : console.log('No existe el documento')
        })

    }, [])
    return (
        <div>Prueba</div>
    )
}

export default Prueba