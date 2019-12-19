using System;
using System.IO;
using System.Linq;
using Smelly.Code.Core.Readers;

namespace Smelly.Code.Core
{
    public class EvercraftGame
    {
        public bool[] Attacked { get; } = {false, false};
        public Character[] Chars { get; set; } = {null, null};

        public void Start(string charOne = "Jack", string charTwo = "Bob")
        {
            Chars = new[]
            {
                new Character(charOne, 5, 10, null, null, null),
                new Character(charTwo, 5, 10, null, null, null),
            };
        }

        public void Attack(int roll, Character character)
        {
            var sM = 0;
            var dM = 0;
            var charIndex = Array.IndexOf(Chars, character);

            if (charIndex != 0)
            {
                Attacked[1] = true;

                sM = Chars[0].Strength.GetModifier();
                dM = Chars[1].Dexterity.GetModifier();
                

                if (roll + sM >= Chars[1].Arm + dM)
                {
                    Chars[1].HitPts = Chars[1].HitPts - 1;
                }

                if (Chars[0].Str.HasValue)
                {
                    if (sM > 0 && roll + sM >= Chars[1].Arm)
                    {
                        Chars[1].HitPts = Chars[1].HitPts - sM;
                    }
                    else
                    {
                        Chars[1].HitPts = Chars[1].HitPts - 1;
                    }
                }


                if (roll == 20)
                {
                    Chars[1].HitPts = Chars[1].HitPts - 1;
                }
            }
            else
            {
                Attacked[0] = true;
                sM = Chars[1].Strength.GetModifier();
                dM = Chars[0].Dexterity.GetModifier();
                
                if (roll + sM >= Chars[0].Arm + dM)
                {
                    Chars[0].HitPts = Chars[0].HitPts - 1;
                }

                if (Chars[1].Str.HasValue)
                {
                    if (sM > 0 && roll + sM >= Chars[0].Arm)
                    {
                        Chars[0].HitPts = Chars[0].HitPts - sM;
                    }
                    else
                    {
                        Chars[0].HitPts = Chars[0].HitPts - 1;
                    }
                }
            }
        }

        public bool IsDead(Character character)
        {
            var charIndex = Array.IndexOf(Chars, character);
            var hitPoints = character.HitPts;
            var hM = Chars[charIndex].Constitution.GetModifier();

            return hitPoints + hM <= 0 && Attacked[charIndex];
        }

        public void EquipArmor(ArmorType armorType, int weight, Character character)
        {
            character.EquipArmor(armorType, weight);
        }

        public void ApplyStrength(int strength, Character character)
        {
            var charIndex = Array.IndexOf(Chars, character);
            Chars[charIndex].Str = strength;
        }

        public void ApplyDexterity(int dexterity, Character character)
        {
            var charIndex = Array.IndexOf(Chars, character);
            Chars[charIndex].Dex = dexterity;
        }

        public void ApplyConstitution(int constitution, Character character)
        {
            var charIndex = Array.IndexOf(Chars, character);
            Chars[charIndex].Const = constitution;
        }

        public void Load(string filePath)
        {
            Chars = CreateCharacterReader(filePath).ReadCharacters(filePath).ToArray();
        }

        private static ICharacterReader CreateCharacterReader(string filePath)
        {
            var extension = Path.GetExtension(filePath);
            switch (extension)
            {
                case ".json":
                    return new JsonCharacterReader();
                case ".db":
                    return new SqliteCharacterReader();
                default:
                    return new CsvCharacterReader();
            }
        }
    }
}