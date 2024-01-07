import { useContext } from "react"
import { ModeContext } from "../context/ModeContext"

export default function Header() {
  const { changeMode, mode } = useContext(ModeContext)
  return (
    <div style={{ backgroundColor: mode === 'light' ? '#B0CBED' : '#48FF', padding: "20px", display: "flex", justifyContent: "space-evenly" }}>
      <h1>Header</h1>
      <button onClick={changeMode}>Mode {mode}</button>
    </div>
  )
}
