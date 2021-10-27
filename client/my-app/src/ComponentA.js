import React, {useEffect, useState} from 'react';

const ComponentA = () => {
    const [array, setArray] = useState([])
    async function getBooks() {
        console.log("entered getBooks function");
        try {
            const promise = await fetch('/a');
            const data = await promise.json();
            console.log(data);
            setArray(data.map(element => <p>{element.book_id}</p>));
        } catch(e) {
            console.log(e);
        }



    }

    useEffect(() => {
        getBooks();
    }, []);
    

    return <ul>{array}</ul>
}

export default ComponentA;