Sentence Analyzer
The Sentence Analyzer is a simple algorithm designed to analyze sentences character by character to determine various metrics such as length, word count, and vowel count.

Overview
The algorithm reads a sentence terminated by a period (.) and performs the following tasks:

Calculates the total number of characters in the sentence.
Counts the number of words in the sentence, assuming words are separated by a single space.
Determines the number of vowels (a, e, i, o, u, both lowercase and uppercase) in the sentence.
Algorithm Description
Input:

Read a sentence which ends with a period (.).
Initialization:

Initialize three counters:
charCount: to count the total number of characters in the sentence.
wordCount: to count the number of words in the sentence.
vowelCount: to count the number of vowels in the sentence.
Processing:

Iterate through each character in the sentence.
Increment charCount for every character (including spaces and the period).
Increment wordCount for every space encountered, starting from the second character onward.
Check each character for vowel status (a, e, i, o, u, A, E, I, O, U) and increment vowelCount accordingly.
Output:

Display the following results:
Total number of characters.
Number of words.
Number of vowels.
Example
For a sentence like "Hello, how are you?":

Input: "Hello, how are you."
Output:
Total characters: 18
Number of words: 4
Number of vowels: 7
Usage
The algorithm is implemented in JavaScript for clarity and ease of understanding. It can be easily adapted to other programming languages.