// Motorcycle.java
public class Motorcycle extends Vehicle {
    private boolean hasSideCar;

    public Motorcycle(String brand, String model, boolean hasSideCar) {
        super(brand, model);
        this.hasSideCar = hasSideCar;
    }

    public boolean hasSideCar() {
        return hasSideCar;
    }

    @Override
    public void drive() {
        System.out.println("Motorcycle is moving.");
    }
}
