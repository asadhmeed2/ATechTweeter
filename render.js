const postsView = $('#posts')

const Renderer = function(){

    const renderPosts = function(posts){
        postsView.empty();
        posts.forEach(function(post,idx){
            postsView.append(`<div class="post" data-id="${post.id}" >
            ${post.text}
            </div>`)

            const postElement = $(`[data-id=${post.id}]`)
            post.comments.forEach(comment=>{
                postElement.append(`<div class="comments" data-id="${comment.id}">
                <span class="delete-comment">X</span>
                <span >${comment.text}</span>
                </div>`)
            })
        })
    }

    return {
        renderPosts
    }

}
