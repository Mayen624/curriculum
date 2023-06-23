fetch('./public/json/data.json')
.then(res => res.json())
.then((data) => {

    const relevantData = data.relevantInfo;
    const profileData = data.profile;
    const trainingData = data.training;
    const experienceData = data.experience;
    const idioms = data.idioms;
    const personalData = data.personalData;
    const proyectsData = data.proyects;

    //relvant data

    const name = document.getElementById('name');
    name.textContent = relevantData.name;

    const profession = document.getElementById('profession');
    profession.textContent = relevantData.profession;

    const email = document.getElementById('email');
    email.textContent = relevantData.email;

    const phone = document.getElementById('phone');
    phone.textContent = relevantData.phone;

    //Profile section

    const profile = document.getElementById('profile-content');
    profile.textContent = profileData.data;

    //Training section - shool

    const titleShool = document.getElementById('title-shool');
    titleShool.textContent = trainingData.shool.title;

    const dateShool = document.getElementById('shool-date');
    dateShool.textContent = trainingData.shool.date;

    const shoolContent = document.getElementById('shool-content');
    shoolContent.textContent = trainingData.shool.content;

    const shoolLocation = document.getElementById('shool-location');
    shoolLocation.textContent = trainingData.shool.location;

    //Training section - university

    const universityTitle = document.getElementById('university-title');
    universityTitle.textContent = trainingData.university.title;

    const universityDate = document.getElementById('university-date');
    universityDate.textContent = trainingData.university.date;

    const universityLocation = document.getElementById('university-location');
    universityLocation.textContent = trainingData.university.location;

    const universityContent = document.getElementById('university-content');
    universityContent.textContent = trainingData.university.content;


    //Experience - sysnettek

    const sysnetTitle = document.getElementById('sysnet-title');
    sysnetTitle.textContent = experienceData.sysnettek.title;

    const sysnetDate = document.getElementById('sysnet-date');
    sysnetDate.textContent = experienceData.sysnettek.date;

    const sysnetLocation = document.getElementById('sysnet-location');
    sysnetLocation.textContent = experienceData.sysnettek.location;

    const sysnetContent = document.getElementById('sysnet-content');
    sysnetContent.textContent = experienceData.sysnettek.content;

    //Proyects - youNotes

    const proyectName = document.getElementById('youNotes-title');
    proyectName.textContent = proyectsData.youNotes.name;

    const youNotesDescription = document.getElementById('youNotes-description');
    youNotesDescription.textContent = proyectsData.youNotes.description;

    const youNotestechs = document.getElementById('youNotes-technologies');
    youNotestechs.innerHTML = proyectsData.youNotes.technologies;

    const youNotesURL = document.getElementById('youNotes-URL');
    youNotesURL.href = proyectsData.youNotes.URL;


    //Personal data

    const birthdate = document.getElementById('birthdate');
    birthdate.textContent = personalData.birth_date;

    const place_birth = document.getElementById('place-birth');
    place_birth.textContent = personalData.place_birth;

    const gender = document.getElementById('gender');
    gender.textContent = personalData.gender;

    const nationality = document.getElementById('nationality');
    nationality.textContent = personalData.nationality;

    const civil_state = document.getElementById('civil-state');
    civil_state.textContent = personalData.civil_status;

    //Idioms

    const spanish = document.getElementById('spanish');
    spanish.textContent = idioms.spanish;

    const english = document.getElementById('english');
    english.textContent = idioms.english;
    
})
.catch(error => console.log(error));