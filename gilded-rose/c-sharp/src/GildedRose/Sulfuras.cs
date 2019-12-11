namespace GildedRose
{
    internal class Sulfuras : Item
    {
        public Sulfuras(Item item)
            : base(item.Name, item.SellIn, item.Quality)
        {
        }

        public override void UpdateItem()
        {
            if (Quality > 0)
            {
            }

            if (SellIn < 0)
            {
                if (Quality > 0)
                {
                }
            }
        }
    }
}