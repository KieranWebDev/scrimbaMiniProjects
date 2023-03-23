import posts from './data.js';

const name = document.querySelector('#name');
const username = document.querySelector('#username');
const location = document.querySelector('#location');
const avatar = document.querySelector('#avatar');
const post = document.querySelector('#post');
const comment = document.querySelector('#comment');
const likes = document.querySelector('#likes');
// const container = document.querySelector('.container');
let body = document.querySelector('body');

const testing = posts[0].name;
console.log(testing);

posts.forEach((post) => {
  const likebtn = document.createElement('button');
  likebtn.setAttribute('id', 'like-btn');
  likebtn.addEventListener('click', () => {
    post.likes += 1;
    console.log(likes);
  });
  console.log(likebtn);
  renderList(post);
});

function renderList(post) {
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
}
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
