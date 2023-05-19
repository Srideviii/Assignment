print("Welcome to the Calculator!!\n ")


def add():
    num1 = int(input("Enter num1:"))
    num2 = int(input("Enter num2:"))
    print("Result: ", num1 + num2)
    calculator()


def sub():
    num1 = int(input("Enter num1:"))
    num2 = int(input("Enter num2:"))
    print("Result: ", num1 - num2)
    calculator()


def multiply():
    num1 = int(input("Enter num1:"))
    num2 = int(input("Enter num2:"))
    print("Result: ", num1 * num2)
    calculator()


def div():
    num1 = int(input("Enter num1:"))
    num2 = int(input("Enter num2:"))
    print("Result: ", num1 / num2)
    calculator()


def calculator():
    print("1.Addition\n2.Subtraction\n3.Multiplication/n4.Division\n5.Exit")
    operation = int(input('Choose the operation: '))
    if operation == 1:
        add()
    elif operation == 2:
        sub()
    elif operation == 3:
        multiply()
    elif operation == 4:
        div()
    else:
        print("Invalid Operation")


if __name__ == '__main__':
    calculator()
