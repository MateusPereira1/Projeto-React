import styles from './Banner.modules.css'
import Cta from '../../cta/Cta'
function Banner(props) {
    /*const back ={
        backgroundColor : props.back,
        color:props.color
}
*/

    return (


        <section class="h1">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>

            <Cta
            text="Olá mundo"
            url="#"
            
            />



        </section>

    )
}

export default Banner