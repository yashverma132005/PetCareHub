function generateCarePlan() {
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);
    const breed = document.getElementById('breed').value;
    const activityLevel = document.getElementById('activity_level').value;
    const healthCondition = document.getElementById('health_condition').value; 
    
    const carePlan = {
        diet: "",
        exercise: "",
        generalCare: ""
    };

    let dailyCalories = 0;
    if (age < 1) {
        dailyCalories = weight * 55; 
    } else if (age < 7) {
        if (activityLevel === "low") {
            dailyCalories = weight * 30;
        } else if (activityLevel === "moderate") {
            dailyCalories = weight * 35;
        } else {
            dailyCalories = weight * 40;
        }
    } else {
        dailyCalories = weight * 25; 
    }

    if (healthCondition === "obesity") {
        dailyCalories *= 0.8;  
    } else if (healthCondition === "underweight") {
        dailyCalories *= 1.2;  
    }

    let foodType = "Regular kibble";
    const largeBreeds = ["Labrador", "Golden Retriever", "German Shepherd", "Great Dane", "Rottweiler", "Doberman Pinscher"];
    const smallBreeds = ["Chihuahua", "Pomeranian", "Shih Tzu", "Yorkshire Terrier", "Dachshund"];
    
    if (largeBreeds.includes(breed)) {
        foodType = "Large breed kibble";
    } else if (smallBreeds.includes(breed)) {
        foodType = "Small breed kibble";
    }

    if (healthCondition === "allergy") {
        foodType = "Hypoallergenic food";
    } else if (healthCondition === "kidney_issues") {
        foodType = "Renal support diet";
    } else if (healthCondition === "joint_issues") {
        foodType = "Joint support diet";
    }

    carePlan.diet = `Daily Caloric Intake: ${dailyCalories.toFixed(0)} kcal<br>Recommended Food: ${foodType}`;

    let exerciseTime = 0;
    let exerciseType = "";
    if (activityLevel === "low") {
        exerciseTime = 30;
        exerciseType = "Short walks, light play";
    } else if (activityLevel === "moderate") {
        exerciseTime = 60;
        exerciseType = "Moderate walks, fetch, jogging";
    } else {
        exerciseTime = 90;
        exerciseType = "Long walks, running, agility training";
    }

    if (healthCondition === "joint_issues") {
        exerciseTime = Math.min(exerciseTime, 30);  
        exerciseType = "Low-impact activities like swimming or gentle walks";
    } else if (healthCondition === "heart_condition") {
        exerciseTime = Math.min(exerciseTime, 30);  
        exerciseType = "Light walks, avoid strenuous activity";
    }

    carePlan.exercise = `Recommended Exercise Time: ${exerciseTime} minutes/day<br>Exercise Type: ${exerciseType}`;

    let grooming = "Moderate grooming (every 2-3 months)";
    const highMaintenanceBreeds = ["Poodle", "Shih Tzu", "Bichon Frise", "Yorkshire Terrier", "Dachshund"];
    if (highMaintenanceBreeds.includes(breed)) {
        grooming = "Frequent grooming (every 4-6 weeks)";
    }

    let vetCheckup = "";
    if (age < 1) {
        vetCheckup = "Puppy vaccinations and regular vet checkups every 3-4 weeks";
    } else if (age < 7) {
        vetCheckup = "Annual vet checkups";
    } else {
        vetCheckup = "Bi-annual vet checkups for senior dogs";
    }

    if (healthCondition === "dental_issues") {
        vetCheckup += "<br>Regular dental cleanings and dental care";
    } else if (healthCondition === "diabetes") {
        vetCheckup += "<br>Regular blood sugar monitoring and insulin management";
    }

    carePlan.generalCare = `Grooming: ${grooming}<br>Veterinary Care: ${vetCheckup}`;

    const carePlanDiv = document.getElementById('carePlan');
    carePlanDiv.innerHTML = `
        <p><strong>Diet:</strong><br>${carePlan.diet}</p>
        <p><strong>Exercise:</strong><br>${carePlan.exercise}</p>
        <p><strong>General Care:</strong><br>${carePlan.generalCare}</p>
    `;
}

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-srch-links");

hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
});