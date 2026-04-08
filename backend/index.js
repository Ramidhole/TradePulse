require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 3002
const uri = process.env.MONGO_URL

// Connect DB first, then start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected")

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`)
    })

  })

  .catch((err) => {
    console.error(" DB connection error:", err)

  })

  
  

