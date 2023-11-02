//For the given JSON iterate over all the loops (for, for in , for of)
// Assuming entering the details of the employees in the DB 
const data = {
    "employeeDetails": [
      {"id": 101, "firstName": "Kumar", "age": 25},
      {"id": 102, "firstName": "Steve", "age": 30},
      {"id": 103, "firstName": "John", "age": 35},
      {"id": 104, "firstName": "Elsa", "age": 27}
    ]
  };
  
  console.log("Below is the output using For loop");
  for (let i=0; i<data.employeeDetails.length;i++) {
    console.log("ID is " + data.employeeDetails[i].id);
    console.log("Firstname is " + data.employeeDetails[i].firstName);
    console.log("Age is " + data.employeeDetails[i].age);
  }
  console.log("--------------------------------------");
  
  console.log("Below is the output using for of loop");
  for (let user of data.employeeDetails) {
    console.log("ID is " + user.id);
    console.log("Firstname is " + user.firstName);
    console.log("Age is " + user.age);
  }
  console.log("--------------------------------------");
  
  console.log("Below is the output using for in loop");
  for (let index in data.employeeDetails) {
    console.log("Id is " + data.employeeDetails[index].id);
    console.log("Firstname is " + data.employeeDetails[index].firstName);
    console.log("Age is " + data.employeeDetails[index].age);
  }
  

  // Creating Resume in JSON Format 
  console.log("--------------------------------------");
  console.log("Poovazhahi Asokan CV in JSON Format")
  const resume = 
  {
    "personalInformation": 
    {
      "firstName": "Poovazhahi",
      "lastName": "Asokan",
      "email": "poovasokan@gmail.com",
      "address": "London, United Kingdom",
    "linkedIn": "https://www.linkedin.com/in/poovazhahi-asokan-029a3a112/",
    "github": "https://github.com/POOVASOKAN"
    },
    "objective": "A motivated designer with 3 years of experience looking to join a forward-thinking company to contribute to innovative projects and collaborate with a dynamic team.",
    "education": 
    [
        {
          "degree": "Master of Food Systems & Management",
          "institution": "Cranfield University",
          "graduation": "2021"
        },
        {
            "degree": "Master of Food technology",
            "institution": "Amity University",
            "graduation": "2017"
          },
          {
            "degree": "Bachelor of Food Engineering",
            "institution": "Avinashilingam University",
            "graduation": "2015"
          }
        ],
        "workExperience": 
        [
            {
                "position": "COO",
                "company": "Omeava Design Studio",
                "responsibilities": "Orchestrated operational strategies, streamlined processes, and, in a freelance capacity as a Web Designer, led the migration of an intranet to MS Viva, creating responsive websites and enhancing user experiences."
              },
              {
                "position": "Product Designer",
                "company": "Apex Technologies ",
                "responsibilities": [
                  "Developed and maintained the company website, leading to a 20% increase in online sales.",
                  "Collaborated with cross-functional teams to design software solutions, increasing overall productivity by 15%."
                ]
              }
            ],
            "awardsAndAchievements": [
                {
                    "title": "Chapter Authorship",
                    "bookTitle": "Sustainable Food Waste Management",
                    "chapter": "Concepts & Innovations",
                    "description": "Authored a chapter shedding light on concepts and innovative practices in sustainable food waste management."
                  },
                  {
                    "title": "Chapter Contribution",
                    "topic": "Emerging Technologies in Food Science",
                    "description": "Contributed expertise through a dedicated chapter discussing the implications and advancements of emerging technologies in the field of food science."
                  },
                  {
                    "title": "Gold Medalist",
                    "givenBy": "Prime Minister of India",
                    "description": "Awarded for exemplary contributions in a specific domain."
                  }
                ]
            };
            
            console.log(resume);