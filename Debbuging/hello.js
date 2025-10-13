class Dinglemouse {

  constructor() {
    this.props = {};      // store values: { name: "Bob", age: 27, sex: "M" }
    this.order = [];      // track order: ["name", "age", "sex"]
  }

  setName(name) {
    if (!this.order.includes("name")) this.order.push("name");
    this.props.name = name;
    return this;
  }

  setAge(age) {
    if (!this.order.includes("age")) this.order.push("age");
    this.props.age = age;
    return this;
  }

  setSex(sex) {
    if (!this.order.includes("sex")) this.order.push("sex");
    this.props.sex = sex;
    return this;
  }

  hello() {
    let message = ["Hello."];

    for (let key of this.order) {
      if (key === "name") {
        message.push(`My name is ${this.props.name}.`);
      } else if (key === "age") {
        message.push(`I am ${this.props.age}.`);
      } else if (key === "sex") {
        message.push(`I am ${this.props.sex === "M" ? "male" : "female"}.`);
      }
    }

    return message.join(" ");
  }
}


let dm = new Dinglemouse().setName("Bob").setAge(27).setSex('M')
console.log(dm.hello())