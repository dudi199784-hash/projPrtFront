import { Suspense } from "react";
import ArticleDetail from "./ArticleDetail";

export default function Page() {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <ArticleDetail />
        </Suspense>
    );
}