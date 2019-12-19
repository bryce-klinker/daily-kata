namespace Smelly.Code.Core
{
    public class CharacterAttribute
    {
        public int? Value { get; }

        public bool HasValue => Value.HasValue;

        public CharacterAttribute(int? value)
        {
            Value = value;
        }

        public static implicit operator int?(CharacterAttribute attribute)
        {
            return attribute.Value;
        }
        
        public static implicit operator CharacterAttribute(int? value)
        {
            return new CharacterAttribute(value);
        }

        public override string ToString()
        {
            return HasValue ? $"{Value}" : "N/A";
        }

        public int GetModifier()
        {
            if (this == 1)
            {
                return -5;
            }

            if (this == 2 || this == 3)
            {
                return -4;
            }

            if (this == 4 || this == 5)
            {
                return -3;
            }

            if (this == 6 || this == 7)
            {
                return -2;
            }

            if (this == 8 || this == 9)
            {
                return -1;
            }

            if (this == 12 || this == 13)
            {
                return 1;
            }

            if (this == 14 || this == 15)
            {
                return 2;
            }

            if (this == 16 || this == 17)
            {
                return 3;
            }

            if (this == 18 || this == 19)
            {
                return 4;
            }

            if (this == 20)
            {
                return 5;
            }

            return 0;
        }
    }
}