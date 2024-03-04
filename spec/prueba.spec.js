// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

//const {Activity, Repository} = require("../scripts/models");

//import { Activity, Repository } from "../scripts/models";


describe("La clase Activity", () =>{
  it("Debe ser una clase", () => {
    expect(typeof Activity.prototype.constructor).toBe("function");
  });
  
  it("Debe crear una instancia valida de Activity", () => {
    const activity = new Activity(1, "Actividad1", "Descripcion1", "image.png");
    expect(activity instanceof Activity).toBe(true);
    expect(activity.id).toBe(1);
    expect(activity.title).toBe("Actividad1");
    expect(activity.description).toBe("Descripcion1");
    expect(activity.imgUrl).toBe("image.png");

  });
});

describe("La clase Repository", () =>{
  it("Debe ser una clase", () => {
    expect(typeof Repository.prototype.constructor).toBe("function");
  });

  it("Debe crear una instancia valida de Repository", () => {
    const repository = new Repository();
    expect(repository instanceof Repository).toBe(true);
  });

  it("Debe agregar una actividad correctamente a la lista de actividades", () => {
    const repository = new Repository();
    repository.createActivity("Titulo", "Descripcion","image.png");
    expect(repository.activities[0].title).toBe("Titulo");
    expect(repository.activities[0].description).toBe("Descripcion");
    expect(repository.activities[0].imgUrl).toBe("image.png");
  })
});
