# Random Data Generator

This npm package provides functions to generate random data for various use cases such as names, emails, and phone numbers.

## Installation

You can install the package via npm:

```bash
npm install random-data-generator
```

## Usage

```javascript
const { generateRandomName, generateRandomEmail, generateRandomPhoneNumber } = require('random-data-generator');

// Generate a random name
const randomName = generateRandomName();
console.log('Random Name:', randomName);

// Generate a random email
const randomEmail = generateRandomEmail();
console.log('Random Email:', randomEmail);

// Generate a random phone number
const randomPhoneNumber = generateRandomPhoneNumber();
console.log('Random Phone Number:', randomPhoneNumber);
```

## Functions

### `generateRandomName()`

Generates a random full name.

### `generateRandomEmail()`

Generates a random email address.

### `generateRandomPhoneNumber()`

Generates a random phone number.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
