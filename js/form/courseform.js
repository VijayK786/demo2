function select_courseform_func()
{
		var select = document.getElementById("courseidd");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'PGDM' )
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-select architects-select validate[required]'><option value='' selected='selected'>Select Specialization*</option><option value='Banking'>Banking</option>\
<option value='Operations'>Operations</option>\
<option value='Business Analytics and Intelligence'>Business Analytics and Intelligence</option>\
<option value='Agri business Management'>Agri business Management</option>\
<option value='Information technology'>Information technology</option>\
<option value='International Business'>International Business</option>\
<option value='Supply Chain Management'>Supply Chain Management</option>\
<option value='Finance'>Finance</option>\
<option value='Marketing'>Marketing</option>\
</select>";
		}
 
 else if (typevalue == 'Bachelor of Technology (Honours)')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Specialization*</option><option value='Computer Science & Engineering (Data Science)'>Computer Science & Engineering (Data Science)</option>\
			</select>";
		}

		else if (typevalue == 'Bachelor of Technology (Lateral)')
		{
			document.getElementById("branchid").innerHTML="<select name='program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Program*</option><option value='Aerospace Engineering'>Aerospace Engineering</option>\
<option value='Aeronautical Engineering'>Aeronautical Engineering</option>\
<option value='Computer Science and Engineering'>Computer Science and Engineering</option>\
<option value='Computer Engineering (Cloud Technology and Mobile Application)'>Computer Engineering (Cloud Technology and Mobile Application)</option>\
<option value='Computer Technology (Cloud Technology and Information Security)'>Computer Technology (Cloud Technology and Information Security)</option>\
<option value='Computer Science and System Engineering (Internet of Things)'>Computer Science and System Engineering (Internet of Things)</option>\
<option value='Computer Science and Technology (Artificial Intelligence)'>Computer Science and Technology (Artificial Intelligence)</option>\
<option value='Software Engineering'>Software Engineering</option>\
<option value='Information Science and Engineering'>Information Science and Engineering</option>\
<option value='Civil Engineering'>Civil Engineering</option>\
<option value='Mechanical Engineering - Mechatronics'>Mechanical Engineering - Mechatronics</option>\
<option value='Electronics & Communication Engineering - Embedded Systems and Industrial IOT'>Electronics & Communication Engineering - Embedded Systems and Industrial IOT</option>\
<option value='Electrical & Electronics Engineering - Electric Mobility and Smart Systems'>Electrical & Electronics Engineering - Electric Mobility and Smart Systems</option>\
<option value='Computer Science (Data Science)'>Computer Science (Data Science)</option>\
<option value='Computer Science and Engineering (Cyber Security)'>Computer Science and Engineering (Cyber Security)</option>\
<option value='Computer Science and Engineering - Artificial Intelligence and Machine Learning'>Computer Science and Engineering - Artificial Intelligence and Machine Learning</option>\
<option value='Mechanical Engineering - 3D Printing'>Mechanical Engineering - 3D Printing</option>\
<option value='Electronics & Communication Engineering - Cellular Technology'>Electronics & Communication Engineering - Cellular Technology</option>\
<option value='Electrical & Electronics Engineering - IOT Energy Management'>Electrical & Electronics Engineering - IOT Energy Management</option>\
</select>";
		}
}