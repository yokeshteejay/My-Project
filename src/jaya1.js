import React, { createContext, useState } from 'react'
import Second from './jaya2'
const declaration = createContext()

function First() {
    const [data, setdata] = useState([
        { id: 1, name: "buji" },
        { id: 2, name: "rajesh" },
        { id: 3, name: "jshree" }])

    return (
        <div>
            wellcome back!!!


            <declaration.Provider value={data}>
                <Second />
            </declaration.Provider>


        </div>
    )
}

export { First, declaration }