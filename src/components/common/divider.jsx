import React from 'react'

function Divider({Content="or"}) {
  return (
    <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-zinc-200"></div>
    <span class="flex-shrink mx-4 text-zinc-400">{Content}</span>
    <div class="flex-grow border-t border-zinc-200"></div>
</div>
  )
}

export default Divider