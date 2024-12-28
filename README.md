# Incorrect Usage of $inc Operator in MongoDB Update
This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation.  The `$inc` operator is used to increment a numeric field by a specified value.  However, attempting to increment with a string value will lead to an error or unexpected behavior.

## Bug
The bug lies in providing a string value ('1') instead of a number (1) to the `$inc` operator. This results in a failed update or incorrect data modification. 

## Solution
The solution involves ensuring that the value provided to the `$inc` operator is a numeric value.