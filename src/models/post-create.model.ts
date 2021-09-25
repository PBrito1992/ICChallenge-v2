export class PostCreate{
    comment: string;
    userName: string; 
    userProfileImgUrl: string; 
    validated: boolean;

    constructor(
        comment?: string, 
        userName?: string, 
        userProfileImgUrl?: string, 
        validated?: boolean){
            this.comment = comment || '';
            this.userName = userName || '';
            this.userProfileImgUrl = userProfileImgUrl || '';
            this.validated = validated || false;
        }

}