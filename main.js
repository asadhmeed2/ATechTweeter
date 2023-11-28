const tweeter = TweeterModule()
const renderer = Renderer()

const input = $('#input');
const posts = $('#posts');

const renderPosts = ()=>{
    renderer.renderPosts(tweeter.getPosts())
}
renderPosts();

const post = function(){
    const text = input.val();
    
    if(text === ''){
        return 
    }
    
    tweeter.addPost(text);
    renderPosts();
}

posts.on('click','.delete', function(){
    const id = $(this).closest('.post').data().id;
    tweeter.removePost(id);
    renderPosts();
})

posts.on('click','.commentBtn', function(){
    const postId = $(this).closest('.post').data().id;
    const text = $(this).closest('.post').find('.commentIpt').val();

    if(!text){
        return
    }

    tweeter.addComment(text,postId);
    renderPosts();
})

