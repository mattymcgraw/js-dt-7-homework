var bottles;
var beerWall = "of beer on the wall";
for (count = 99; count >= 1; count = count - 1)
{
    var bottles = (count == 1) ? 'bottle' : 'bottles';
    console.log(count+" "+bottles+" "+beerWall+".");
    if (count < 99) {
        console.log("");
        console.log(count+" "+bottles+" "+beerWall+",");
    }
    console.log(count+" "+bottles+" of beer.");
    console.log("Take one down and pass it around,");
    if (count == 1) {
    	noBottles1 = 'No more bottles '+beerWall;
    	noBottles2 = 'no more bottles of beer';
        console.log(noBottles1+".");
        console.log("");
        console.log(noBottles1+", "+noBottles2+".");
        console.log("Go to the store and buy some more, 99 bottles "+beerWall+".");
    }
}