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
            if (Quality < 50)
            {
                Quality = Quality + 1;
            }

            if (!Name.Equals("Sulfuras, Hand of Ragnaros"))
            {
                SellIn = SellIn - 1;
            }

            if (SellIn < 0)
            {
                IncrementQualityWhenLessThanMax();
            }
        }
    }
}