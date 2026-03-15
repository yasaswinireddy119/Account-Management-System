import supabase from "../config/supabaseClient.js"

export const getBalance = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("balance")
    .eq("id", req.user.id)
    .single()

  if (error) {
    return res.status(400).json({ message: error.message })
  }

  res.json({ balance: data?.balance ?? 0 })
}

export const transferMoney = async (req, res) => {
  const { receiverEmail, amount } = req.body
  const senderId = req.user.id

  if (!receiverEmail || !amount || amount <= 0) {
    return res.status(400).json({ message: "Invalid transfer details" })
  }

  const { data: sender, error: senderError } = await supabase
    .from("users")
    .select("balance")
    .eq("id", senderId)
    .single()

  if (senderError) {
    return res.status(400).json({ message: senderError.message })
  }

  if (!sender || sender.balance === null || sender.balance === undefined) {
    return res.status(404).json({ message: "Sender not found" })
  }

  if (sender.balance < amount) {
    return res.status(400).json({ message: "Insufficient balance" })
  }

  const { data: receiver, error: receiverError } = await supabase
    .from("users")
    .select("id,balance")
    .eq("email", receiverEmail)
    .single()

  if (receiverError) {
    return res.status(400).json({ message: receiverError.message })
  }

  if (!receiver) {
    return res.status(404).json({ message: "Receiver not found" })
  }

  const { error: senderUpdateError } = await supabase
    .from("users")
    .update({ balance: sender.balance - amount })
    .eq("id", senderId)

  if (senderUpdateError) {
    return res.status(500).json({ message: senderUpdateError.message })
  }

  const { error: receiverUpdateError } = await supabase
    .from("users")
    .update({ balance: receiver.balance + amount })
    .eq("id", receiver.id)

  if (receiverUpdateError) {
    return res.status(500).json({ message: receiverUpdateError.message })
  }

  res.json({ message: "Transfer completed" })
}

export const getStatement = async (req, res) => {
  // TODO: implement an actual transaction history table in the database.
  // For now, return an empty list so the frontend doesn't crash.
  res.json([])
}
