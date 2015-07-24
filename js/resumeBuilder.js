var name = "Clark Groce";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Director Quality Engineering";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": "Clark Groce",
	"role": "Director of Quality Engineering",
	"contacts": {
		"mobile": "470-363-8446",
		"email": "clarkgroce@comcast.net",
		"location": "Atlanta"
	},
	"welcomeMessage" : "Welcome to my resume, my name is Clark Groce and I am awesome!",
	"skills": [
		"awesomeness", "programming", "teaching", "JS", "QE extraordinaire"
	],
	"bioPic": "images/testimage.png"
};

var picture = HTMLbioPic.replace('%data%', bio.bioPic);
var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var cell = HTMLmobile.replace('%data%', bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var from = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(cell);
$("#header").append(email);
$("#header").append(from);
$("#header").append(message);
$("#header").append(picture);
$('#header').append(HTMLskillsStart);
for (var index = 0; index < bio.skills.length; index++) {
    $('#skills').append(HTMLskills.replace('%data%', bio.skills[index]));
};


var work = {};
work.position1;
work.employer = "salesforce.com";
work.title = "Director Quality Engineering";
work.city = "Atlanta, Georgia";
work.years = "04/2015 - Present";
work.description = "Responsible for establishing SQA Department and testing processes, along with building and managing a high performing team of QA engineers. Develop, implement and manage strategic test programs to increase efficiency; such as test automation across enterprise level architecture, including application, middleware and data layers for web and mobile.  Responsible for strategic SQA tooling decisions, implementation and build out.  Manage all planning, design and execution of SQA work for complex highly configurable SaaS environment.";

var job1 = HTMLworkStart.replace("%work-entry%", work.position1);
var employer = HTMLworkEmployer.replace("%data%", work.employer);
var title = HTMLworkTitle.replace("%data%", work.title);
var city = HTMLworkLocation.replace("%data%", work.city);
var dates = HTMLworkDates.replace("%data%", work.years);
var description = HTMLworkDescription.replace("%data%", work.description);


$("#workExperience").append(job1);
$("#workExperience").append(employer);
$("#workExperience").append(title);
$("#workExperience").append(city);
$("#workExperience").append(dates);
$("#workExperience").append(description);


var education = {};
education.first;
education.name = "University of Georgia";
education.city = "Athens, Georgia";
education.years = "1987-1992";
education.major = "Computer Science";

var firstcollege = HTMLschoolStart.replace("%education-entry%", education.first);
var collegename = HTMLschoolName.replace("%data%", education.name);
var educity = HTMLschoolLocation.replace("%data%", education.city);
var eduyears = HTMLschoolDates.replace("%data%", education.years);
var major = HTMLschoolMajor.replace("%data%", education.major);

$("#education").append(firstcollege);
$("#education").append(collegename);
$("#education").append(educity);
$("#education").append(eduyears);
$("#education").append(major);

var educationonline = {};
educationonline.degree = "Front-End Developer Nanodegree";
educationonline.school = "Udacity";
educationonline.dates = "April 2015 - December 2015";
educationonline.url = "http://www.udacity.com";

var nanoheading = HTMLonlineClasses;
var onlinedegree = HTMLonlineTitle.replace("%data%", educationonline.degree);
var onlineschool = HTMLonlineSchool.replace("%data%", educationonline.school);
var onlinedates = HTMLonlineDates.replace("%data%", educationonline.dates);
var onlineurl = HTMLonlineURL.replace("%data%", educationonline.url);

$("#education").append(nanoheading);
$("#education").append(onlinedegree);
$("#education").append(onlineschool);
$("#education").append(onlinedates);
$("#education").append(onlineurl);s









