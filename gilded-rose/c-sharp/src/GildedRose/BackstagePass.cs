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
            base.UpdateItem();
        }
    }
}