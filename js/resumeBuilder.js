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

};

bio.display();