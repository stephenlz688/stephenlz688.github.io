var posts=["2024/09/23/markdown简单操作/","2024/09/25/静态成员小练习1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };