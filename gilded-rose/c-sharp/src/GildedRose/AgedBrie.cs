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
            base.UpdateItem();
        }
    }
}