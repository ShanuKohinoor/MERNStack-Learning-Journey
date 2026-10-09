export function login(username,password){
    if(username && password){
        console.log("User logged in");
        
    } else{
            console.log("Missing credentials");

    }
}

export function logout(){
            console.log("User logged out");

}