for (var i=1;i<=99;i++)
{
    if(i % 10 + Math.floor(i / 10)==9)
    {
        if(i % 10 > Math.floor(i / 10))
        {
            console.log(i);
        }
    }
}