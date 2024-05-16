import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "あなたは日本の童話を語ってくれるアシスタントです。",
      },
      {
        role: "user",
        content: "桃太郎の話を聞きたいです。",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices);
}

main();
