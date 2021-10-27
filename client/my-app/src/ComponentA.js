import React from 'react';

const ComponentA = () => {

    async function getBooks() {
        console.log("entered getBooks function");
        try {
            const promise = await fetch('/users');
            const data = await promise.json();
            console.log(JSON.stringify(data));
        } catch(e) {
            console.log(e);
        }

    }

    getBooks();

    return <p>I am component A</p>
}

export default ComponentA;