import {Post} from "/models/post/post.js";
import {Database} from "/database/database.js";

document.addEventListener("onload", displayPosts());

setNightMode(true);

// let pos = new Post(44, 123, "June 2", "1st post", "hey guyz", 24, 3);

// let com1 = new Comment(123, 222, "August 3", "hey bro", 55);
// let com2 = new Comment(123, 222, "August 4", "heeyaa", 2);
// pos.comments.push(com1);
// pos.comments.push(com2);
// localStorage.setItem("reyfol", pos.json);
// document.getElementById("jsonStorage").innerHTML = localStorage.getItem("reyfol");
// console.log(pos);

function displayPosts(){
    // areaPost is just the area where posts are displayed
    const areaPost = document.getElementById("areaPost");

    // templatePost is the template for posts. it's in index.html with <template> tag
    const templatePost = document.getElementById("template-post");

    // allPost returns a dictionary
    const allPost = Database.getAllPost();

    // iterate allPost and only get the value allPost[userId: JSON string]
    for(const [uid, arrayOfPost] of Object.entries(allPost)){
        // the values of allPost are arrayOfPost. 
        // Iterate the array (it seems that arrayOfPost is of Type Object. idk why)
        for(const postString of arrayOfPost){
            let cloneTemplatePost = templatePost.content.cloneNode(true);
            const parsedPost = JSON.parse(postString);
            const post = Object.assign(new Post(), parsedPost);

            cloneTemplatePost.querySelector(".post-poster-name").innerHTML = Database.getUser(post.posterId);
            console.log(post.uid);
            cloneTemplatePost.querySelector(".post-caption").innerHTML = post.caption;
            if(post.media != ""){     
                cloneTemplatePost.querySelector(".post-media").style.backgroundImage = `url("${post.media}")`;
                cloneTemplatePost.querySelector(".post-media").style.display = "unset";
            }
            cloneTemplatePost.querySelector(".post-like-count").innerHTML = post.likes;
            cloneTemplatePost.querySelector(".post-comment-count").innerHTML = post.comments.length;
            cloneTemplatePost.querySelector(".post-share-count").innerHTML = post.shares;
            areaPost.append(cloneTemplatePost);
        }

    }




}

function setNightMode(value){
    if(value == true){
        document.documentElement.style.setProperty("--default-background-color", "black");
        document.documentElement.style.setProperty("--default-color", "white");
        document.documentElement.style.setProperty("--default-post-background-color", "#222222");
    
        document.documentElement.style.setProperty("--default-like-logo", "url(/images/defaults/default-like-logo-white.png)");
        document.documentElement.style.setProperty("--default-comment-logo", "url(/images/defaults/default-comment-logo-white.png)");
        document.documentElement.style.setProperty("--default-share-logo", "url(/images/defaults/default-share-logo-white.png)");
    }
    else if(value == false){
        document.documentElement.style.setProperty("--default-background-color", "white");
        document.documentElement.style.setProperty("--default-color", "black");
        document.documentElement.style.setProperty("--default-post-background-color", "#EEEEEE");

        document.documentElement.style.setProperty("--default-like-logo", "url(/images/defaults/default-like-logo-black.png)");
        document.documentElement.style.setProperty("--default-comment-logo", "url(/images/defaults/default-comment-logo-black.png)");
        document.documentElement.style.setProperty("--default-share-logo", "url(/images/defaults/default-share-logo-black.png)");
    }
}













