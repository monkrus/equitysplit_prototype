import React from 'react'
import { Popover } from 'react-bootstrap'

export default function MessagePopover({id, title, placement, message}) {
    return (
      <Popover
        id={id}
        title={title}
        placement={placement}>
        {message}
      </Popover>

    )
}
