using System.Collections.Generic;
using Microsoft.Data.Sqlite;

namespace Smelly.Code.Core.Readers
{
    internal class SqliteCharacterReader : CsvCharacterReader
    {
        public override IEnumerable<Character> ReadCharacters(string filePath)
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
    }
}