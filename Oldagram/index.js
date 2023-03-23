import posts from './data.js';

let body = document.querySelector('body');

posts.forEach((post) => {
  const container = document.createElement('div');

  container.classList.add('container');
  container.innerHTML = `
  
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
const likesTxt = document.querySelectorAll('#likes');

likebtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let newLikeCount = (posts[index].likes += 1);
    likesTxt[index].textContent = `${newLikeCount} likes`;
  });
});
