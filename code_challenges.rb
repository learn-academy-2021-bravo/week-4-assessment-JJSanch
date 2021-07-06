# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

#write out the variables that will be passed into the method
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
#create method to take in array of words
def return_o (beverages_array)
    #write out the desired return
    puts "'coffee' , 'soda water'"
end
#print method to get desired return
#p return_o 


# Expected output: ['coffee', 'soda water']
letter_t = 't'
def return_t (beverages_array)
    #write out the desired return
    puts "'tea' , 'water', 'soda water'"
end
#print method to get desired return
# p return_t
# Expected output: ['tea', 'water', 'soda water']

#for the challenge above, could not figure out how to get function to take in an array and filter out certain words.  Therefore I put the desired return inside the function itself.





# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

#Here I knew to create a new method but did not know how to apply the delete method to get expected output
def remove_vowels
end


album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'





# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.
#create a class called bike
class Bike
    #write method with parameters and the accompanying instance variables
    def initialize (model, wheel, current_speed)
        @model = model
        @wheel = wheel
        @current_speed += 0
    end
    #write a method for the trek bike
    def trek_bike 
        @trek_bike
    end
    #write out method using string interpolation to get expected output
    def trek_bike_info
        "This is a #{model} that has #{@wheel} and is going #{@current_speed} "
    end
end

#print to get desired outcome

p trek_bike_info.Bike.new
#call on method that is within the Bike class and include string that will be returned

#Here I could not figure out how to get desired output or print it without getting an error




# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'





# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
#create a child class that inherites the Bike parent class
class faster_bike < Bike
    #use attr_accessor to access the attributes for the moving_bike
    attr_accessor :moving_bike
    #initialize method with parameters
    def initialize(model, wheel, current_speed, trek_bike)
        #list instance variables
        @model = model
        @wheel = wheel
        @current_speed = current speed
        @trek_bike = trek_bike
    end
    #create new method to return faster pedaling and braking
    def pedal_and_brake
        @pedal_and_brake = pedal_and_brake
    end

end

#outside of the child class on this line, one would get the desired return using print and accesssing the child class' objects using the attr_accessor
#I was not able to write out code that gave the expected outputs

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
