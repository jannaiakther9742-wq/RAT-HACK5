from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

TOKEN = "8261779942:AAFaSTvrPPskLjRY1xu_gWAMZh3MIr-hwNM"  # নতুন টোকেন বসাও

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id

    # Google Drive direct video link
    video_url = "https://drive.google.com/uc?export=download&id=1dR_TSaQI5GsfQFsf_syUxr6tV3DPGq1y"

    await context.bot.send_video(
        chat_id=chat_id,
        video=video_url,
        caption="Welcome to the bot 🥵💋"
    )

async def main():
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    await app.run_polling()

import asyncio
asyncio.run(main())