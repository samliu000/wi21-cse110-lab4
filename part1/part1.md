1) prices.length will be logged. Even though i is part of another block, it is declared using var instead of let so it can be used outside of the for loop
2) the discounted price for the last price will be displayed. This is also because discountedPrice is declared using var so it has no block scope.
3) the rounded discounted price for the last price will be displayed. This is also because finalPrice is declared using var so it has no block scope. However, even if we used "let" to declare finalPrice here, finalPrice would still print because the console.log and finalPrice are both declared in the same scope.
4) It will return:
   
   [50,100,150]

   This is because our for loop calculates the discounted price for each price in the price array parameter and stores that discounted price in the discounted array. Our function then returns that discounted array. Since our discount is 50%, it makes sense that we return half of 100, half of 200, and half of 300. It is able to be returned because discounted is declared as a var and has no block scope.
   
5) There will be a reference error because i is declared using let and its scope ends outside of the for loop
6) There will be a reference error because i is declared using let and its scope ends outside of the for loop
7) the rounded discounted price for the last price will be displayed. This is because finalPrice is declared using let and is in the same block scope as console.log(finalPrice);
8) It will return discounted, which is in the same scope as the return statement.
9) There will be a reference error because i is declared using let and its scope ends outside of the for loop
10) There will be a reference error because i is declared using const and its scope ends outside of the for loop
11) If the code reaches this point, it would print out finalPrice (which should be 0 since it is a constant value) because it is declared as const and within the same scope as "console.log(finalPrice)"
12) It would return [0,0,0] since finalPrice is declared as a constant value of 0 (which will not change) and the for loop runs three times, pushing 0 three times into discounted. It is able to be returned because discounted is declared as const and is within the same scope as the return statement.
13) A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
14) A) 32, string concatenation occurs
    B) 1, 3 is converted to a number and 3 - 2 is 1
    C) 3 because null is converted to 0
    D) 3null, because string concatenation occurs
    E) 4, beause true is converted to 1 and 1 + 3 = 4
    F) 0, because false and null are both represented by 0 as numbers and 0+0=0
    G) 3undefined, because string concatenation occurs
    H) NaN, this is not possible because even though "3" is converted to the number 3, undefined cannot be converted into a valid number. undefined also cannot be a string so this expression cannot be evaluated.
15) A) true, '2' is converted to number and 2 is greater than 1
    B) false, '2' and '12' are compared as strings and since the character 2 is greater than the character 1, '2' > '12'
    C) true, '2' is converted to a number and 2 is equal to 2
    D) false, strict equality is used and 2 is not equal to '2' without any conversion
    E) false, true is converted to 1 and 1 is not equal to 2
    F) true, Boolean(2) is true because Boolean(x) where x is not 0 is true.
16) == checks two values with conversions. === checks two values without converting either of the values to match the other better, which is why it is called the "strict equality operator"
17) How are you? is printed. This is because 2 == true is false since true as a number is 1 and 2 is not equal to 1. However, on line 3, 2 is converted to a boolean and Boolean(2) is true so How are you? is printed. 
19) [6, 8, 10] For each of the values in the array parameter, we are using it to call the callback function along with a function that multiplies the parameter x by 2. According to the doSomething method, we are passing in "num+2" as x where num in this case is the value in the array. So for each value in the array, it is being increased by 2 and then multiplied by 2.
21) 1
    4
    3
    2