//const { Repository } = require('../scripts/models');
//import { Repository } from '../scripts/models';


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
        this.id = 0;
    }

    getAllActivities(){
        return this.activities
    }

    createActivity(title, description, imgUrl){
        this.id++;
        const newActivity = new Activity(this.id, title, description, imgUrl);
        console.log(newActivity);
        this.activities.push(newActivity);
    }

    deleteActivity(id){
        this.activities = this.activities.filter((activity) => activity.id !== id);
    }
}


const repo = new Repository();

const form = document.querySelector('form');
const activities = document.getElementById('activities');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imgUrl = document.getElementById('imgUrl').value;
    
    repo.createActivity(title,description,imgUrl);

    activities.innerHTML = '';

    repo.getAllActivities().forEach(activity => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
        <img src="${activity.imgUrl}" alt="${activity.title}">
        `
        activities.appendChild(card);
        clear();
        deleteActivityClickLonger(card);
    });

});

function clear(){
    title.value = "";
    description.value = "";
    imgUrl.value = "";
}

function deleteActivityClickLonger(card) {
    let timeoutId;

    card.addEventListener('mousedown', function (event) {
        timeoutId = setTimeout(() => {
            card.remove()
            if(activities.children.length === 0){
                activities.innerHTML =`<p>Sin actividades por el momento</p>`;
            }
        }, 1000);
    });

    card.addEventListener('mouseup', function (event) {
        clearTimeout(timeoutId);
    });
};


