export class User {



    private name: string;
    private password: string;
    private cc: string;
    public permission: string;

    constructor(name: string, password:string, cc:string, permission:string) {
        this.permission=permission;
        this.password=password;
        this.name=name;
        this.cc=cc;
    }


}


