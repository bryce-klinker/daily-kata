using System.Collections.Generic;

namespace Smelly.Code.Core
{
    public class Character
    {
        public string Name { get; set; }
        public int HitPts { get; set; }
        public int Arm { get; set; }

        public CharacterAttribute Strength { get; set; }
        public CharacterAttribute Dexterity { get; set; }
        public CharacterAttribute Constitution { get; set; }
        public int? Str
        {
            get => Strength;
            set => Strength = value;
        }

        public int? Dex
        {
            get => Dexterity;
            set => Dexterity = value;
        }

        public int? Const
        {
            get => Constitution;
            set => Constitution = value;
        }

        public Character(string name, int hitPts, int arm, int? str, int? dex, int? @const)
        {
            HitPts = hitPts;
            Arm = arm;
            Name = name;
            Strength = new CharacterAttribute(str);
            Dexterity = new CharacterAttribute(dex);
            Constitution = new CharacterAttribute(@const);
        }

        public void EquipArmor(ArmorType armorType, int weight)
        {
            switch (armorType)
            {
                case ArmorType.Bronze:
                    this.Arm = this.Arm - 1;
                    break;
                case ArmorType.Steel:
                    this.Arm = this.Arm + 1;
                    break;
            }

            if (weight > 50)
            {
                this.Arm = this.Arm + 2;
            }
        }
    }
}