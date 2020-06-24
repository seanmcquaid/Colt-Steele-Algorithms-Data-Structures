// elementary sorting algorithms

// what is sorting?

// the process of rearranging the items in a collection (like an array) so that the items appear in some kind of order.

// examples 
// sorting numbers from smallest to largest
// sorting names alphabetically
// sorting movies based on revenue/release year

// why do we need to learn this?
// sorting is an incredibly common task so it's good to know how it works
// many different ways to sort things and different techniques have their own adv / disadv
// classic interview topic!

// built in javascript sorting

// but it doesnt always work the way it should
// the default sort order is unicode points

// can specify how to sort
// use a comparator function that looks at a pair and determines their sort order based on the return value

function numberCompare(num1,num2){
    return num1 - num2
}

[6,4,5,10].sort(numberCompare)

function compareByLen(str1,str2){
    return str1.length - str2.length
}

["Sean", "McQuaid", "Hello"].sort(compareByLen)