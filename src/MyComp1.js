import React, { useState, useEffect } from 'react'

export default function MyComp1() {
  console.log('SA from comp1')
  useEffect(() => {
    console.log('Useeffect in comp1')
  }, [])
  return (
    <div>
      Comp1
    </div>
  )
}
