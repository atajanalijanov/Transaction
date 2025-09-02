import { hash, compare } from 'bcryptjs';

let pas1 = "12345"
let pas2 = "12346"
const hashedPassword1 = await hash(pas1, 10);

const hashedPassword2 = await hash(pas2, 10);

const pass = await compare(pas1, hashedPassword2)

console.log(pass)

console.log(
    hashedPassword1
);
console.log(
    hashedPassword2
);
