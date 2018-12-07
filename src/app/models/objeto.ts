export class Objeto {



    private title: string;
    private description: string;
    private actors: string;
    private director: string;
    private price: string;
    private units_available: string;
    private reserved: Boolean;
    private image: string;
    private trailer: string;

constructor(title:string, description:string, actors:string, director:string
            , price:string, units_available:string, reserved:Boolean, image:string, trailer: string) {

        this.title=title;
        this.description=description;
        this.actors=actors;
        this.director=director;
        this.price=price;
        this.units_available=units_available;
        this.reserved=reserved;
        this.image=image;
        this.trailer=trailer;
    }
}


