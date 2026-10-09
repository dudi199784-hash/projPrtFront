export default async function ArticleDetail() {
    const response = await fetch("http://localhost:8090/api/v1/articles");
    const result = await response.json();
    const articles = result.data.articles;
    console.log(articles)
    return (
        <div>
            게시판 상세:
            {articles.content}
        </div>
    );
}