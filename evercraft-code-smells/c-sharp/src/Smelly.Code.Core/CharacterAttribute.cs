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
    }
}