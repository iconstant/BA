// Main.java
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Camry", 5);
        System.out.println("Car: " + myCar.getBrand() + " " + myCar.getModel());
        System.out.println("Number of seats: " + myCar.getNumberOfSeats());
        myCar.drive();

        System.out.println();

        Motorcycle myMotorcycle = new Motorcycle("Honda", "CBR1000RR", false);
        System.out.println("Motorcycle: " + myMotorcycle.getBrand() + " " + myMotorcycle.getModel());
        System.out.println("Has side car? " + (myMotorcycle.hasSideCar() ? "Yes" : "No"));
        myMotorcycle.drive();
    }
}