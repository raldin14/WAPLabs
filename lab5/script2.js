"use strict";
function askPassword(ok, fail){
    let password = prompt("password?",'');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name : 'John',
    loginOK(){
        alert(`${this.name} logged in`);
    },
    loginFail(){
        alert(`${this.name} failed to login`);
    },
};

// askPassword(user.loginOK, user.loginFail);
askPassword(user.loginOK.bind(user), user.loginFail.bind(user));


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();