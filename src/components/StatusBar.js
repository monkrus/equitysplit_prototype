import React from 'react'

export default function StatusBar({items}) {
  const bar = items.map(item => {
    return (
      <div className="col-md-3">
        {item}
      </div>
    )
  })
    return (
      <div className="row">
        {bar}
      </div>
    )
}
