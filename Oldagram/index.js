import posts from './data.js';

const name = document.querySelector('#name');
const username = document.querySelector('#username');
const location = document.querySelector('#location');
const avatar = document.querySelector('#avatar');
const post = document.querySelector('#post');
const comment = document.querySelector('#comment');
const likes = document.querySelector('#likes');
const like = document.querySelector('#like');

const testing = posts[0].name;
console.log(testing);
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
