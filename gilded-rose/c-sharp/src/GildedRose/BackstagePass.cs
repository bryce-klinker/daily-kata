namespace GildedRose
{
    internal class BackstagePass : Item
    {
        public BackstagePass(Item item)
            : base(item.Name, item.SellIn, item.Quality)
        {
        }

        public override void UpdateItem()
        {
            IncrementQualityWhenLessThanMax();

            if (SellIn < 11)
            {
                IncrementQualityWhenLessThanMax();
            }

            if (SellIn < 6)
            {
                IncrementQualityWhenLessThanMax();
            }

            SellIn = SellIn - 1;

            if (SellIn < 0)
            {
                Quality = Quality - Quality;
            }
        }
    }
}