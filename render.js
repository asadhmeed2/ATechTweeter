const postsView = $('#posts')

const Renderer = function(){

    const renderPosts = function(posts){
        postsView.empty();
        posts.forEach(function(post,idx){
            postsView.append(`<div class="post" data-id="${post.id}" id="${post.id}">
            ${post.text}
            </div>`)

            const postElement = $(`#${post.id}`)
            post.comments.forEach(comment=>{
                postElement.append(`<div class="comments" data-id="${comment.id}" id="${comment.id}">${comment.text}</div>`)
            })
        })
    }

    return {
        renderPosts
    }

}
