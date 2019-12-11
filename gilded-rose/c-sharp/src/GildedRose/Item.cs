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

        public void IncrementQualityWhenLessThanMax()
        {
            if (this.Quality < 50)
            {
                this.Quality = this.Quality + 1;
            }
        }

        public void UpdateItem()
        {
            if (!this.Name.Equals("Aged Brie")
                && !this.Name.Equals("Backstage passes to a TAFKAL80ETC concert"))
            {
                if (this.Quality > 0)
                {
                    if (!this.Name.Equals("Sulfuras, Hand of Ragnaros"))
                    {
                        this.Quality = this.Quality - 1;
                    }
                }
            }
            else
            {
                if (this.Quality < 50)
                {
                    this.Quality = this.Quality + 1;

                    if (this.Name.Equals("Backstage passes to a TAFKAL80ETC concert"))
                    {
                        if (this.SellIn < 11)
                        {
                            this.IncrementQualityWhenLessThanMax();
                        }

                        if (this.SellIn < 6)
                        {
                            this.IncrementQualityWhenLessThanMax();
                        }
                    }
                }
            }

            if (!this.Name.Equals("Sulfuras, Hand of Ragnaros"))
            {
                this.SellIn = this.SellIn - 1;
            }

            if (this.SellIn < 0)
            {
                if (!this.Name.Equals("Aged Brie"))
                {
                    if (!this.Name.Equals("Backstage passes to a TAFKAL80ETC concert"))
                    {
                        if (this.Quality > 0)
                        {
                            if (!this.Name.Equals("Sulfuras, Hand of Ragnaros"))
                            {
                                this.Quality = this.Quality - 1;
                            }
                        }
                    }
                    else
                    {
                        this.Quality = this.Quality - this.Quality;
                    }
                }
                else
                {
                    this.IncrementQualityWhenLessThanMax();
                }
            }
        }
    }
}