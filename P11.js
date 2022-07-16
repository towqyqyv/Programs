/* Program 11:- Write a JavaScript to Calculate the Factorial of a number. */

function factorial()
{
    var n=parseInt(document.factorialofn.inputvalue.value);
    var fact=1;

    if(n<0)
        alert("Please Enter a Positive Value");
    else if(n==0)
        alert("Factorial of 0 is:\n"+1);
    else
    {
        for(i=n;i>=1;i--)
            fact=fact*i;
        alert("Factorial of "+n+" is:\n"+fact);
    }
}