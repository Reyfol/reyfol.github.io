export class Comment{
    constructor(commenterId, date, comment, likes){
        this._commenterId = commenterId;
        this._date = date;
        this._comment = comment;
        this._likes = likes;

    }

    get json(){
        return JSON.stringify(this);
    }


    get commenterId(){
        return this._commenterId;
    }
    get date(){
        return this._date;
    }
    get comment(){
        return this._comment;
    }
    get likes(){
        return this._likes;
    }

}

