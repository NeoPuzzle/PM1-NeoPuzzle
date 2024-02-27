class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities = [];
    }

    getAllActivities(){
        return this.activities
    }

    createActivity(id, title, description, imgUrl){
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
        //return newActivity
    }

    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}



const repo = new Repository();

repo.createActivity(1, "prueba 1", "probando 1", "https://prueba1");
repo.createActivity(2, "prueba 2", "probando 2", "https://prueba2");
repo.createActivity(3, "prueba 3", "probando 3", "https://prueba3");
repo.createActivity(4, "prueba 4", "probando 4", "https://prueba4");

console.log(repo.getAllActivities());

repo.deleteActivity(2);

console.log(repo.getAllActivities());