const express = require('express');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, './src/FrontEnd/public/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/FrontEnd/veiw/index.html'));
})

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/FrontEnd/veiw/search.html'));
})




const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});