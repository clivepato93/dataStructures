## Logarithms

You may not remember what logarithms are, but you probably know what
exponentials are. log 10 100 is like asking, “How many 10s do we multiply
together to get 100?” he answer is 2: 10 × 10. So log 10 100 = 2. Logs are the
lip of exponentials.

Logs are the flip of exponentials.
In this book, when I talk about running time in Big O notation (explained
a little later), log always means log 2 . When you search for an element using
simple search, in the worst case you might have to look at every single
element. So for a list of 8 numbers, you’d have to check 8 numbers at most.
For binary search, you have to check log n elements in the worst case. For
a list of 8 elements, log 8 == 3, because 2 3 == 8. So for a list of 8 numbers,
you would have to check 3 numbers at most. For a list of 1,024 elements,
log 1,024 = 10, because 2 10 == 1,024. So for a list of 1,024 numbers, you’d
have to check 10 numbers at most.

Some common Big O run times
Here are ive Big O run times that you’ll encounter a lot, sorted from
fastest to slowest:
• O(log n), also known as log time. Example: Binary search.
• O(n), also known as linear time. Example: Simple search.
• O(n \* log n). Example: A fast sorting algorithm, like quicksort
(coming up in chapter 4).
• O(n 2 ). Example: A slow sorting algorithm, like selection sort
(coming up in chapter 2).
• O(n!). Example: A really slow algorithm, like the traveling
salesperson (coming up next!).

## EXERCISES

- 1.1 Suppose you have a sorted list of 128 names, and you’re searching
  through it using binary search. What’s the maximum number of
  steps it would take?
  7
- 1.2 Suppose you double the size of the list. What’s the maximum
  number of steps now? 8

- 1.3 You have a name, and you want to ind the person’s phone number
  in the phone book. O(log n)
- 1.4 You have a phone number, and you want to ind the person’s name
  in the phone book. (Hint: You’ll have to search through the whole
  book!) O(n)
- 1.5 You want to read the numbers of every person in the phone book.
- 1.6 You want to read the numbers of just the As. (his is a tricky one!
  It involves concepts that are covered more in chapter 4. Read the
  answer—you may be surprised!) O(n)
