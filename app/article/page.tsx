'use client'
import { useEffect, useState } from "react";
import Link from "next/link"

export default function Article() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles()
    },[])

    const fetchArticles = () => {
        fetch ("http://localhost:8090/api/v1/articles")
        .then(result =>result.json())
        .then(result => setArticles(result.data.articles));
    }
    return (
        <div>
            <ArticleForm fetchArticles={fetchArticles}/>
            <h4>번호 / 제목 / 생성일</h4>
            {articles.length == 0 ? (
                <p>현재 게시물이 없습니다.</p>
            ) : (
            <ul>
            {articles.map(article => 
                <li key={article.id}>{article.id} / <Link href={`/article/${article.id}`}> {article.title}</Link> / {article.createdDate}</li>
            )}
            </ul>
            )}
        </div>
    );
}

function ArticleForm({fetchArticles}){
    const [article, setArticle ] = useState({title:'',content:''})
    const handleChange = (e) => {
        const {name, value} = e.target;
        setArticle({...article,[name]:value})
        console.log({...article,[name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8090/api/v1/articles",{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(article)
        })
        if(response.ok){
            alert('success')
            fetchArticles()
        }else{
            alert('fail')
        }
    }
    return (
        <>
            <h4>게시물 작성</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    제목 : 
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <br/>
                <label>
                    내용 : 
                    <input type="text" name="content" onChange={handleChange} />
                </label>
                <button type="submit">등록</button>
            </form>
        </>
    );
}