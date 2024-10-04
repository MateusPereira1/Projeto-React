import { useState } from "react"

function Contagem (){

    function Contar(){
        const [num,setNumero] = useState(0)

        function incrementar(){
            setNumero(num + 1)
        }

    }

    return(
        <div>
            <h1></h1>
            <button onClick={incrementar}>Adicionar</button>
            <h1>O número é: {num}</h1>
        </div>

    )

}

export default Contagem