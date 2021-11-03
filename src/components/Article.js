function Article ({title, date, preview}) {

    return(
        <article>
        <div>
        <h3>{title}</h3>
        <small>{date || "January 1, 1970"}</small>
        <p>{preview}</p>
        </div>
        </article>

    )
}

export default Article