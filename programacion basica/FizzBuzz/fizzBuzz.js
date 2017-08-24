

for (i = 1; i <= 100; i++)
{
    // var divisible = false;

    if(esDivisible(i,3))      //(i % 3 == 0)
    {
        // divisible = true;
        document.write("Fizz!!")
    }
    
    if(esDivisible(i,5))      //(i % 5 == 0)
    { 
        // divisible = true;
        document.write("Buzz!!")
    }

    if(!esDivisible(i,3) && !esDivisible(i,5)) //(!divisible)
    {
        document.write(i);
    }
    document.write("<br/>");

}

function esDivisible(num, divisor)
{
    if(num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

