import { useState } from 'react'

console.log("mark")
console.log("Asaf_2")
 
const [situation, setSituation]=useState("Hungry Mark")

setSituation("Well-fed Mark")
console.log(situation)