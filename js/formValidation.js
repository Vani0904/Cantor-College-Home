function validateForm() {
    const firstNameDetails = document.forms["contactForm"]["firstname"].value;
    const lastNameDetails = document.forms["contactForm"]["lastname"].value;
    const subjectDetails = document.forms["contactForm"]["subject"].value;
    
    if (firstNameDetails === ""|| lastNameDetails === ""|| subjectDetails === ""){
        alert("All fields must be filled out");
        return false;
    } else {
        alert("Successfully submitted");
    }
}