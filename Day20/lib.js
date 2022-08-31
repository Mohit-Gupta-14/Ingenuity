export let mess= "THIS IS MODULE CONCEPT";
// let display = (name) =>
// {
//     return ` ${name} , Welcome to Ingenuity Game !`;
// }

class Employee {
    constructor(name,id,designation)
    {
        this.name1=name;
        this.id=id;
        this.des=designation
    }

    disDetails(name1){
        console.log(` Employee Name :${name1}`);
    }
}

var en=new Employee('Mohit',10,'Head');
en.disDetails();