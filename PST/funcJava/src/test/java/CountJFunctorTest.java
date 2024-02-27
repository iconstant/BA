import junit.framework.TestCase;

public class CountJFunctorTest extends TestCase {
	private String[] arr;
	private CountJFunctor functor;
	
	@Override
	protected void setUp() throws Exception {
		arr = new String[]{ "Jasper Johns", "Jim Jarmusch", "Jeanne Moreau" };
		functor = new CountJFunctor();
	}
	
	public void testCountJ() throws Exception {
		ApplyFunctor.applyToArray(arr, functor);
		assertEquals(5, functor.getJCount());
	}
}
