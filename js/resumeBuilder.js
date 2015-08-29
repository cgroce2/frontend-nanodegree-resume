
var bio = {
	"name": "Clark Groce",
	"role": "Director of Quality Engineering",
	"contacts": {
		"mobile": "470-363-8446",
		"email": "clarkgroce@comcast.net",
		"github": "https://github.com/cgroce2/",
		"location": "Atlanta, GA"
	},
	"welcomeMessage" : "Welcome to my resume, my name is Clark Groce and I enjoy technology, programming, strategic software testing and life in general!",
	"skills": [
		"Programming", "QE Extraordinaire", "Craft Beer", "Tennis",
	],
	"bioPic": "images/profilepic.JPG"
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
			"location": "Atlanta, GA",
			"title": "Director Quality Engineering",
			"years": "04/2015 - Present",
			"description": "Responsible for QE team, tooling, staffing, and overall quality."
		},
		{
			"employer": "Peoplenet",
			"location": "Atlanta, GA",
			"title": "Director Quality Engineering",
			"years": "05/11 - 04/15",
			"description": "Responsible for establishing SQA Department and testing processes, along with building and managing a high performing team of QA engineers. Develop, implement and manage strategic test programs to increase efficiency; such as test automation across enterprise level architecture, including application, middleware and data layers for web and mobile.  Responsible for strategic SQA tooling decisions, implementation and build out.  Manage all planning, design and execution of SQA work for complex highly configurable SaaS environment."

		}
	]
};

var displaywork = function() {

for(var job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedCity);
	$(".work-entry:last").append(formattedYears);
	$(".work-entry:last").append(formattedDescription);
}

}

displaywork();

//Begin Projects section on resume

var projects = {

	"projects" : [
		{
			"title" : "Test automation framework",
			"dates" : "04/2015 - 08/2015",
			"description" : "Built Selenium base framework for marketing automation product",
			"images" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Test_Automation_Interface.png/220px-Test_Automation_Interface.png"
		},
		{
			"title" : "Mobile test automation",
			"dates" : "08/2014 - 01/2015",
			"description" : "Built mobile test automation framework with Appium for IOS tablet product",
			"images" : "https://unmesh.files.wordpress.com/2013/02/photo-1.jpg"
		}
		],	
		display: function() {
		for (var project in projects.projects) {
			// create new div for projects
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);
			var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedProjectImages);			
		}
	}
};

projects.display();



var education = {
	"schools": [
		{
			"name" : "University of Georgia",
			"location" : "Athens, GA",
			"degree" : "Bachelors",
			"major" : "Computer Science",
			"dates" : "1987-1992",
		}
	],
	"onlineCourses": [
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "April 2015 - December 2015",
			"url" : "http://www.udacity.com",
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
	for (onlineCourse in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$(".online-entry").append(formattedTitle).css("padding-left", "5%");
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".online-entry").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".online-entry").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".online-entry").append(formattedURL);
	}
};
education.display();

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);

//adding a map for places lived and worked
$("#map-div").append(googleMap);



















