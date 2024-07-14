Insertion Sort Algorithm
Overview
Insertion Sort is a simple and efficient comparison-based sorting algorithm. It builds the final sorted array one element at a time. It works similar to how we sort playing cards in our hands, where we pick up a card and insert it into its correct position among the already sorted cards.

Algorithm Steps
Initialization: Start with the assumption that the first element of the array is already sorted.

Insertion Process:

Iterate through the array from the second element to the last.
For each element at position i, compare it with the elements before it (from i-1 to 0).
Shift all the elements greater than the current element to one position ahead of their current position to make space for the current element.
Insert the current element into the correct position in the sorted part of the array.
Repeat: Continue the process until the entire array is sorted.

Example
Consider an array [12, 11, 13, 5, 6]:

Start with [12] as the sorted portion.
Insert 11 into its correct position: [11, 12, 13, 5, 6].
Insert 13 into its correct position: [11, 12, 13, 5, 6].
Insert 5 into its correct position: [5, 11, 12, 13, 6].
Insert 6 into its correct position: [5, 6, 11, 12, 13].
The array is now sorted: [5, 6, 11, 12, 13].