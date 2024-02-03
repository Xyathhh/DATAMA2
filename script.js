var students = [];

// Add these JavaScript functions for navigation between containers
function goToAddStudent() {
    document.getElementById("addStudentContainer").style.display = "block";
    document.getElementById("updateStudentContainer").style.display = "none";
}

function goToUpdateStudent() {
    document.getElementById("addStudentContainer").style.display = "none";
    document.getElementById("updateStudentContainer").style.display = "block";
}

function addStudent() {
    var name = document.getElementById("studentName").value;
    var age = document.getElementById("studentAge").value;

    if (name && age) {
        var student = { id: generateId(), name: name, age: age };
        students.push(student);
        displayStudents();
        clearForm("addStudentForm");
    } else {
        alert("Please enter both name and age.");
    }
}

function updateStudent() {
    var studentId = document.getElementById("updateStudentId").value;
    var updatedName = document.getElementById("updatedName").value;
    var updatedAge = document.getElementById("updatedAge").value;

    var studentToUpdate = students.find(student => student.id == studentId);

    if (studentToUpdate) {
        studentToUpdate.name = updatedName || studentToUpdate.name;
        studentToUpdate.age = updatedAge || studentToUpdate.age;
        displayStudents();
        clearForm("updateStudentForm");
    } else {
        alert("Student not found with the given ID.");
    }
}

function displayStudents() {
    var studentListSection = document.getElementById("studentList");
    studentListSection.innerHTML = "";

    students.forEach(student => {
        studentListSection.innerHTML += `<p>ID: ${student.id}, Name: ${student.name}, Age: ${student.age}</p>`;
    });

    // Update student list in the Add Student container
    var studentListAddStudent = document.getElementById("studentListAddStudent");
    studentListAddStudent.innerHTML = studentListSection.innerHTML;

    // Update student list in the Update Student container
    var studentListUpdateStudent = document.getElementById("studentListUpdateStudent");
    studentListUpdateStudent.innerHTML = studentListSection.innerHTML;
}

function generateId() {
    return Math.floor(Math.random() * 1000);
}

function clearForm(formId) {
    document.getElementById(formId).reset();
}

function goToCreateReport() {
    document.getElementById("createReportContainer").style.display = "block";
    document.getElementById("violationRecordContainer").style.display = "none";
    // Additional logic or content update as needed
}

function goToViolationRecord() {
    document.getElementById("createReportContainer").style.display = "none";
    document.getElementById("violationRecordContainer").style.display = "block";
    // Additional logic or content update as needed
}

