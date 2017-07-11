import React from 'react'

export default function Pannel({content, style}) {
    return (
      <div className="panel">
        <div className="panel-body">
          {content}
        </div>
      </div>
    )
}
