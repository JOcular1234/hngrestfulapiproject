# RESTful Profile API with Cat Facts 🐱

A simple yet dynamic RESTful API that serves my profile information along with random cat facts fetched from an external API. Built as part of a backend development task to demonstrate API integration, JSON response formatting, and error handling.

## What This API Does

This API provides a single endpoint (`/me`) that returns my personal profile information combined with a fun, randomly-fetched cat fact. Every time you hit the endpoint, you'll get a fresh timestamp and a new cat fact - because who doesn't love learning random things about cats?

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Fast, minimal web framework
- **node-fetch** - For making HTTP requests to external APIs
- **Cat Facts API** - External API for random cat facts

## Features

✅ Dynamic profile endpoint with real-time data  
✅ Integration with Cat Facts API (https://catfact.ninja/fact)  
✅ Fresh UTC timestamps on every request  
✅ Proper error handling with graceful fallbacks  
✅ 5-second timeout protection for external API calls  
✅ JSON responses with correct Content-Type headers  

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can check by running:

```bash
node --version
npm --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd restful
   ```

2. **Install dependencies**
   ```bash
   npm install express node-fetch
   ```

   Or if you have a package.json:
   ```bash
   npm install
   ```

### Running Locally

Start the server with:

```bash
node server.js
```

You should see:
```
Example app listening on port 3000
```

The API will be running at `http://localhost:3000`

## API Endpoints

### GET `/me`

Returns profile information with a random cat fact.

**Response Format:**
```json
{
  "status": "success",
  "user": {
    "email": "mfonobongumoh75@gmail.com",
    "name": "Mfon-Obong Monday Umoh",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T16:52:34.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

**Field Descriptions:**
- `status` - Always returns "success"
- `user.email` - My email address
- `user.name` - My full name
- `user.stack` - Backend technology stack used
- `timestamp` - Current UTC time in ISO 8601 format (updates with every request)
- `fact` - Random cat fact from Cat Facts API (changes with every request)

### GET `/`

Simple welcome endpoint.

**Response:**
```
Hello, Welcome to my restful API cat fact
```

## Testing the API

### Using cURL

```bash
curl http://localhost:3000/me
```

### Using Browser

Simply navigate to:
```
http://localhost:3000/me
```

### Using Postman or Thunder Client

Make a GET request to:
```
http://localhost:3000/me
```

## Example API Response

Here's what you'll get when you hit the `/me` endpoint:

```json
{
  "status": "success",
  "user": {
    "email": "mfonobongumoh75@gmail.com",
    "name": "Mfon-Obong Monday Umoh",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T16:52:34.123Z",
  "fact": "A cat's hearing is better than a dog's. And a cat can hear high-frequency sounds up to two octaves higher than a human."
}
```

Notice that:
- The `timestamp` reflects the exact moment you made the request
- The `fact` is different every time (thanks to the Cat Facts API!)
- The response is properly formatted JSON

## Error Handling

If the Cat Facts API is down or unreachable, the endpoint will still work! You'll get a fallback cat fact instead:

```json
{
  "status": "success",
  "user": {
    "email": "mfonobongumoh75@gmail.com",
    "name": "Mfon-Obong Monday Umoh",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T16:52:34.123Z",
  "fact": "Unable to fetch cat fact at this time. Did you know cats are amazing?"
}
```

## Project Structure

```
restful/
│
├── server.js          # Main application file with Express server and routes
├── package.json       # Project dependencies and scripts
└── README.md         # You are here!
```

## Dependencies

```json
{
  "express": "^4.x.x",
  "node-fetch": "^2.x.x"
}
```

- **express** - Web framework for creating the API
- **node-fetch** - Enables fetch API in Node.js for external API calls

## Technical Implementation Details

### Timeout Handling
The API includes a 5-second timeout for external API calls using `AbortController`. This prevents the endpoint from hanging if the Cat Facts API is slow or unresponsive.

### ISO 8601 Timestamps
All timestamps are generated using JavaScript's `toISOString()` method, which returns the current UTC time in ISO 8601 format.

### Content-Type Headers
The API explicitly sets `Content-Type: application/json` headers to ensure proper JSON response formatting.

## What I Learned

Building this project helped me understand:
- How to consume third-party APIs in Node.js
- Proper error handling and graceful degradation
- Working with async/await for external API calls
- Structuring RESTful API responses
- Implementing timeouts to prevent hanging requests

## Author

**Mfon-Obong Monday Umoh**  
Email: mfonobongumoh75@gmail.com  
Stack: Node.js/Express

## License

This project is open source and available for educational purposes.

---

Built with ☕ and 🐱 facts!
