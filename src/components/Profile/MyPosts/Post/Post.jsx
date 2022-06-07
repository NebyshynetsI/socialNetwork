import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src='https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg' />
            {props.message}
            <div>
                <span>like</span>
                <span> {props.likesCount}</span>
            </div>


        </div>
    )
}
export default Post;