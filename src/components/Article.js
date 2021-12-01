function Article({ title, date = "January 1, 1970", preview, minutes }) {

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} -- {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;

// If the article takes less than 30 minutes to read:

// For every 5 minutes (rounded up to the nearest 5), display a coffee cup emoji. 
// For example, if the article takes 3 minutes to read, you should display "☕️ 3 min read". 
// If the article takes 7 minute, you should display "☕️☕️ 7 min read".

// If the article takes 30 minutes or longer to read:

// For every 10 minutes (rounded up to the nearest 10), display a bento box emoji. 
// For example, if the article takes 35 minutes to read, you should display "🍱🍱🍱🍱 35 min read". 
// If the article takes 61 minutes to read, you should display "🍱🍱🍱🍱🍱🍱🍱 61 min read".