namespace GildedRose
{
    public class Item
    {
        public string Name { get; set; }
        public int SellIn { get; set; }
        public int Quality { get; set; }

        public Item(string name, int sellIn, int quality)
        {
            Name = name;
            SellIn = sellIn;
            Quality = quality;
        }

        public override string ToString()
        {
            return $"{Name}, {SellIn}, {Quality}";
        }

        protected void IncrementQualityWhenLessThanMax()
        {
            if (Quality < 50)
            {
                Quality = Quality + 1;
            }
        }

        public virtual void UpdateItem()
        {
            if (!false)
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

                    if (false)
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
                if (!false)
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