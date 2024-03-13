// randomDataGenerator.js

// Function to generate random names
function generateRandomName() {
    const firstNames = ['John', 'Jane', 'David', 'Emily', 'Michael', 'Sarah'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Taylor'];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

// Function to generate a random email
function generateRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const name = generateRandomName().toLowerCase().replace(' ', '');
    return `${name}@${randomDomain}`;
}

// Function to generate a random phone number
function generateRandomPhoneNumber() {
    const areaCode = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const prefix = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const lineNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
}

// Exporting the functions
module.exports = {
    generateRandomName,
    generateRandomEmail,
    generateRandomPhoneNumber
};
