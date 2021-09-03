export class UserForm{
    constructor(
        public username_: string,
        public email: string,
        public password: string,
        public address:{
            city: string,
            state: string,
            postal_code: string,
        },
        public id: string,
    ){}
}