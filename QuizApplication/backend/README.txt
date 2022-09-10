As Salam O Alaikum Sir! I hope you are doing good.

First of all I am sorry. I had an issue with my github it took me 45 minutes to solve it.
Kindly overlook this mistake of mine. Thank you.

These are the steps needed to start this project.

1. I have removed my MONG_URI from the .env file. Kindly add the URI where you want to test this code and then start server.js.

2. After doing so kindly add a new user to the  "localhost:4000/api/quiz/signup" post request and add its role as "admin"
    Kindly check the loginModel.js in backend/SchemaModel folder to check the variables. 

3. Then kindly login at "localhost:4000/api/quiz/login" with email and password in the body which you have previously signed in with.

4. After these steps you can now post new questions and quizzes. 

5. The testNumber and questionNumber field is used to differentiate between different quizzes and their respective questions.

6. If you want to post new question or update or delete them kindly do whiled logged in as "admin" as it will be checked everytime.

I hope these instructions will prove to be helpful for you. I have added further comments in the code file as well.

Thank you.
