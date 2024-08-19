
import styles from './Button.module.css'

function Button(){
    const styles_ = {
            backgroundcolor: "#ad0000",
            color: "white",
            padding: "10px 20px",
            borderradius: "5px",
            border: "none",
            cursor: "pointer"
    }
    
    return (
        <button className={styles.button} >Click Me</button>
    );
    // inline css styling 
    /*
    return (
        <button style={styles_}>Click me</button>
    ); */
    // module based styling
    /* return (
        <button className={styles.button}>Click Me</button>
    );  */
    // modules enable hashing of classes that returns a unique class every time and saves from naming conflict
}

export default Button;