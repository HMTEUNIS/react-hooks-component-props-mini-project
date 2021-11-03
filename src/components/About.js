function About (props){
    const def = "https://via.placeholder.com/215"
    const another = "logo.png"
    return (
        <aside>
            <img src={props.img || def || another} alt= "blog logo" />
            <p>{props.aTxt}</p>
        </aside>
    )
   }
   
   export default About