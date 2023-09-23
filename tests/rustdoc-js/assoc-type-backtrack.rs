pub trait MyTrait2<X> {
    type Output;
}

pub trait MyTrait {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
    fn fold<B, F>(self, init: B, f: F) -> B where
        Self: Sized,
        F: MyTrait2<(B, Self::Item), Output=B>;
}

pub struct Cloned<I>(I);

impl<'a, T, I> MyTrait for Cloned<I> where
    T: 'a + Clone,
    I: MyTrait<Item = &'a T>
{
    type Item = T;
    fn next(&mut self) -> Option<Self::Item> { loop {} }
    fn fold<B, F>(self, init: B, f: F) -> B where
        Self: Sized,
        F: MyTrait2<(B, Self::Item), Output=B>
    {
        loop {}
    }
}
