type User = {
    name: string;
}

type Admin = {
    role: string;
}

type Super = User & Admin;

let user: Super = {
    name: "Arjun",
    role: "Admin"
}
