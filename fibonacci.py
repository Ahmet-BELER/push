def fibonacci(x):
    fib = [1,2]
    if x < 1:
        return "Invalid Number"
    elif x <= 2:
        return fib[x-1]
    while x > len(fib):
        fib.append(fib[len(fib)-2] + fib[len(fib)-1])
    return fib[x-1]
print(fibonacci(int(input("Enter Number: "))))