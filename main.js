const tweeter = TweeterModule()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())