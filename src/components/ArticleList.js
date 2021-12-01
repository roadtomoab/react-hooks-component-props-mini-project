import Article from "./Article";

function ArticleList({ postsData }) {


    return (

        <main>
            {postsData.map((post) => {
                console.log("this should be each post: ", post)
                return(
                    <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes}
                    />
                )
            })}
        </main>

    )
}

export default ArticleList;

// If the article takes less than 30 minutes to read:

// For every 5 minutes (rounded up to the nearest 5), display a coffee cup emoji. 
// For example, if the article takes 3 minutes to read, you should display "☕️ 3 min read". 
// If the article takes 7 minute, you should display "☕️☕️ 7 min read".

// If the article takes 30 minutes or longer to read:

// For every 10 minutes (rounded up to the nearest 10), display a bento box emoji. 
// For example, if the article takes 35 minutes to read, you should display "🍱🍱🍱🍱 35 min read". 
// If the article takes 61 minutes to read, you should display "🍱🍱🍱🍱🍱🍱🍱 61 min read".
