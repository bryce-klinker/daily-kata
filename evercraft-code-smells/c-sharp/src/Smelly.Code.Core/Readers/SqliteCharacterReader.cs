using System.Collections.Generic;

namespace Smelly.Code.Core.Readers
{
    internal class SqliteCharacterReader : CharacterReader
    {
        public override IEnumerable<Character> ReadCharacters(string filePath)
        {
            return base.ReadCharacters(filePath);
        }
    }
}