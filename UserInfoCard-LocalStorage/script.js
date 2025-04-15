
const storedUserInfo = JSON.parse(localStorage.getItem("userInformation"));

// if we have something in local storage, show that, otherwise store in local storage
if (storedUserInfo) {
    dispData();
}else{
    storeUserInfo();
}

// Function to store user information in local storage
function storeUserInfo() {
    let firstName = prompt("Please Enter the Details\nFirst Name:");
    let lastName = prompt("Last Name:");
    let country = prompt("Country:");
    let phNo = prompt("Phone Number:");
    let state = prompt("State:");
    let city = prompt("City:");
    let village = prompt("Village:");

   let userInfo = {
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        country: `${country}`,
        phNo: `${phNo}`,
        state: `${state}`,
        city: `${city}`,
        village: `${village}`
   };
   userInfo = JSON.stringify(userInfo);
   localStorage.setItem("userInformation", userInfo);
   dispData();
   return;
}

function dispData(){
    const storedUserInfo = JSON.parse(localStorage.getItem("userInformation"));
    document.getElementById('first-name').textContent = storedUserInfo.firstName;
    document.getElementById('last-name').textContent = storedUserInfo.lastName;
    document.getElementById('country').textContent = storedUserInfo.country;
    document.getElementById('phone-number').textContent = storedUserInfo.phNo;
    document.getElementById('state').textContent = storedUserInfo.state;
    document.getElementById('city').textContent = storedUserInfo.city;
    document.getElementById('village').textContent = storedUserInfo.village;
    return;
}