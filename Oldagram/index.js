import posts from './data.js';

// const name = document.querySelector('#name');
// const username = document.querySelector('#username');
// const location = document.querySelector('#location');
// const avatar = document.querySelector('#avatar');
// const post = document.querySelector('#post');
// const comment = document.querySelector('#comment');

// const container = document.querySelector('.container');
let body = document.querySelector('body');

posts.forEach((post) => {
  const container = document.createElement('div');

  container.classList.add('container');
  container.innerHTML = `
  <header>
  <img class="logo" src="images/logo.png">
      <img class="avatar-img" src="./images/avatar-courbet.jpg" alt=""/>
      </header>
  <section>
      <div class="userName-container">
          <img class="avatar-img" src="./images/avatar-vangogh.jpg" alt="van gogh picture" />
          <div class="userName">
          <h2 id="name">${post.name}</h2>
          <p id="location">${post.location}</p>
          </div>
      </div>
      <img id="post" class="post-pic" src="${post.post}" alt="" class="main-img" />
      <div class="info-and-button-container">
          <div class="icons">
              <button id="like-btn"><img src="./images/icon-heart.png" alt=""/></button>
              <img src="./images/icon-comment.png" alt="" />
              <img src="./images/icon-dm.png" alt="" />
          </div>
          <p id="likes" class="bold">${post.likes} likes</p>
          <p><span id='username' class="bold">${post.username} </span>${post.comment}</p>
      </div>
</div>
</section>
`;
  body.appendChild(container);
});

const likebtn = document.querySelectorAll('#like-btn');
const likes = document.querySelectorAll('#likes');

likebtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let newLikeCount = (posts[index].likes += 1);
    likes[index].textContent = `${newLikeCount} likes`;
    console.log(posts[index].likes);
  });
});

// console.log(container);
// const posts = [
//     {
//         name: "Vincent van Gogh",
//         username: "vincey1853",
//         location: "Zundert, Netherlands",
//         avatar: "images/avatar-vangogh.jpg",
//         post: "images/post-vangogh.jpg",
//         comment: "just took a few mushrooms lol",
//         likes: 21
//     },
//     {
//         name: "Gustave Courbet",
//         username: "gus1819",
//         location: "Ornans, France",
//         avatar: "images/avatar-courbet.jpg",
//         post: "images/post-courbet.jpg",
//         comment: "i'm feelin a bit stressed tbh",
//         likes: 4
//     },
//         {
//         name: "Joseph Ducreux",
//         username: "jd1735",
//         location: "Paris, France",
//         avatar: "images/avatar-ducreux.jpg",
//         post: "images/post-ducreux.jpg",
//         comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
//         likes: 152
//     }
// ]
