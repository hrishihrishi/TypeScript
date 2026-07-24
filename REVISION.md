### `any`
`any` : turns off type checking, dynamically rewrite any type of values and can run any methods. (any is like Trust me.)

---

### `unknown`
`unknown` : can rewrite any type of values, but cannot run any methods. (unknown is like Prove it first.)

---

### `void`
`void` : if not returning anything in a function. means it is returning void.

---

### `never`
`never` : if not returning anything (Use never when a function fundamentally breaks the control flow or loops indefinitely, meaning the caller code after it will never run.)

---

### Literal Types
literal types : (specific values, not types.)
(eg1) let purpose:"Krisna";
purpose = "Arjuna"; (Error, because it is literal type.)
(eg2) type Method =
"GET"
| "POST"
| "DELETE";

---

### Union Types
Union types:
(eg) let id: string | number;
id = 10;
id = "abc";

---

### Intersection Types
Intersection Types:
type User = {name: string}
type Admin = {role: string}
type Super = User & Admin;
let user: Super = {name: "Arjun"} => Error, because it is not having role
let user: Super = {name: "Arjun", role: "Admin"} => Correct

---

### Arrays
Arrays: (Many values)
let arr: number[] = [1,23,4,45,56,65,5] => Correct
let arr:(number|string)[] = [1, "Arjun", 2, 10] => Correct
let arr:(number|string)[] = [1, "Arjun", 2, {}] => Error

---

### Tuples
Tuples: (Fixed structure)
let arr:[number,string,boolean] = [1, "Arjun", true] => Correct
let arr:[number,string,boolean] = [1, "Arjun"] => Error
let arr:[number,string,boolean] = [1, "Arjun", true, false] => Error

---

### Functions
Functions:
function add(a: number, b: number): string {
let c:number = a + b;
return c.toString();
}

---

### Optional Parameters
Optional params:
function greet(name: string, age?: number) {}
greet("Hrishi");
greet("Hrishi", 22);

---

### Default Parameters
Default params:
function greet(name: string, city: string = "Bangalore") {}
greet("Hrishi");
greet("Hrishi", "Delhi");

---

### Generic Types
Generic types : (Dynamic types)
function getFirst<T>(arr: T[]): T {
    return arr[0];
}
getFirst<number>([1, 2, 3]);
getFirst<string>(["A", "B"]);
getFirst<boolean>([true, false]);

function pair<T, U>(first: T, second: U) {
    return [first, second];
}
pair<string, number>("Hello", 123);
pair<number, string>(123, "Hello");
pair<boolean, number>(true, 123);

---

### Objects
// Objects:
type User = {
name: string;
age: number;
email: string;
}

---

### Readonly Types
Readonly types:
type User = {
readonly id: number;
name: string;
};
user.id = 5; => error

---

### Interface
Interface:
interface User { name: string; }
interface Admin extends User { role: string;}
const admin: Admin = { name: "Hrishi", role: "Administrator" };

---

### Interface for Functions
Interface for functions:
interface Calculator {
    (a: number, b: number): number;
}
const add: Calculator = (a, b) => a + b;

---

### Interface for Classes
Interface for classes:
interface Animal {
    speak(): void;
}
class Dog implements Animal {
    speak() {
        console.log("Woof");
    }
}


