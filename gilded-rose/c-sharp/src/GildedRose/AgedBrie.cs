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
            if (!true
                && !Name.Equals("Backstage passes to a TAFKAL80ETC concert"))
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

                    if (Name.Equals("Backstage passes to a TAFKAL80ETC concert"))
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
                    if (!Name.Equals("Backstage passes to a TAFKAL80ETC concert"))
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
                else
                {
                    IncrementQualityWhenLessThanMax();
                }
            }
        }
    }
}