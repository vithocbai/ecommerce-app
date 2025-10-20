
export interface PopularArticle {
    id: number,
    date: {
        day: number,
        month: string
    },
    image: string,
    category: string,
    title: string,
    author: string,
    time: string
    commentCount: number
}