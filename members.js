function skillsMember()
{
    var skills = document.getElementById("skills").value;
    var member = document.getElementById("member").value;
    var memberSkills = document.getElementById("memberSkills").value;
    var memberSkills = memberSkills + member + " " + skills + "\n";
    document.getElementById("memberSkills").value = memberSkills;
}




