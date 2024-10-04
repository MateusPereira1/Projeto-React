import styles from './Banner2.modules.css'
import Cta from '../../cta/Cta'
function Banner2(props){

   
    return(

        <section class="h2" >
        <div class="p-1">
            <h1>Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore cumque ex similique, obcaecati blanditiis inventore rem ipsam ullam voluptatem.</p>


           


        </div>
     

       <div class="p-2">

       </div>
        <Cta
        text="Olá mundo 2"
        url="#"
        cor = "#FFF"
        bCor = "#000"
        
        />
        </section>
    )



}

export default Banner2