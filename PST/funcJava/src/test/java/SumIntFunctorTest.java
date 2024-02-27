import junit.framework.TestCase;

public class SumIntFunctorTest extends TestCase {
	private Integer[] values;
	private SumIntFunctor functor;
	
	@Override
	protected void setUp() throws Exception {
		values = new Integer[]{ (Integer) 42, (Integer) 17, (Integer) 121 };
		functor = new SumIntFunctor();
	}
	
	public void testSumIntFunctor() throws Exception {
		ApplyFunctor.applyToArray(values, functor);
		assertEquals(180, functor.getSum());
	}
}
