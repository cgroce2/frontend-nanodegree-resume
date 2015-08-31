
// Start Bio section of resume
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
		"bioPic": "images/profilepic.JPG",
		//function to display bio section of resume
		display: function() {
		//This section loops through the bio.skills array and provides
		//the subsequent jquery to append & display each skill in the array
		$("#header").append(HTMLskillsStart);
		for (var i in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
		//This section is using the string .replace method to pass my profile data to their
		//corresponding html objects in helper.js, then using jquery to display above objects to header div.
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var picture = HTMLbioPic.replace('%data%', bio.bioPic);
		$("#header").append(picture);
		var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(message);
		var cell = HTMLmobile.replace('%data%', bio.contacts.mobile);
		$("#header").append(cell);
		var email = HTMLemail.replace("%data%", bio.contacts.email);
		$("#header").append(email);
		var from = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#header").append(from);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		}
};
bio.display();
//End Bio section

//Begin work section of resume.  This is the work object containing jobs and related job data to be 
//displayed in the Work Experience div.
var work = {
	"jobs": [
		{
			"employer": "Salesforce.com",
			"location": "Atlanta, GA",
			"title": "Director Quality Engineering",
			"years": "04/2015 - Present",
			"description": "Responsible building and leading high performance Quality Engineering team at Salesforce, along with leading development and implemention of strategic software testing programs such as UI automation, test automation with build and CI pipeline, performance and load testing."
		},
		{
			"employer": "Peoplenet",
			"location": "Atlanta, GA",
			"title": "Director Quality Engineering",
			"years": "05/11 - 04/15",
			"description": "Responsible for establishing SQA Department and testing processes, along with building and managing a team of QA engineers. Develop, implement and manage strategic test programs to increase efficiency; such as test automation across enterprise level architecture, including application, middleware and data layers for web and mobile.  Responsible for strategic SQA tooling decisions, implementation and build out.  Manage all planning, design and execution of SQA work for complex highly configurable SaaS environment."

		}
		],
//Function to loop through jobs array, then corresponding
//job meta data objects are created and passed to their html objects in helper.js, 
//and then appended to the work-entry div using jquery.
		display: function() {
		for (var job in work.jobs) {
			// create new div for projects
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedCity);
		var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
		$(".work-entry:last").append(formattedYears);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
	}
};
work.display();
// End work section

//Begin Projects section on resume
var projects = {

	"projects" : [
		{
			"title" : "Test automation framework",
			"dates" : "04/2015 - 08/2015",
			"description" : "Built test automation framework using Selenium Web Driver using a page object pattern that utilized view classes to separate out DOM references into container classes.  Using this page object pattern allowed for the ability to have a page object represent a self-contained section of a page instead of the entire page.  Ultimately this allowed us to gain much more efficient and broader test coverage.",
			"images" : "http://cdn.guru99.com/images/AdvanceSelenium/071514_0722_PageObjectM2.png"
		},
		{
			"title" : "Mobile test automation",
			"dates" : "08/2014 - 01/2015",
			"description" : "Designed and built automated testing framework for mobile devices (IOS and Android) using Selenium API and Appium which increased speed of regression cycle by 50%.",
			"images" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1fkAkXFLOZAGBKiX4RfWmT659xMhh3Pb0ruuo9WuFAraDG9I0-g"
		}
		],
		//Function to loop through projects array, then corresponding
		//project meta data objects are created and passed to their html objects in helper.js, 
		//and then appended to the project-entry div using jquery.	
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
//End Projects section

//Begin education section of resume
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

//Function to loop through education array, then corresponding
//education meta data objects are created and passed to their html objects in helper.js, 
//and then appended to the education-entry div using jquery.
education.display = function() {
	for (var school in education.schools) {
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
//End eduction section

//Function to "internationalize" name on resume when button clicked
function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}
//append internationalize button to resume
$("#main").append(internationalizeButton);

//adding a map for places lived and worked
$("#map-div").append(googleMap);



















