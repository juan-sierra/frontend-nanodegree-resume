var bio = {
    "name" : "Juan Sierra",
    "role" : "Front End Developer",
    "contacts" : {
        "mobile" : "571-571-5709",
        "email" : "jasierra.garcia@gmail.com",
        "twitter" : "jasierragarcia",
        "github" : "juan-sierra",
        "location" : "San Pedro Sula, Honduras"
    },
    "welcomeMessage" : "Thank you for visiting!",
    "skills" : [
        "HTML",
        "CSS",
        "JavaScript",
        "Gulp",
        "Linux",
        "Bash / ZSH"
    ],
    "biopic" : "images/me.jpg"
}


// bio component
bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);

    // skills
    $("#header").append(HTMLskillsStart);
    for (key in bio.skills) {
        if (bio.skills.hasOwnProperty(key)) {
            console.log(bio.skills[key]);
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[key]);
            $("#header").append(formattedSkills);
        }
    }



};

bio.display();