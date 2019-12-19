using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Data.Sqlite;

namespace Smelly.Code.Core.Readers
{
    public interface ICharacterReader
    {
        IEnumerable<Character> ReadCharacters(string filePath);
    }

    public class CsvCharacterReader : ICharacterReader
    {
        public IEnumerable<Character> ReadCharacters(string filePath)
        {
            var lines = File.ReadAllLines(filePath)
                .Skip(1)
                .ToArray();
            for (var i = 0; i < lines.Length; i++)
            {
                var vs = lines[i].Split(',');
                yield return new Character(vs[0], 5, int.Parse(vs[1]), int.Parse(vs[2]), int.Parse(vs[3]),
                    int.Parse(vs[4]));
            }
        }
    }
}