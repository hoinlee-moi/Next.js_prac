import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Write(){
    let session = await getServerSession(authOptions)
    if(!session) {
        return <div>로그인해주세요</div>
    }

    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input type="text" name="title" placeholder="글제목"/>
                <input type="text" name="content" placeholder="글내용"/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}