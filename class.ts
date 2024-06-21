class User  {
    name:"";
    age:"";
    addUser(user){
        return `${user} is added`
    }
    removeUser(user){
        return `${user} is removed`
    }
}
const User1 =new User;
const result  = User1.addUser("peter parker")
console.log('result', result)