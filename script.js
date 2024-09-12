var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var cnicElement = document.getElementById("cnic");
    var nationalityElement = document.getElementById("nationality");
    var genderElement = document.getElementById("gender");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var templateSelect = document.getElementById("template");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        cnicElement &&
        nationalityElement &&
        genderElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        templateSelect) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var cnic = cnicElement.value;
        var nationality = nationalityElement.value;
        var gender = genderElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var template = templateSelect.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n      <h2>Resume</h2>\n      ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n      <p><strong>Name :</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n      <p><strong>Email :</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n      <p><strong>Phone Number :</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n      <p><strong>Address :</strong> <span id=\"edit-address\" class=\"editable\">").concat(address, "</span></p>\n      <p><strong>CNIC :</strong> <span id=\"edit-cnic\" class=\"editable\">").concat(cnic, "</span></p>\n      <p><strong>Nationality :</strong> <span id=\"edit-nationality\" class=\"editable\">").concat(nationality, "</span></p>\n      <p><strong>Gender :</strong> <span id=\"edit-gender\" class=\"editable\">").concat(gender, "</span></p>\n      \n      \n      <h3 class=\"heading-education\">Education :</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n      <h3 class=\"heading-experience\">Experience :</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n      <h3 class=\"heading-skills\">Skills :</h3>\n      <p id=\"edit-skill\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            // Remove any existing theme classes
            resumeOutputElement.classList.remove("elegantRose", "softLavender", "vibrantPlum", "coolMint", "sunsetOrange", "classicBlue");
            resumeOutputElement.classList.add("line-height"); // Add line-height class
            // Insert the resume content
            resumeOutputElement.innerHTML = resumeOutput;
            // Add the selected theme class AFTER the content is inserted
            resumeOutputElement.classList.add(template);
            // Dynamically change heading colors, hr line, profile picture, and line-height based on the selected theme
            updateHeadingColors(template);
            makeEditable(); // Make content editable
        }
    }
    else {
        console.error("One or more elements are missing.");
    }
});
// Function to update heading colors, hr line, profile picture box shadow, and line-height dynamically
function updateHeadingColors(template) {
    var _a, _b, _c, _d, _e, _f;
    var educationHeading = document.querySelector(".heading-education");
    var experienceHeading = document.querySelector(".heading-experience");
    var skillsHeading = document.querySelector(".heading-skills");
    var profilePicture = document.querySelector(".profilePicture");
    // Example of how you can change colors based on the selected template
    switch (template) {
        case "elegantRose":
            educationHeading.style.color = "#d15eea";
            experienceHeading.style.color = "#d15eea";
            skillsHeading.style.color = "#d15eea";
            profilePicture.style.borderColor = "#d15eea"; // Update border color
            profilePicture.style.boxShadow = "2px 3px 15px rgba(209, 94, 234, 0.565)"; // Update box shadow color
            (_a = document
                .querySelector(".line-height")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "line-height: 1.8;");
            break;
        case "softLavender":
            educationHeading.style.color = "#a899ff";
            experienceHeading.style.color = "#a899ff";
            skillsHeading.style.color = "#a899ff";
            profilePicture.style.borderColor = "#a899ff";
            profilePicture.style.boxShadow =
                "2px 3px 15px rgba(168, 153, 255, 0.565)";
            (_b = document
                .querySelector(".line-height")) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "line-height: 1.8;");
            break;
        case "vibrantPlum":
            educationHeading.style.color = "#6a1b9a";
            experienceHeading.style.color = "#6a1b9a";
            skillsHeading.style.color = "#6a1b9a";
            profilePicture.style.borderColor = "#6a1b9a";
            profilePicture.style.boxShadow = "2px 3px 15px rgba(106, 27, 154, 0.565)";
            (_c = document
                .querySelector(".line-height")) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "line-height: 1.8;");
            break;
        case "coolMint":
            educationHeading.style.color = "#3eb489";
            experienceHeading.style.color = "#3eb489";
            skillsHeading.style.color = "#3eb489";
            profilePicture.style.borderColor = "#3eb489";
            profilePicture.style.boxShadow = "2px 3px 15px rgba(62, 180, 137, 0.565)";
            (_d = document
                .querySelector(".line-height")) === null || _d === void 0 ? void 0 : _d.setAttribute("style", "line-height: 1.8;");
            break;
        case "sunsetOrange":
            educationHeading.style.color = "#ff5722";
            experienceHeading.style.color = "#ff5722";
            skillsHeading.style.color = "#ff5722";
            profilePicture.style.borderColor = "#ff5722";
            profilePicture.style.boxShadow = "2px 3px 15px rgba(255, 87, 34, 0.565)";
            (_e = document
                .querySelector(".line-height")) === null || _e === void 0 ? void 0 : _e.setAttribute("style", "line-height: 1.8;");
            break;
        case "classicBlue":
            educationHeading.style.color = "#0d47a1";
            experienceHeading.style.color = "#0d47a1";
            skillsHeading.style.color = "#0d47a1";
            profilePicture.style.borderColor = "#0d47a1";
            profilePicture.style.boxShadow = "2px 3px 15px rgba(13, 71, 161, 0.565)";
            (_f = document
                .querySelector(".line-height")) === null || _f === void 0 ? void 0 : _f.setAttribute("style", "line-height: 1.8;");
            break;
        default:
            console.error("Theme not recognized.");
            break;
    }
}
// Function to make text elements editable
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
