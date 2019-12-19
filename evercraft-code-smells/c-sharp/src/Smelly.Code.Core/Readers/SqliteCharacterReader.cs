using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Data.Sqlite;

namespace Smelly.Code.Core.Readers
{
    internal class SqliteCharacterReader : CharacterReader
    {
        public override IEnumerable<Character> ReadCharacters(string filePath)
        {
            if (filePath.EndsWith(".db"))
            {
                using (var connection = new SqliteConnection($"Data Source={filePath}"))
                {
                    connection.Open();

                    var selectCharactersText = "select [Name], Armor, Str, Dex, Const from [Characters]";
                    using (var command = new SqliteCommand(selectCharactersText, connection))
                    {
                        using (var reader = command.ExecuteReader())
                        {
                            var current = 0;
                            while (reader.Read())
                            {
                                yield return new Character(reader.GetFieldValue<string>(0), 5,
                                    reader.GetFieldValue<int>(1), reader.GetFieldValue<int>(2),
                                    reader.GetFieldValue<int>(3),
                                    reader.GetFieldValue<int>(4));
                                current = current + 1;
                            }
                        }
                    }
                }
            }
            else
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
}