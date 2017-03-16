// bio object
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

// education object
var education = { 
    "schools" : [
        {
            "name" : "Strayer University",
            "location" : "Washington D.C.",
            "degree" : "B.S",
            "majors" : ["Computer Science", "Web Application Development"],
            "dates" : "January 2017 - Present",
            "url" : "......"
        },
        {
            "name" : "Tuscarora High School",
            "location" : "Washington D.C.",
            "degree" : "HSDG",
            "majors" : ["General Studies"],
            "dates" : "August 2010 - June 2013",
            "url" : "......"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "July 2016 - Present",
            "url" : "......."
        },
        {
            "title" : "Front End Development",
            "school" : "freeCodeCamp",
            "dates" : "July 2016 - Present",
            "url" : "......."
        }
    ]
};

// education component
education.display = function () {
    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry").append(formattedSchoolName + formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry").append(formattedMajor);
    }
    $(".education-entry").append(HTMLonlineClasses);
};

education.display();

bio.display();