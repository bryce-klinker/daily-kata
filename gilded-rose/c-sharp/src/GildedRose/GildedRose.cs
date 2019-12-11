using System.Linq;

namespace GildedRose
{
    public class GildedRose
    {
        public Item[] Items { get; set; }

        public GildedRose(Item[] items)
        {
            Items = items
                .Select(i => i)
                .ToArray();
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