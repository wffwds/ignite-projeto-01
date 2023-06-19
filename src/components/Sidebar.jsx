import { PencilLine } from "phosphor-react";

import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" 
            />
            <div className={styles.profile}>

                <Avatar src="http://github.com/wffwds.png" />
                <strong>Wellington dos Santos Silva</strong>
                <span>Web Developer</span>
            </div>


            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}