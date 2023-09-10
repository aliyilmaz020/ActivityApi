const express = require('express')
const mongoose = require('mongoose')
const Events = require('./models/eventsModel')
const app = express()

app.use(express.json())

//routes
app.get('/api/v1', (req, res) => {
  res.send('Hello Node api')
})

app.get('/api/v1/events', async (req, res) => {
  try {
    const events = await Events.find({})
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.get('/api/v1/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Events.findById(id)
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.post('/api/v1/events', async (req, res) => {
  try {
    const events = await Events.create(req.body)
    res.status(200).json(events);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
})

app.put('/api/v1/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Events.findByIdAndUpdate(id, req.body);
    if (!event) {
      return res.status(404).json({ message: 'Cannot find any event with ID ${id}' });
    }
    res.status(200).json(event);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
})

mongoose.
  connect('mongodb+srv://admin:123456789admin@activityapi.3zsqozn.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB ')
    app.listen(3000, () => {
      console.log('Node api app app is running on port 3000')
    })
  })
  .catch((err) => {
    console.log(err)
  })
