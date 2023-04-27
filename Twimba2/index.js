import tweetsDataRaw from './data.js';

let tweetsData = [...tweetsDataRaw];

const twitterFeed = document.querySelector('.feed');
const tweetBtn = document.querySelector('#tweet-btn');
const userTweet = document.querySelector('#user-tweet');

function renderTweets(tweetsData) {
  twitterFeed.innerHTML = '';
  tweetsData.forEach((item) => {
    let tweet = document.createElement('div');
    tweet.classList.add('tweet');

    tweet.innerHTML = `<div class="tweet-inner"><img class="profile-pic" src="./${item.profilePic}" alt="">
    <div>
      <p class="handle">${item.handle}</p>
      <p class="tweet-text">${item.tweetText}</p>
      <div class="tweet-details">
        <span class="tweet-detail" id="replies">replies</span>
        <span class="tweet-detail" id="likes">❤${item.likes}</span>
        <span class="tweet-detail" id="retweet">retweets ${item.retweets}</span>
      </div>
    </div>
  </div>`;

    twitterFeed.appendChild(tweet);
  });
  //   const likes = document.querySelectorAll('#likes');

  //   const reTweet = document.querySelector('#retweet');

  //   likes.forEach((like, index) => {
  //     like.addEventListener('click', () => {
  //       let isLiked = tweetsData[index].isLiked;
  //       console.log(isLiked);

  //       console.log(index);
  //       isLiked = !isLiked;
  //       console.log(isLiked);
  //       //   isLiked = !isLiked;

  //       if (isLiked === true) {
  //         tweetsData[index].likes += 1;
  //         likes[index].textContent = '❤' + tweetsData[index].likes;
  //       } else if (isLiked === false) {
  //         tweetsData[index].likes -= 1;
  //         likes[index].textContent = '❤' + tweetsData[index].likes;
  //       }
  //     });
  // });
  const replies = document.querySelectorAll('#replies');
  const tweet = document.querySelectorAll('#tweet');

  replies.forEach((reply, index) => {
    reply.addEventListener('click', () => {
      if (tweetsData[index].replies.length === 0) {
        console.log('no replies');
      } else {
        tweetsData[index].replies.forEach((item) => {
          const replyMessages = document.createElement('div');
          replyMessages.innerHTML = `<p>${tweetsData.replies.handle}</p>`;
          tweet[index].append(replyMessages);
        });
      }
      console.log(tweetsData[index].replies);
    });
    // if(replies[index] !== null)
  });
}

renderTweets(tweetsData);
console.log(twitterFeed);

tweetBtn.addEventListener('click', addTweet);

function addTweet() {
  if (userTweet.value === '') {
    alert('add some text mofo');
  } else {
    let newTweetObj = {
      handle: `@Scrimba`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: userTweet.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: Math.floor(Math.random() * (100000000000 - 1000000 + 1) + 1000000),
    };
    tweetsData = [newTweetObj, ...tweetsData];
    userTweet.value = '';
    console.log(tweetsData);
    renderTweets(tweetsData);
  }
}
