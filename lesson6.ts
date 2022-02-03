// import {userService} from './services/user.service';
import {IShapesActions} from './interfaces/shapesActions.interface';
// const func = (str:string): null| number => {
//     return 11
// }
// func('TS')


// const user: {name?:string, age:number, status:boolean}={age:1, status:false, name:'Kesha'}

// const user: IUser={age:1, status:false, name:'Kesha'};
// const userCounter = (user: IUser):IUser => {
//     return user
// }
//
// userCounter({age:5, status: false, name: 'Vasia'})

// const userCounter2 = (user: Partial<IUser>):Partial<IUser> => {
//     return user
// }
//
// userCounter2({})

// userService().then(value => value.data).then(users => {
//     for (let user of users){
//         console.log(user.name);
//     }
// })
// class User {
//
//     constructor(private name: string, private age: number, private status: boolean) {
//
//     }
//
//     getName():string{
//         return this.name
//     }
// }
//
// const user = new User('Kokos', 22,false);
// console.log(user.getName());
// class UserChild extends User{
//
//     constructor(name: string, age: number, status: boolean) {
//         super(name, age, status);
//     }
//     getParentName():string{
//         return this.name
//     }
//
//     protected getName(): string {
//         return super.getName();
//     }
// }
// //
// const userChild = new UserChild('Vasia', 22, true);
// console.log(userChild.getParentName());


// class User {
//     constructor(private name: string, private age: number, private status: boolean) {
//     }
// }
//
// const userObj:User = {age:25, name:'Kira', status:'ddd'}
class Rectangle implements IShapesActions {
    constructor(private a: number, private b: number) {
    }

    area(): number {
        return this.a * this.b
    }

    perimeter(): number {
        return this.b + this.b
    }
}

class Triangle implements IShapesActions {
    constructor(private a: number, private b: number, private c: number) {
    }

    area(): number {
        return this.a * this.b * this.c
    }

    perimeter(): number {
        return this.a + this.b + this.c
    }
}

const shapes:IShapesActions[]= [new Rectangle(1,2), new Triangle(1,2,3), new Rectangle(1,4)]
console.log(shapes);
for (let shape of shapes) {
console.log(shape.constructor['name'], 'Area:', shape.area());
    console.log(shape.constructor['name'], 'Perimeter:', shape.perimeter());
}

// const sutke = 60*60*24
//
// import {MyEnum} from './enum'
//
// console.log(MyEnum.FRI);