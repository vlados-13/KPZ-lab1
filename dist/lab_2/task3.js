"use strict";
class Authenticator {
    constructor() {
        console.log("Authenticator created");
    }
    static getInstance() {
        if (!Authenticator.instance) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    }
    authenticate(user, password) {
        console.log(`Authenticating user: ${user}`);
        return password === "secret";
    }
}
const auth1 = Authenticator.getInstance();
const auth2 = Authenticator.getInstance();
console.log(auth1 === auth2);
const isAuthenticated = auth1.authenticate("user1", "secret");
console.log(isAuthenticated ? "Authenticated!" : "Authentication failed");
const auth3 = Authenticator.getInstance();
console.log(auth1 === auth3);
