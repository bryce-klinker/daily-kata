namespace GildedRose
{
    public class GildedRose
    {
        public Item[] Items { get; set; }

        public GildedRose(Item[] items)
        {
            Items = items;
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