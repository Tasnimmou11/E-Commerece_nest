import React from 'react'

const QuantityValue = () => {
     const Data = useSelector((state)=> state.counter.value)
  return (
   <h2 className="text-6xl">{countData}</h2>
  )
}

export default QuantityValue