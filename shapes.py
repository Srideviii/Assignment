import math

print("Select the shape:\n1.Circle\n2.Rectangle\n3.Square")
shape = int(input("Enter your choice:"))



while shape != 0:
    if shape == 1:
        radius = float(input("Enter the radius"))
        area = math.pi * (radius ** 2)
        perimeter = 2 * math.pi * radius
        print(f"The area of the circle is: {area:.2f}")
        print(f"The perimeter of the circle is: {perimeter:.2f}")
        break

    elif shape == 2:
        length = float(input("Enter the length: "))
        breadth = float(input("Enter the breadth: "))
        area = length * breadth
        perimeter = 2 * (length + breadth)
        print(f"The area of the circle is: {area:.2f}")
        print(f"The perimeter of the circle is: {perimeter:.2f}")
        break
        
        
    elif shape == 3:
        side = float(input("Enter the side: "))
        area = side **2
        perimeter = 4 * side
        print(f"The area of the circle is: {area:.2f}")
        print(f"The perimeter of the circle is: {perimeter:.2f}")
        break

    else:
        print("Invalid choice")
        break
