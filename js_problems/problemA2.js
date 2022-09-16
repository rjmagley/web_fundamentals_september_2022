// array is Palindrome - determine if an array is a palindrome or not
// i.e. if the array was reversed, would the same elements be in the same order
// return true if the array functions as a palindrome and false otherwise

function arrayIsPalindrome(array) {
    for (var i = 0; i < array.length/2; i++) {
        console.log(`Comparing index ${i} to index ${array.length - i - 1}`);
        if (array[i] != array[array.length - (1 + i)]) {
            return false;
        }
    }
    return true;
}

// console.log(arrayIsPalindrome([1, 2, 3, 4, 5])); // return false
// console.log(arrayIsPalindrome([1])); // return true
// console.log(arrayIsPalindrome([1, 2, 3, 2, 1])); // return true
console.log(arrayIsPalindrome([1, 2, 3, 3, 2, 1])); // return true
// console.log(arrayIsPalindrome([12, 23, 34, 23, 12])); // return true
// console.log(arrayIsPalindrome(["apple", "banana", "apple"])); // return true
// console.log(arrayIsPalindrome(["Apple", "banana", "apple"])); // return false
// console.log(arrayIsPalindrome([])); // returns true
// console.log(arrayIsPalindrome(["apple", 2, "banana", 3, "banana", 2, "apple"])); // returns true