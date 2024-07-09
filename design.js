var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="light on.jpeg";
        bulb=1;
    }
    else{
        document.getElementById("image").src="light off.jpg";
        bulb=0;
    }
}