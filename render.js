

const Renderer = function(){
    const postsView = $('#posts');
    
    const renderPosts = function(posts){
        postsView.empty();
        posts.forEach(function(post,idx){
            postsView.append(`<div class="post" data-id="${post.id}" >
                ${post.text}
                <div class="comments"></div>
            </div>`)
            
            const postElement = $(`[data-id=${post.id}]`)
            const comments = postElement.find('.comments')

            post.comments.forEach(comment=>{
                comments.append(`<div class="comment" data-id="${comment.id}">
                    <span class="delete-comment">X</span>
                    <span >${comment.text}</span>
                </div>`)
            })

            postElement.append(`<div>
                <input type="text" placeholder="Got Something to say?" class="commentIpt"/> 
                <button class="commentBtn">Comment</button>
            </div>`)
            postElement.append(`<div class="delete">delete</div>`)



        })
    }

    return {
        renderPosts
    }

}
