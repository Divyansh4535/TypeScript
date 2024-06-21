



enum Role {
    ADMIN,MANAGER,READ_ONLY_USER
}

console.log('Role', Role)

enum StatusCodes{
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log('StatusCodes', StatusCodes)
console.log('StatusCodes.Success', StatusCodes.Success)