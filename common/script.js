{
    /* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script> */
  }
  
  function setDataToLocalStorage(firstName, lastName, email, password) {
    // Set data in local storage
    localStorage.setItem("first_name", firstName);
    localStorage.setItem("last_name", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
  
  function checkAuthentication(email, password) {
      console.log(email, password);
      console.log(localStorage.getItem("email"), localStorage.getItem("password"));
      
      const emailResult = email === 'john.doe@example.com' ? true : (email === localStorage.getItem("email") ? true : false);
      const passwordResult = password === 'securepassword' ? true : (password === localStorage.getItem("password") ? true : false);
  
      console.log(emailResult, passwordResult, emailResult && passwordResult);
      return (emailResult && passwordResult)
  }
  
  // Example usage
  // setDataToLocalStorage('John', 'Doe', 'john.doe@example.com', 'securepassword');
  
  // document.addEventListener('DOMContentLoaded', (event) => {
  //     // Function to load data from local storage
  //     function loadDataFromLocalStorage() {
  //         // Retrieve data from local storage
  //         const firstName = localStorage.getItem('first_name');
  //         const lastName = localStorage.getItem('last_name');
  //         const email = localStorage.getItem('email');
  //         const password = localStorage.getItem('password');
  
  //         // Populate form fields with retrieved data
  //         if (firstName) document.getElementById('first_name').value = firstName;
  //         if (lastName) document.getElementById('last_name').value = lastName;
  //         if (email) document.getElementById('email').value = email;
  //         if (password) document.getElementById('password').value = password;
  //     }
  
  //     // Call the function to load data when the DOM is fully loaded
  //     loadDataFromLocalStorage();
  // })
  
  function loadDataForHome() {
    // Retrieve data from local storage
    const firstName = localStorage.getItem("first_name");
    const lastName = localStorage.getItem("last_name");
  
    // Populate form fields with retrieved data
    if (firstName) document.getElementById("first_name").innerText = firstName;
    if (lastName) document.getElementById("last_name").innerText = lastName;
  }
  
  function loadDataForEditProfile() {
    // Retrieve data from local storage
    const firstName = localStorage.getItem("first_name");
    const lastName = localStorage.getItem("last_name");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
  
    // Populate form fields with retrieved data
    if (firstName) document.getElementById("firstName").value = firstName;
    if (lastName) document.getElementById("lastName").value = lastName;
    if (email) document.getElementById("email").value = email;
    if (password) document.getElementById("password").value = password;
  }
  
  function logoutUser() {
    
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    // Perform any additional actions here, such as clearing local storage
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  
    localStorage.removeItem("weight");
    localStorage.removeItem("height");
    localStorage.removeItem("age");
    localStorage.removeItem("level");
    localStorage.removeItem("goal");
  
    localStorage.removeItem("measurement");
  
    // Redirect to the login page
    window.location.href = "index.html";
  }
  
  function getFitnessGoals() {
    // Get data from local storage
    const weight = localStorage.getItem("weight");
    const height = localStorage.getItem("height");
    const age = localStorage.getItem("age");
    const level = localStorage.getItem("level");
    const goal = localStorage.getItem("goal");
  
    // Populate form fields with retrieved data
    if (weight) document.getElementById("weight").value = weight;
    if (height) document.getElementById("height").value = height;
    if (age) document.getElementById("age").value = age;
    if (level) document.getElementById("fitnessLevel").value = level;
    if (goal) document.getElementById("goals").value = goal;
  }
  
  function setFitnessGoals(weight, height, age, level, goal) {
    // Set data in local storage
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("age", age);
    localStorage.setItem("level", level);
    localStorage.setItem("goal", goal);
  }
  
  function getMeasurement() {
      // return localStorage.getItem("measurement")
  
      const measurement = localStorage.getItem("measurement");
      return measurement ? JSON.parse(measurement) : [];
  }
  
  function setMeasurement(measurement) {
    // localStorage.setItem("measurement", measurement);
    localStorage.setItem("measurement", JSON.stringify(measurement))
  }
  
  function setWorkout(title, date, set, rep, note) {

  }
  
  function getWorkout() {
    const workoutHistory = localStorage.getItem("workoutHistory");
    return workoutHistory ? JSON.parse(workoutHistory) : [];
  }