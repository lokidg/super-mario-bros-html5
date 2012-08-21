super-mario-bros-html5
======================

Super Mario Bros. using HTML5 Canvas

When Mario moves through the playground there is a situation where tiles that are located at left and right borders won't be complete drawn.
My solution is to create some property for Block object (thus and for it's ancestors) that will indicate whether the block will be complete drawn or not.
If it will be completely drawn (I mean the whole 16x16 tile) then the loop will do nothing in this case.
But if this property tells us that some tiles won't be completely drawn (and this means that whole first and last columns) some _counter_ will be activated.
This counter will count from 0 to the length of the tile (16 pixels now). According to the value of the counter, all tiles from first column will have width
that is calculated from this expression: [tileLength - counter]. And width of the tiles in the last column is equal to counter value.


But here I meet a problem. Now I draw the whole map. I mean I parse the whole array and draw each element of the array. So I need to specify amount of elements in array,
that I will draw in one loop cycle.
