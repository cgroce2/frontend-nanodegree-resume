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
}





