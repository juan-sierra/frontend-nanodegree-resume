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
    $("#header").append(formattedName);
    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedGithub);
    $("#header").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



};

bio.display();