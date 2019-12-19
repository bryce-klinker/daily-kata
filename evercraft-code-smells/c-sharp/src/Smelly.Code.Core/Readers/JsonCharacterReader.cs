using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json.Linq;

namespace Smelly.Code.Core.Readers
{
    internal class JsonCharacterReader : ICharacterReader
    {
        public IEnumerable<Character> ReadCharacters(string filePath)
        {
            var jObject = JObject.Parse(File.ReadAllText(filePath));
            var characters = jObject.Value<JArray>("characters");
            for (var i = 0; i < characters.Count; i++)
            {
                yield return new Character(characters[i].Value<string>("name"), 5, characters[i].Value<int>("arm"),
                    characters[i].Value<int>("str"), characters[i].Value<int>("dex"),
                    characters[i].Value<int>("const"));
            }
        }
    }
}