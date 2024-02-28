public class ApplyFunctor {
	public static<E> void applyToArray(E[] arr, Functor<E> functor) {
		for (int i = 0; i < arr.length; i++) {
			functor.apply(arr[i]);
		}
	}
}
