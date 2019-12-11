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
                Quality++;
            }
        }

        public virtual void UpdateItem()
        {
            if (Quality > 0)
            {
                Quality = Quality - 1;
            }

            SellIn = SellIn - 1;

            if (SellIn < 0)
            {
                if (Quality > 0)
                {
                    Quality = Quality - 1;
                }
            }
        }
    }
}