// "use strict";

let str = "Greetings, ";
let user = {
    firstName: "John",
    lastname: "Smith",
    display: function () {
        console.log(str, this.firstName);
        show("hi");
    }
};
user.display();
function show(msg) {
    console.log(msg + " " + this.lastname);
}
show.call(user, "hello");

/**
 *  1. Global EC creation:
    outer: null, this: windows, LE:[{show:fn }], TDZ{str,user}
    2.Global EC execution:
    outer: null, this: windows, LE:[{show:fn,str:"Greetings, ",user:obj,call user.display() }], TDZ{}
    3.display FEC creation:
    outer: user, this: windows, LE:[{argunments:{}}], TDZ{}
    4.display FEC execution:
    outer: user, this: windows, LE:[{argunments:{},output[Greetings, John],call show() }], TDZ{}
    5.show FEC creation:
    outer: global, this: windows, LE:[{argunments:{msg:"hi"}}], TDZ{}
    6.display FEC execution:
    outer: user, this: windows, LE:[{argunments:{msg:"hi"}, output[hi undefined] }], TDZ{}
    7.show FEC creation:
    outer: global, this: user, LE:[{argunments:{msg:"hello"}}], TDZ{}
    8.display FEC execution:
    outer: user, this: user, LE:[{argunments:{msg:"hello"}, output[hello smith] }], TDZ{}
 */