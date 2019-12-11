namespace GildedRose
{
    internal class AgedBrie : Item
    {
        public AgedBrie(Item item)
            : base(item.Name, item.SellIn, item.Quality)
        {
            
        }

        public override void UpdateItem()
        {
            IncrementQualityWhenLessThanMax();

            SellIn = SellIn - 1;

            if (SellIn < 0)
            {
                IncrementQualityWhenLessThanMax();
            }
        }
    }
}