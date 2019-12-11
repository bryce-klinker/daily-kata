using System.Linq;

namespace GildedRose
{
    public class GildedRose
    {
        public Item[] Items { get; set; }

        public GildedRose(Item[] items)
        {
            Items = items
                .Select(CreateItem)
                .ToArray();
        }

        private static Item CreateItem(Item i)
        {
            switch (i.Name)
            {
                case "Aged Brie":
                    return new AgedBrie(i);
                case "Backstage passes to a TAFKAL80ETC concert":
                    return new BackstagePass(i);
                case "Sulfuras, Hand of Ragnaros":
                    return new Sulfuras(i);
                default:
                    return i;
            }
        }

        public void UpdateItems()
        {
            foreach (var item in Items)
            {
                item.UpdateItem();
            }
        }
    }

    internal class Sulfuras : Item
    {
        public Sulfuras(Item item)
            : base(item.Name, item.SellIn, item.Quality)
        {
        }
    }
}