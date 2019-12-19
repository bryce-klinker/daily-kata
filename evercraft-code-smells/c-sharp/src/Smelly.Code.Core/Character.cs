using System.Collections.Generic;

namespace Smelly.Code.Core
{
    public class Character
    {
        private readonly Dictionary<string, CharacterAttribute> _attributes;
        public string Name { get; set; }
        public int HitPts { get; set; }
        public int Arm { get; set; }

        public int? Str
        {
            get => _attributes[nameof(Str)];
            set => _attributes[nameof(Str)] = value;
        }

        public int? Dex
        {
            get => _attributes[nameof(Dex)];
            set => _attributes[nameof(Dex)] = value;
        }

        public int? Const
        {
            get => _attributes[nameof(Const)];
            set => _attributes[nameof(Const)] = value;
        }

        public Character(string name, int hitPts, int arm, int? str, int? dex, int? @const)
        {
            HitPts = hitPts;
            Arm = arm;
            Name = name;
            _attributes = new Dictionary<string, CharacterAttribute>
            {
                {nameof(Str), new CharacterAttribute(str)},
                {nameof(Dex), new CharacterAttribute(dex)},
                {nameof(Const), new CharacterAttribute(@const)},
            };
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