//Data are stored here
export class Database{
    static users = {
        1: "Reyfol James", 
        2: "Someone",
        3: "Unknown"};



    static posts = {1: [
        '{"_posterId":3,"_postId":2,"_date":"June 4","_title":"My Post","_caption":"Hi, Im unknown","_media":"","_likes":4,"_comments":[{},{},{}],"_shares":2}',
        '{"_posterId":1,"_postId":1,"_date":"June 3","_title":"3rd post","_caption":"<b>hey guyzzz.</b> My 3rd Post","_media":"/images/cool-images/cute-cat.jpg","_likes":24,"_comments":[{},{}],"_shares":3}',
        '{"_posterId":2,"_postId":2,"_date":"June 2","_title":"2nd post","_caption":"hey guyz 2nd post","_media":"","_likes":45,"_comments":[{},{}],"_shares":5}',
        '{"_posterId":1,"_postId":2,"_date":"June 1","_title":"1st post","_caption":"Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo","_media":"","_likes":45,"_comments":[{},{}],"_shares":5}'
    
    ]};

    static getUser(id){
        return this.users[id];
    }

    static getAllPost(){
        return this.posts;
    }

    static getPost(id){
        return this.posts[id];
    }
    
}