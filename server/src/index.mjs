import express from "express"

const app = express()

const events = [
    {
      id: 1,
      title: "Event Title 1",
      time: "10:00 AM",
      date: "2024-03-20",
      location: "Event Location 1",
      price: 10.00
    },
    {
      id: 2,
      title: "Event Title 2",
      time: "8:00 PM",
      date: "2024-03-25",
      location: "Event Location 2",
      price: 15.00
    },
  ];

  app.get("/events/:id", (req, res) => {
    console.log(req.params.id)
    const idEvent = req.params.id
    const parsedId = parseInt(idEvent)
    if(isNaN(idEvent)){return res.status(400)}
    events.find((event) => {
        if(event.id === parsedId){
            return res.send(event)
        }else{
            return res.status(400)
        }

    })
  } )

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})