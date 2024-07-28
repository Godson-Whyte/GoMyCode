# Node.js Checkpoint

This project includes a series of tasks designed to practice basic Node.js functionalities. The tasks include creating a simple server, working with the file system, generating passwords, and sending emails.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

## Installation

 **Clone the repository:**
   git clone https://github.com/Godson-Whyte/GoMyCode/tree/master/Checkpoint%2011(Node%20js).git
   cd Checkpoint 11(Node js)


Tasks
### Task 1: Hello World
Create a simple Node.js program that prints "HELLO WORLD" to the console.

File: hello-world.js

How to Run:
node hello-world.js


### Task 2: Create a Server
Write a Node.js program that creates a server running on port 3000 and responds with '<h1>Hello Node!!!!</h1>\n' when accessed at http://localhost:3000.

File: server.js

How to Run:
npm server.js
Visit http://localhost:3000 to see the output.

### Task 3: File System Operations
Create a program that writes "Hello Node" to a file named welcome.txt and then reads and logs the content of the file.

File: file-system.js

How to Run:
node file-system.js

### Task 4: Password Generator
Use the generate-password package to create a function that generates random passwords and logs them to the console.

File: password-generator.js

How to Run:
node password-generator.js

### Task 5: Email Sender
Use the `nodemailer` package to send an email to yourself.

File: email-sender.js

- **Setup:**
  1. Create a `.env` file in the root of your project with the following content:

     ```
     EMAIL_USER=youremail@gmail.com
     EMAIL_PASS=yourpassword
     ```

  2. **Run the script:**

     node email-sender.js

  > **Note:** Remember to delete your personal information before uploading to GitHub.

  **Important:** Do not commit your `.env` file to version control. Ensure it's listed in your `.gitignore`.
