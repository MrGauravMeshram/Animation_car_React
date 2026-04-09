import React from 'react'
import "./car.css"
import { ImageOff } from 'lucide-react'
import Road from "./road"
import Hearts from './Heart'

export default function Car() {
  return (
    <>
    <div className="background">
<Road/>
<Hearts />
    </div>
    </>
  )
}
