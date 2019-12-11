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
            return i;
        }

        public void UpdateItems()
        {
            foreach (var item in Items)
            {
                item.UpdateItem();
            }
        }
    }
}