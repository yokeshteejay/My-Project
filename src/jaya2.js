import React, { useContext } from 'react'
import { declaration } from './jaya1'

function Second() {
    const data_1=useContext(declaration)
  return (
    <div><p>{data_1.map((v)=>(<p>{v.name}</p>))}</p>
    <h1>sivi</h1>
    </div>
  )
}

export default Second;