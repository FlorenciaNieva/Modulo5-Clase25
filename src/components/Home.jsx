import { useContext } from "react"
import { ModeContext } from "../context/ModeContext"

export default function Home() {
  const { mode } = useContext(ModeContext)
  return (
    <div style={{ backgroundColor: mode === 'light' ? '#B0CBED' : '#48FF', height: "500px" }}>
      <h1>Home</h1>
    </div>
  )
}
