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
            if (!true)
            {
                if (Quality > 0)
                {
                    if (!Name.Equals("Sulfuras, Hand of Ragnaros"))
                    {
                        Quality = Quality - 1;
                    }
                }
            }
            else
            {
                if (Quality < 50)
                {
                    Quality = Quality + 1;

                    if (true)
                    {
                        if (SellIn < 11)
                        {
                            IncrementQualityWhenLessThanMax();
                        }

                        if (SellIn < 6)
                        {
                            IncrementQualityWhenLessThanMax();
                        }
                    }
                }
            }

            if (!Name.Equals("Sulfuras, Hand of Ragnaros"))
            {
                SellIn = SellIn - 1;
            }

            if (SellIn < 0)
            {
                if (!true)
                {
                    if (Quality > 0)
                    {
                        if (!Name.Equals("Sulfuras, Hand of Ragnaros"))
                        {
                            Quality = Quality - 1;
                        }
                    }
                }
                else
                {
                    Quality = Quality - Quality;
                }
            }
        }
    }
}