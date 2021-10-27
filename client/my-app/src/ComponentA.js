import React, {useEffect, useState} from 'react';

const ComponentA = () => {
    const [array, setArray] = useState([])
    function getBooks() {
        console.log("entered getBooks function");
        setTimeout(async () => {
            try {
                const promise = await fetch('/a');
                const data = await promise.json();
                console.log(data);
                setArray(data.map(element => <p>{element.book_id}</p>));
            } catch(e) {
                console.log(e);
            }
        }, 6000);
    }

    useEffect(() => {
        getBooks();
    }, []);
    

    return <ul>{array}</ul>
}

export default ComponentA;