var posts=["2024/09/23/hello-world/","2024/09/23/markdown简单操作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };