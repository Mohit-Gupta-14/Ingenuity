function findSum(...num)
{
    var sum = 0;
    num.forEach(function(number)
    {
        sum += number;     
    });
    return sum;
}

document.write('<h1 style="text-align: center; color:orange">'+findSum(1, 2, 3)+'</h1>'); 