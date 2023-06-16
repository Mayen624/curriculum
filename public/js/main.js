fetch('./public/json/data.json')
.then(res => res.json())
.then((data) => {

    const relevantData = data.relevantInfo;
    const profileData = data.profile;
    const trainingData = data.training;
    const experienceData = data.experience;
    const idioms = data.idioms;
    const personalData = data.personalData;
    const techs = data.technologies;

    //Profile section
    const profile = document.getElementById('profile-content');
    profile.textContent = profileData.data;

    //Training section

    const formation = document.getElementById('formation-content');
    formation.textContent = trainingData

    
    
})
.catch(error => console.log(error));