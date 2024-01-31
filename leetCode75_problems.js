/*
1768. Merge Strings Alternately
Easy
Topics
Companies
Hint
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.



Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d


Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

*/

var mergeAlternately = function (word1, word2) {
    let newStr = "";
    let flag = false;

    while (word1.length !== 0 && word2.length !== 0) {
        if (!flag) {
            newStr += word1.slice(0, 1);
            word1 = word1.slice(1);
        } else {
            newStr += word2.slice(0, 1);
            word2 = word2.slice(1);
        }

        flag = !flag;
    }

    if (word1.length === 0) newStr += word2;
    if (word2.length === 0) newStr += word1;

    return newStr;
};

// ################################################################################################################

/*
1071. Greatest Common Divisor of Strings
Easy
Topics
Companies
Hint
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.



Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""


Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

const gcdOfStrings = (str1, str2) => {
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    if (str1 + str2 !== str2 + str1) return "";

    return str1.substring(0, gcd(str1.length, str2.length));
};
// ################################################################################################################
/*
1431. Kids With the Greatest Number of Candies
Easy
Topics
Companies
Hint
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.



Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
Example 2:

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false]
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]


Constraints:

n == candies.length
2 <= n <= 100
1 <= candies[i] <= 100
1 <= extraCandies <= 50
*/

var kidsWithCandies = function (candies, extraCandies) {
    const maxCandy = Math.max(...candies);

    const results = candies.map((candy) => candy + extraCandies >= maxCandy);

    return results;
};

// ################################################################################################################

/*
605. Can Place Flowers
Easy
Topics
Companies
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false


Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

*/

var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    let len = flowerbed.length;

    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 0) {
            // edge cases for first and last
            let prev = i === 0 ? 0 : flowerbed[i - 1];
            let next = i === len - 1 ? 0 : flowerbed[i + 1];

            if (prev === 0 && next === 0) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }

    return count >= n;
};

// ################################################################################################################

/*

345. Reverse Vowels of a String
Easy
Topics
Companies
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"


Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

var reverseVowels = function (s) {
    const vowels = "aeiouAEIOU";
    let word = s.split("");

    let front = 0;
    let back = s.length - 1;

    while (front < back) {
        if (!vowels.includes(s[back])) {
            back--;
        } else if (!vowels.includes(s[front])) {
            front++;
        } else {
            let temp = word[front];
            word[front] = word[back];
            word[back] = temp;
            front++;
            back--;
        }
    }
    return word.join("");
};

// ################################################################################################################

/*

Code
Testcase
Testcase
Test Result
151. Reverse Words in a String
Medium
Topics
Companies
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.


Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?
*/


//  Time and space - 0(n)
var reverseWords = function(s) {
    let words = trimmed.split(" ").filter(word => word.length !== 0)
    return words.reverse().join(" ")
};


// ################################################################################################################
