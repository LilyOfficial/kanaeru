let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Kanaeru tadi ketiduran😊* ')
}


handler.tags = ['main']
handler.command = /^(kanaeruon)$/i

handler.admin = true

export default handler