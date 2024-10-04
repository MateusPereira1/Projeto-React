import style from './Cta.modules.css'
function Cta(props) {

    const btn ={
        color : props.cor,
        backgroundColor : props.bCor
    }
  

    return (
        <a href={props.url}>
            <button style={btn}>
                {props.text}
            </button>
        </a>
)
}

export default Cta