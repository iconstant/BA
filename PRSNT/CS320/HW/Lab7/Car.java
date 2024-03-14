// Car.java
public class Car extends Vehicle {
    private int numberOfSeats;

    public Car(String brand, String model, int numberOfSeats) {
        super(brand, model);
        this.numberOfSeats = numberOfSeats;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    @Override
    public void drive() {
        System.out.println("Car is moving.");
    }
}
