

import style from "./style.module.scss";


export default function ({children}){
    
    return(
        <div className={style.scroller}>
             <main >
                <section>section 1</section>
                <section>section 2</section>
            </main>

            <main >
                <section>section 1</section>
                <section>section 2</section>
            </main>


        </div>
    )
}