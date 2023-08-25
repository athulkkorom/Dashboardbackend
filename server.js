const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://Dashboard:Dashboard@cluster0.2f8so9t.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
     })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

app.use(cors());
app.use(express.json());

// Define a schema for the data
const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const Data = mongoose.model('Data', dataSchema);

// Define routes to handle CRUD operations
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/endyear', async (req, res) => {
  try {
    const year2018lessData = await Data.find({ end_year: { $gt: 2000, $lt: 2018 } });
    const count2018less = year2018lessData.length;
    const year2018Data = await Data.find({ end_year: '2018' });
    const count2018 = year2018Data.length;
    const year2019Data = await Data.find({ end_year: '2019' });
    const count2019 = year2019Data.length;
    const year2020Data = await Data.find({ end_year: '2020' });
    const count2020 = year2020Data.length;
    const year2021Data = await Data.find({ end_year: '2021' });
    const count2021 = year2021Data.length;
    const year2022Data = await Data.find({ end_year: '2022' });
    const count2022 = year2022Data.length;
    const year2023Data = await Data.find({ end_year: '2023' });
    const count2023 = year2023Data.length;
    const year2024Data = await Data.find({ end_year: '2024' });
    const count2024 = year2024Data.length;
    const year2025Data = await Data.find({ end_year: '2025' });
    const count2025 = year2025Data.length;
    const year2026Data = await Data.find({ end_year: '2026' });
    const count2026 = year2026Data.length;
    const year2027Data = await Data.find({ end_year: '2027' });
    const count2027 = year2027Data.length;
    const year2027greaterData = await Data.find({ end_year: {$gt:2027}});
    const count2027greater = year2027greaterData.length;
    res.json({ count2018less,count2018,count2019,count2020,count2021,count2022,count2023,count2024,count2025,count2026, count2027,count2027greater });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/sector', async (req, res) => { 
  try {
    const energyData = await Data.find({ sector: 'Energy' });
    const governmentData = await Data.find({ sector: 'Government' });
    const aeroData = await Data.find({ sector: 'Aerospace & defence' });
    const envioData = await Data.find({ sector: 'Environment' });
    const finacialData = await Data.find({ sector: 'Financial services' });
    const itData = await Data.find({ sector: 'Information Technology' });
    const countIt = itData.length
    const countFinacial = finacialData.length
    const countEnvio = envioData.length
    const countEnergy = energyData.length;
    const countGovernment = governmentData.length;
    const countAero = aeroData.length
    res.json({ countEnergy, countGovernment,countAero,countEnvio,countFinacial,countIt }); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/sector/region', async (req, res) => { 
  try {
    const energyData = await Data.find({ sector: 'Energy', region: "Northern America" });
    const governmentData = await Data.find({ sector: 'Government', region: "Northern America" });
    const aeroData = await Data.find({ sector: 'Aerospace & defence', region: "Northern America" });
    const envioData = await Data.find({ sector: 'Environment', region: "Northern America" });
    const finacialData = await Data.find({ sector: 'Financial services', region: "Northern America" });
    const itData = await Data.find({ sector: 'Information Technology', region: "Northern America" });
    const countIt1 = itData.length
    const countFinacial1 = finacialData.length
    const countEnvio1 = envioData.length
    const countEnergy1 = energyData.length;
    const countGovernment1 = governmentData.length;
    const countAero1 = aeroData.length
    res.json({ countEnergy1, countGovernment1,countAero1,countEnvio1,countFinacial1,countIt1 }); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/sector/region2', async (req, res) => { 
  try {
    const energyData = await Data.find({ sector: 'Energy', region: "World" });
    const governmentData = await Data.find({ sector: 'Government', region: "World" });
    const aeroData = await Data.find({ sector: 'Aerospace & defence', region: "World" });
    const envioData = await Data.find({ sector: 'Environment', region: "World" });
    const finacialData = await Data.find({ sector: 'Financial services', region: "World" });
    const itData = await Data.find({ sector: 'Information Technology', region: "World" });
    const countIt2 = itData.length
    const countFinacial2 = finacialData.length
    const countEnvio2 = envioData.length
    const countEnergy2 = energyData.length;
    const countGovernment2 = governmentData.length;
    const countAero2 = aeroData.length
    res.json({ countEnergy2, countGovernment2,countAero2,countEnvio2,countFinacial2,countIt2 }); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/topic', async (req, res) => { 
  try {
    const oilData = await Data.find({ topic: 'oil' });
    const gasData = await Data.find({ topic: 'gas' });
    const marketData = await Data.find({ topic: 'market' });
    const consuData = await Data.find({ topic: 'consumption' });
    const produData = await Data.find({ topic: 'production' });
    const expoData = await Data.find({ topic: 'export' });
    const growData = await Data.find({ topic: 'growth' });
    const countGrow = growData.length
    const countExpo = expoData.length
    const countProdu = produData.length
    const countConsu = consuData.length
    const countMarket = marketData.length
    const countGas =gasData.length
    const countOil = oilData.length
    res.json({countOil,countGas,countMarket,countConsu,countProdu,countExpo,countGrow})
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/region', async (req, res) => { 
  try {
    const naData = await Data.find({ region: 'Northern America' });
    const worldData = await Data.find({ region: 'World' });
    const caData = await Data.find({ region: 'Central America' });
    const waData = await Data.find({ region: 'Western Africa' });
    const wasiaData = await Data.find({ region: 'Western Asia' });
    const euData = await Data.find({ region: 'Eastern Europe' });
    const cafricaData = await Data.find({ region: 'Central Africa' });
    const safricaData = await Data.find({ region: 'Southern Africa' });
    const sasiaData = await Data.find({ region: 'Southern Asia' });
    const casiaData = await Data.find({ region: 'Central Asia' });
    const easiaData = await Data.find({ region: 'Eastern Asia' });
    const countEasia = easiaData.length
    const countCasia = casiaData.length
    const countSasia = sasiaData.length
    const countSa = safricaData.length
    const countCafrica = cafricaData.length
    const countEu = euData.length
    const countwasia = wasiaData.length
    const countWa = waData.length
    const countCa = caData.length
    const countWorld = worldData.length
    const countNa = naData.length
  res.json({countNa,countWorld,countCa,countWa,countwasia,countEu,countCafrica,countSa,countSasia,countCasia,countEasia})
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/pestle',async(req,res)=>{
  try{
    const induData = await Data.find({ pestle:"Industries" })
    const envData = await Data.find({ pestle:"Environmental" })
    const ecnData = await Data.find({ pestle:"Economic" })
    const pltData = await Data.find({ pestle:"Political" })
    const countPlt = pltData.length
    const countEcn = ecnData.length
    const countIndu = induData.length
    const countEnv = envData.length
    res.json({countIndu,countEnv,countEcn,countPlt})
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
})
app.get('/api/country',async(req,res)=>{
  try{
    const usaData = await Data.find({ country:"United States of America" })
    const countUsa = usaData.length
   
    res.json({countUsa})
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
})
app.get('/api/source', async (req, res) => {
  try {
    const sourData = await Data.find();
    res.json({ sourData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
