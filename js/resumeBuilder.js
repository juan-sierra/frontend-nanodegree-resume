// bio object
var bio = {
    "name": "Juan Sierra",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "571-571-5709",
        "email": "jasierra.garcia@gmail.com",
        "twitter": "jasierragarcia",
        "github": "juan-sierra",
        "location": "San Pedro Sula, Honduras"
    },
    "welcomeMessage": "Thank you for visiting!",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Gulp",
        "Linux",
        "Bash / ZSH"
    ],
    "biopic": "images/me.jpg"
}


// bio component
bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);

    // skills

    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#header").append(formattedSkills);
        console.log(skill);
    });
};

// education object
var education = {
    "schools": [{
            "name": "Strayer University",
            "location": "Washington D.C.",
            "degree": "B.S",
            "majors": ["Computer Science", "Web Application Development"],
            "dates": "January 2017 - Present",
            "url": "......"
        },
        {
            "name": "Tuscarora High School",
            "location": "Washington D.C.",
            "degree": "HSDG",
            "majors": ["General Studies"],
            "dates": "August 2010 - June 2013",
            "url": "............"
        }
    ],
    "onlineCourses": [{
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": "July 2016 - Present",
            "description": "Learn to build meaningful user experiences and build responsive websites.",
            "url": "......."
        },
        {
            "title": "Front End Development",
            "school": "freeCodeCamp",
            "dates": "July 2016 - Present",
            "description": "Learn by building projects for non-profits.",
            "url": "......."
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

    education.onlineCourses.forEach(function(course) {
        var formattedClass = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry").append(formattedClass + formattedSchool);

            var formattedDate = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry").append(formattedDate);

            var formattedDescription = HTMLonlineDescription.replace("%data%", course.description);
            $(".education-entry").append(formattedDescription);
    });
};

var work = {
    "jobs": [{
            "employer": "Milestone Powered",
            "title": "Data Center Technician",
            "location": "Washington, D.C",
            "dates": "January 2017 - Present",
            "description": "Repaire FB servers"
        },
        {
            "employer": "Chief Technologies",
            "title": "Intern Junior Engineer",
            "location": "Washington, D.C",
            "dates": "July 2013 - December 2016",
            "description": "Learn programming principles"
        },
        {
            "employer": "Trapollo",
            "title": "Technical Support Rep",
            "location": "Washington, D.C",
            "dates": "February 2016 - December 2016",
            "description": "Handle technical calls and troubleshoot"
        }
    ]
};

work.display = function () {
    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function (work) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
        $(".work-entry").append(formattedEmployer + formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.dates);
        $(".work-entry").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
        $(".work-entry").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
        $(".work-entry").append(formattedDescription);
    });
};

var projects = {
    "projects": [{
            "title": "Personal Website",
            "dates": "March 2017",
            "description": "I made this website to showcase my projects and skills",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Project coming soon....",
            "dates": "March 2017",
            "description": "Sample project coming soon!",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Project coming soon....",
            "dates": "March 2017",
            "description": "Sample project coming soon!",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
};

projects.display = function () {
    $("#projects").append(HTMLprojectStart);

    for (var i = 0; i < projects.projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry").append(formattedDescription);

        
        projects.projects[i].images.forEach(function (image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry").append(formattedImage);
    });

    }
};

$("#mapDiv").append(googleMap);

projects.display();

work.display();

education.display();

bio.display();

$(document).ready(function () {
    alert('please scroll down to see more content, thank you for visiting! \uD83D\uDE00');
});