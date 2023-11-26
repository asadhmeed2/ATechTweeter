// function CommentsModule(){
//     let _comments=[]
    
//     function addCommentOnTwit(comment){ //{comment:string , twitId:string, id:string}
//         _comments.push(comment)
//     }
// }

function Tweeter(){
    let _posts =[
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let _postIdCounter = 0;
    let _commentIdCounter  = 0;


    function getPosts(){
        return _posts
    }

    function addPost(text){
        const id = `p${_postIdCounter}`
        _posts.push({text,id,comments:[]})
        _postIdCounter++;
    }

    function removePost(postID){
       _posts = _posts.filter(post => post.id !== postID)
    }

    function addComment(text,postID){// {text:string , postID:string}
       
       _posts = _posts.map(post =>{
         if(postID === post.id){
            const newPost = {...post,comments:[...post.comments,{id:`c${_commentIdCounter}`,text}]};
            return newPost;
         }
         return post;
       })
       _commentIdCounter++;
    }

    function removeComment(commentID,postID){// {commentID:string , postID:string}

       _posts = _posts.map(post =>{
         if(postID === post.id){
            const newPost = {...post,comments:[...post.comments.filter(comment => comment.id !== commentID)]};
            return newPost;
         }
         return post;
       })
    }





    return  {
        addPost,
        getPosts,
        removePost,
        addComment,
        removeComment
    }
    
}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p2")
tweeter.addComment("Second the best!", "p0")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}