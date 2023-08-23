import {Comment} from "./comment.js";

export class Post{
    constructor(posterId, postId, date, title, caption, media, likes, shares){
        this._posterId = posterId;
        this._postId = postId;
        this._date = date;
        this._title = title;
        this._content = caption;
        this._media = media;
        this._likes = likes;
        this._comments = new Array();
        this._shares = shares;
    }

    get json(){
        return JSON.stringify(this);
    }

    set title(title){
        this._title = title;
    }
    set caption(caption){
        this._caption = caption;
    }
    set media(media){
        this._media = media;
    }
    set likes(likes){
        this._likes = likes;
    }
    set comments(comments){
        this._comments = comments;
    }
    set shares(shares){
        this._shares = shares;
    }

    get posterId(){
        return this._posterId;
    }
    get postId(){
        return this._postId;
    }
    get date(){
        return this._date;
    }
    get title(){
        return this._title;
    }
    get caption(){
        return this._caption;
    }
    get media(){
        return this._media;
    }
    get likes(){
        return this._likes;
    }
    get comments(){
        return this._comments;
    }
    get shares(){
        return this._shares;
    }
    

}

