
function TweeterModule(){
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
