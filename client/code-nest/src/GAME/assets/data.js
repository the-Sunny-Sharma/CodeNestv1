export const data = 
    {
        "python":
        {
            "level1":[
                {
                    question:'What is a correct syntax to output "Hello World" in Python?',
                    option1:'p("Hello World")',
                    option2:'print("Hello World")',
                    option3:'echo "Hello World"',
                    option4:'echo("Hello World");',
                    answer:2
                },
                {
                    question:'How do you insert COMMENTS in Python code?',
                    option1:'/*This is a comment*/',
                    option2:'//This is a comment',
                    option3:'#This is a comment',
                    option4:null,
                    answer:3
                },
                {
                    question:'How do you create a variable with the numeric value 5?',
                    option1:'x = 5',
                    option2:'x = int(5)',
                    option3:'Both the other answers are correct',
                    option4:null,
                    answer:3
                },
                {
                    question:'What is the correct file extension for Python files?',
                    option1:'.py',
                    option2:'.pyth',
                    option3:'.pt',
                    option4:'.pyt',
                    answer:1
                },
                {
                    question:'What is the correct way to create a function in Python?',
                    option1:'def myFunction():',
                    option2:'create myFunction():',
                    option3:'function myfunction():',
                    option4:null,
                    answer:1
                }
            ],  
            "level2":[
                {
                    question:'Which of the following data types is immutable in Python?',
                    option1:'List',
                    option2:'Dictionary',
                    option3:'Tuple',
                    option4:'Set',
                    answer:3
                },
                {
                    question:'What is the output of the following code:- print(4 ** 2)',
                    option1:8,
                    option2:16,
                    option3:6,
                    option4:32,
                    answer:2
                },
                {
                    question:'Which keyword is used for function return in Python?',
                    option1:'break',
                    option2:'exit',
                    option3:'return',
                    option4:'pass',
                    answer:3
                },
                {
                    question:'What is the output of print("hello" + 5) in Python?',
                    option1:'hello5',
                    option2:'Error',
                    option3:'5hello',
                    option4:'hellohellohellohellohello',
                    answer:2
                },
                {
                    question:'What is the correct way to import a module named "example_module" in Python?',
                    option1:'import example_module',
                    option2:'include example_module',
                    option3:'use example_module',
                    option4:'require example_module',
                    answer:1
                },
            ],
            "level3":[
                {
                    question:'What is the output of print("Python"[1:4]) in Python?',
                    option1:'Pyt',
                    option2:'yth',
                    option3:'ytho',
                    option4:'thon',
                    answer:2
                },
                {
                    question:'What does the pass statement do in Python?',
                    option1:'Terminates the program',
                    option2:'Executes the next iteration of a loop',
                    option3:'Does nothing',
                    option4:'Raises an exception',
                    answer:3
                },
                {
                    question:'Which of the following is not a valid way to create an empty list in Python?',
                    option1:'list()',
                    option2:'[]',
                    option3:'empty_list()',
                    option4:'list([])',
                    answer:3
                },
                {
                    question:'What is the purpose of the continue statement in Python?',
                    option1:'Exits the loop',
                    option2:'Skips the rest of the code in the current iteration of a loop',
                    option3:'Jumps to a specified label',
                    option4:' None of the above',
                    answer:2
                },
                {
                    question:'What is the result of print(5 == "5") in Python?',
                    option1:'True',
                    option2:'False',
                    option3:'Error',
                    option4:'None',
                    answer:2
                },
            ],
            "level4":[
                {
                    question:'What is the purpose of the enumerate() function in Python?',
                    option1:'Returns the index and value of each element in an iterable',
                    option2:'Returns the square of each element in an iterable',
                    option3:'Sorts the elements of an iterable',
                    option4:'Reverses the elements of an iterable',
                    answer:1
                },
                {
                    question:'What is the result of not True or False in Python?',
                    option1:'True',
                    option2:'False',
                    option3:'Error',
                    option4:'None',
                    answer:2
                },
                {
                    question:'What is the output of print([x for x in range(5)]) in Python?',
                    option1:'[1, 2, 3, 4, 5]',
                    option2:'[1, 2, 3, 4]',
                    option3:'[0, 1, 2, 3]',
                    option4:'[0, 1, 2, 3, 4]',
                    answer:4
                },
                {
                    question:'What is the purpose of the __init__ method in Python classes?',
                    option1:'Defines the class methods',
                    option2:'Calls the parent class constructor',
                    option3:'Initializes the object attributes',
                    option4:'None of the above',
                    answer:3
                },
                {
                    question:'What does the __str__ method do in Python classes?',
                    option1:'Initializes the object attributes',
                    option2:'Converts the object to a string representation',
                    option3:'Defines the class methods',
                    option4:'None of the above',
                    answer:2
                },
            ],
            "level5":[
                {
                    question:'What is the output of print("hello" * 2) in Python?',
                    option1:'hellohello',
                    option2:'Error',
                    option3:'hello hello',
                    option4:'hellohellohellohellohello',
                    answer:1
                },
                {
                    question:'What does the __str__ method do in Python classes?',
                    option1:'Converts the object to a string representation',
                    option2:'Initializes the object attributes',
                    option3:'Defines the class methods',
                    option4:'None of the above',
                    answer:1
                },
                {
                    question:'What is the output of print(1 == 1.0) in Python?',
                    option1:'False',
                    option2:'True',
                    option3:'Error',
                    option4:'None',
                    answer:2
                },
                {
                    question:'Which of the following is used to handle exceptions in Python?',
                    option1:'if-else',
                    option2:'for-in',
                    option3:'while-loop',
                    option4:'try-except',
                    answer:4
                },
                {
                    question:'What does the __init__.py file do in Python packages?',
                    option1:'Defines the package functions',
                    option2:' Initializes the package attributes',
                    option3:' Marks the directory as a package',
                    option4:'None of the above',
                    answer:3
                },
            ]
        },

        "c++":[
            {
                question:'What is a correct syntax to output "Hello World" in C++?',
                option1:'print ("Hello World");',
                option2:'Console.WriteLine("Hello World");',
                option3:'System.out.println("Hello World");',
                option4:'cout<<"Hello World";',
                answer:4
            },
            {
                question:'C++ is an alias of C#',
                option1:'False',
                option2:'True',
                option3:null,
                option4:null,
                answer:1
            },
            {
                question:'How do you insert COMMENTS in C++ code?',
                option1:' /* This is a comment',
                option2:' // This is a comment',
                option3:' # This is a comment',
                option4:null,
                answer:2
            },
            {
                question:'Which data type is used to create a variable that should store text?',
                option1:'myString',
                option2:'string',
                option3:'Txt',
                option4:'String',
                answer:2
            },
            {
                question:'How do you create a variable with the numeric value 5?',
                option1:' x = 5;',
                option2:'double x = 5;',
                option3:' int x = 5;',
                option4:' num x = 5',
                answer:3
            },
        ]
    }
