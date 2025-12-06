from PIL import Image

#Open the image you want to modify
image = Image.open("Images/three.jpg")

#Access the pixel data of the image
pixels = list(image.getdata())

#Define the new color you want (e.g., red)
new_color = (255, 255, 255)  
#Red

#Create a new list of pixel values with the new color
modified_pixels = [new_color if pixel != (255, 255, 255) else pixel for pixel in pixels]

#Create a new image with the modified pixel values
modified_image = Image.new("RGB", image.size)
modified_image.putdata(modified_pixels)

#Save the modified image to a file
modified_image.save("output Image/modified_image.jpg")

#Display the modified image
modified_image.show()
