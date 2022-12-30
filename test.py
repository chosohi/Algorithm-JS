def count_divisions(numbers):
    # Calculate the sum of all the numbers
    total_sum = sum(numbers)
    
    # If the sum is not divisible by 3, we cannot divide the numbers into groups with the same sum
    if total_sum % 3 != 0:
        return 0
    
    # Calculate the sum of each group
    group_sum = total_sum // 3
    
    # Initialize a counter for the number of valid divisions
    count = 0
    
    # Iterate through all the possible combinations of numbers
    for i in range(1 << len(numbers)):
        current_sum = 0
        for j in range(len(numbers)):
            if i & (1 << j):
                current_sum += numbers[j]
        # If the current combination of numbers adds up to the group sum, increase the counter
        if current_sum == group_sum:
            count += 1
    
    # Return the number of valid divisions, divided by 3 (since we need 3 groups)
    return count // 3

count_divisions([1, 2, 3, 0, 3])