
var bio = {
	"name": "Clark Groce",
	"role": "Director of Quality Engineering",
	"contacts": {
		"mobile": "470-363-8446",
		"email": "clarkgroce@comcast.net",
		"github": "https://github.com/cgroce2/",
		"location": "Atlanta"
	},
	"welcomeMessage" : "Welcome to my resume, my name is Clark Groce and I am awesome!",
	"skills": [
		"awesomeness", "programming", "teaching", "JS", "QE extraordinaire"
	],
	"bioPic": "images/testimage.png"
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var picture = HTMLbioPic.replace('%data%', bio.bioPic);
var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var cell = HTMLmobile.replace('%data%', bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var from = HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(cell);
$("#header").append(email);
$("#header").append(from);
$("#header").append(message);
$("#header").append(picture);

var work = {
	"jobs": [
		{
			"employer": "Salesforce.com",
			"city": "Atlanta, Georgia",
			"title": "Director Quality Engineering",
			"years": "04/2015 - Present",
			"description": "Responsible for QE team, tooling, staffing, and overall quality."
		},
		{
			"employer": "Peoplenet",
			"city": "Atlanta, Georgia",
			"title": "Director Quality Engineering",
			"years": "05/11 - 04/15",
			"description": "Responsible for establishing SQA Department and testing processes, along with building and managing a high performing team of QA engineers. Develop, implement and manage strategic test programs to increase efficiency; such as test automation across enterprise level architecture, including application, middleware and data layers for web and mobile.  Responsible for strategic SQA tooling decisions, implementation and build out.  Manage all planning, design and execution of SQA work for complex highly configurable SaaS environment."

		}
	]
};

for(var job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
	var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedCity);
	$(".work-entry:last").append(formattedYears);
	$(".work-entry:last").append(formattedDescription);
}


var education = {
	"schools": [
		{
			"name" : "University of Georgia",
			"location" : "Athens, Georgia",
			"degree" : "Bachelors",
			"major" : "Computer Science",
			"dates" : "1987-1992"
		}
	],
	"onlinecourses": [
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "April 2015 - December 2015",
			"url" : "http://www.udacity.com"
		}
	]
};
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLonlineStart);
	for (onlineCourse in education.onlinecourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlineCourse].title);
		$(".online-entry").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlineCourse].school);
		$(".online-entry").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlineCourse].dates);
		$(".online-entry").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlinecourses[onlineCourse].url);
		$(".online-entry").append(formattedURL); 
  	}
};
education.display();
















