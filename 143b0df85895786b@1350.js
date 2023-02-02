import define1 from "./a33468b95d0b15b0@808.js";

function _1(md){return(
md`# Group Project: Data Analysis and Sketches`
)}

function _2(md){return(
md`As a second step for your project you have to perform an initial data analysis and design sketches for the visualizations that are going to answer the questions you created in your proposal.

1. For each question produce the data you need and display it in a table
2. For each question produce an initial sketch for your visualization

How do you create the sketches?

You can create the sketches in many different ways:
- Hand drawing: with pen and paper or on a tablet
- Drawing software
- Data visualization tools (e.g., Tableau, Matplotlib, etc.)

Note: we personally prefer a more manual approach using hand drawing or drawing software but if you feel more comfortable using an existing data visualization software feel free to use it, just keep in mind that you will eventually have to produce your visualizations in D3).

IMPORTANT: do not copy existing graphs from google images or similar repositories to "give a sense" of which graph you want to use for a given question. Your sketches should refer explicitly to the data you intend to visualize with them. When designing your data visualizations make sure to consider potential limitations in terms of scalability. For instance, if your output includes a 100 time series will you be able to visualize all of them with a line chart?

Follow the template below to produce the document you have to submit for this milestone.`
)}

function _3(md){return(
md`# Formula 1: Insights`
)}

function _untitled(FileAttachment){return(
FileAttachment("Unknown-2").image()
)}

function _5(md){return(
md`## Team Members
-  CHETAN INGLE: [cmi8525@nyu.edu](mailto:cmi8525@nyu.edu)
-  LAKSHANA KOLUR: [lk2719@nyu.edu](mailto:lk2719@nyu.edu)
-  SINDHU BHOOPALAM DINESH: [sb8019@nyu.edu](mailto:sb8019@nyu.edu)`
)}

function _6(md){return(
md`## Data Analysis and Sketches`
)}

function _7(md){return(
md`Data sets used for the project:`
)}

function _circuits(FileAttachment){return(
FileAttachment("circuits.csv").csv({typed: true})
)}

function _10(Inputs,circuits){return(
Inputs.table(circuits)
)}

function _constructor_results(FileAttachment){return(
FileAttachment("constructor_results.csv").csv({typed: true})
)}

function _12(Inputs,constructor_results){return(
Inputs.table(constructor_results)
)}

function _constructor_standings(FileAttachment){return(
FileAttachment("constructor_standings.csv").csv({typed: true})
)}

function _14(Inputs,constructor_standings){return(
Inputs.table(constructor_standings)
)}

function _constructors(FileAttachment){return(
FileAttachment("constructors.csv").csv({typed: true})
)}

function _16(Inputs,constructors){return(
Inputs.table(constructors)
)}

function _driver_standings(FileAttachment){return(
FileAttachment("driver_standings.csv").csv({typed: true})
)}

function _18(Inputs,driver_standings){return(
Inputs.table(driver_standings)
)}

function _drivers(FileAttachment){return(
FileAttachment("drivers.csv").csv({typed: true})
)}

function _20(Inputs,drivers){return(
Inputs.table(drivers)
)}

function _lap_times(FileAttachment){return(
FileAttachment("lap_times.csv").csv({typed: true})
)}

function _22(Inputs,lap_times){return(
Inputs.table(lap_times)
)}

function _pit_stops(FileAttachment){return(
FileAttachment("pit_stops.csv").csv({typed: true})
)}

function _24(Inputs,pit_stops){return(
Inputs.table(pit_stops)
)}

function _qualifying(FileAttachment){return(
FileAttachment("qualifying.csv").csv({typed: true})
)}

function _26(Inputs,qualifying){return(
Inputs.table(qualifying)
)}

function _races(FileAttachment){return(
FileAttachment("races.csv").csv({typed: true})
)}

function _28(Inputs,races){return(
Inputs.table(races)
)}

function _results(FileAttachment){return(
FileAttachment("results.csv").csv({typed: true})
)}

function _30(Inputs,results){return(
Inputs.table(results)
)}

function _sprint_results(FileAttachment){return(
FileAttachment("sprint_results.csv").csv({typed: true})
)}

function _32(Inputs,sprint_results){return(
Inputs.table(sprint_results)
)}

function _status(FileAttachment){return(
FileAttachment("status.csv").csv({typed: true})
)}

function _34(Inputs,status){return(
Inputs.table(status)
)}

function _35(md){return(
md`### Question 1: 

What is the popularity of the game across the world i.e. how are the race circuits distributed across the world? What is the distribution of races held across the circuits?`
)}

function _36(md){return(
md`#### Data Transformation`
)}

function _countries(circuits){return(
[...new Set(circuits.map(d => d.country))]
)}

function _circuits_dist(d3,circuits){return(
d3.rollups(
  circuits,
  d => d.length,
  c => c.country
  )
)}

function _maxCircuits(d3,races_dist){return(
d3.max(races_dist, d => d[1])
)}

function _races_dist(d3,races){return(
d3.rollups(
  races,
  d => d.length,
  c => c.circuitId
  ).sort((a,b) => d3.descending(a[1], b[1]))
)}

function _circuitCountry(d3,circuits){return(
d3.rollup(
  circuits, 
  d => d.length,
  d => d.circuitId, 
  d => d.country
)
)}

function _map(races_dist,circuitCountry){return(
races_dist.map(currentElem=>({'circuitId':currentElem[0],
                                    'numberOfRaces':currentElem[1],
                                    'country':Array.from(circuitCountry.get(currentElem[0]))[0][0]}))
)}

function _color_1(d3,maxCircuits){return(
d3.scaleSequential()
  .domain([0, maxCircuits])
  .interpolator(d3.interpolateReds)
  .unknown('lightgray')
)}

function _45(md){return(
md`#### Sample Sketch `
)}

function _46(legend,color_1){return(
legend({
  color: color_1,
  title: 'Distribution of race circuits around the world'
})
)}

function _q1(FileAttachment){return(
FileAttachment("Q1.png").image()
)}

function _48(md){return(
md`### Question 2: 

Who are the top/most popular drivers over the last few years? `
)}

function _49(md){return(
md`#### Data Transformation`
)}

function _totalPoints(d3,driver_standings){return(
d3.rollups(
  driver_standings, 
  d => d3.sum(d, m => m.points),
  c => c.driverId
).sort((a,b) => d3.descending(a[1],b[1]))
.slice(0,10)
)}

function _topDriverIds(totalPoints){return(
new Set(totalPoints.map(d => d[0]))
)}

function _52(driversCleaned){return(
driversCleaned
)}

function _topDriversAll(driversCleaned,topDriverIds){return(
driversCleaned.filter(d => topDriverIds.has(d.driverId))
)}

function _topDrivers(topDriversAll){return(
new Set(topDriversAll.map(d => d.driverName))
)}

function _55(md){return(
md`#### Sample Sketch`
)}

function _q2(FileAttachment){return(
FileAttachment("Q2@2.png").image()
)}

function _57(md){return(
md`### Question 3:

Which are the top constructors? How does their performance compare on each race circuit?`
)}

function _58(md){return(
md`#### Data Transformation`
)}

function _59(results){return(
results
)}

function _top5(d3,results){return(
d3.rollups(
  results, 
  v => d3.sum(v, d => d.points),
  c => c.constructorId,
  e => e.raceId
)
)}

function _top5constructors(top5){return(
[...new Set(top5.map(d => d[0]))]
)}

function _62(d3,races){return(
d3.rollup(races, g => g, d => d['raceId'])
)}

function _63(md){return(
md`#### Sample Sketch`
)}

function _q3(FileAttachment){return(
FileAttachment("Q3.png").image()
)}

function _65(md){return(
md`Question 4: How does the fastest lap time compare among the race circuits across all years?`
)}

function _circuitsCleaned(circuits){return(
circuits.map(c=>({
  'circuitId' : c.circuitId,
  'circuitName': c.name
}))
)}

function _raceCleaned(races){return(
races.map(r=>({
  'raceId' : r.raceId,
  'circuitId': r.circuitId
}))
)}

function _resultsCleaned(results){return(
results.map(r=>({
  'raceId' : r.raceId,
  'fastestLapTime': r.fastestLapTime
})).filter(d => d.fastestLapTime != "\\N")
)}

function _getRaceIds(raceCleaned){return(
function getRaceIds(circuitId){
  const raceIds = []

  for (let i = 0; i<raceCleaned.length; ++i) {
    if(raceCleaned[i].circuitId === circuitId){
      raceIds.push(raceCleaned[i].raceId)
    }
  }  
  return raceIds
}
)}

function _getFastestLap(resultsCleaned){return(
function getFastestLap(raceId){
  for(let i = 0; i<resultsCleaned.length; i++){
    if(resultsCleaned[i].raceId === raceId){
      return resultsCleaned[i].fastestLapTime
    }
  }
  return "0:00.000"
}
)}

function _getMillis(){return(
function getMillis(lapTime){
  const min = parseInt(lapTime.split(":")[0])
  const sec = parseInt(lapTime.split(":")[1].split(".")[0])
  const msec = parseInt(lapTime.split(":")[1].split(".")[1])
  // console.log(lapTime)
  // console.log(min + " " + sec + " " + msec)
  const millis = min * 60000 + sec*1000 + msec

  return parseInt(millis)
}
)}

function _q4final(circuitsCleaned,getRaceIds,getMillis,getFastestLap,d3)
{
  const data = [];
  let fastestLap = Number.MAX_VALUE
  for(let i = 0; i < circuitsCleaned.length; i++){
    fastestLap = Number.MAX_VALUE
    let raceIds = getRaceIds(circuitsCleaned[i].circuitId)
    
    for (let i = 0; i < raceIds.length; i++) {
      const tempLapTime =getMillis(getFastestLap(raceIds[i]))
      if(tempLapTime != 0 && tempLapTime<fastestLap){
        
        fastestLap = tempLapTime
      }
    }

      if(fastestLap !=Number.MAX_VALUE){
        let circuitDetails = {
          "circuitId" : ""+circuitsCleaned[i].circuitId,
          "circuitName" : circuitsCleaned[i].circuitName,
          "fastestLapTime" : fastestLap/1000
        }
        data.push(circuitDetails)
      }
    
  }
  return data.sort((a,b)=>d3.ascending(a.fastestLapTime,b.fastestLapTime))
}


function _73(Inputs,q4final){return(
Inputs.table(q4final)
)}

function _q4(FileAttachment){return(
FileAttachment("Q4Sample@1.png").image()
)}

function _75(md){return(
md`Question 5: How have the pit stop times changed over the past 5 years for top few teams/constructors?`
)}

function _raceIds(races){return(
races.map(r=>({
  'raceId' : r.raceId,
  'year': r.year
})).filter(x=>x.year>2015)
)}

function _q5RaceIdsSet(raceIds)
{
  const raceIdsSet = new Set()
  raceIds.forEach(x => {
    raceIdsSet.add(x.raceId)
  })
  return raceIdsSet  
}


function _q5constructorMap(constructors)
{
  const constructorMap = new Map()

  constructors.forEach(x=>{
    constructorMap.set(x.constructorId,x.name)
  })
  return constructorMap
}


function _getConstructorId(results,q5constructorMap){return(
function getConstructorId(raceId, driverId){
  let cname = ""

  for(let i =0; i < results.length; i++){
    if(results[i].raceId === raceId && results[i].driverId === driverId){
         return q5constructorMap.get(results[i].constructorId)
    }
  }
}
)}

function _getYear(races){return(
function getYear(raceId){
  for(let i = 0 ; i < races.length; i++){
    if(races[i].raceId === raceId){
      return races[i].year
    }
  }
}
)}

function _pitStopsCleaned(pit_stops,q5RaceIdsSet,getConstructorId,getYear)
{
  let pitStops = []
  pit_stops.forEach(x => {
    if(q5RaceIdsSet.has(x.raceId))
      pitStops.push(x)
  })
  return pitStops.map(c=>({
  'raceId': c.raceId,
  'driverId': c.driverId,
  'duration': c.milliseconds,
  'constructorId' : getConstructorId(c.raceId,c.driverId),
    'year' : getYear(c.raceId)
}))
}


function _pitStopsCleanedNew(pitStopsCleaned)
{
  let temp = [];
  pitStopsCleaned.forEach(x=>{
    if(x.duration < 165000){
      if(x.year != 2022){
        if(x.constructorId != "Manor Marussia"){
          temp.push(x)
        }
      }
    }
  })
  return temp;
}


function _psmap(d3,pitStopsCleanedNew){return(
d3.group(pitStopsCleanedNew, d=>d.constructorId, y=>y.year)
)}

function _psKeys(psmap){return(
Array.from( psmap.keys() )
)}

function _formatDecimal(d3){return(
d3.format(".2f")
)}

function _pitStopsData(psKeys,psmap,formatDecimal,d3)
{
  let pitStopsFlat = []
  psKeys.forEach(x => {
    let yearsMap = psmap.get(x)
    let yearKeys = Array.from( yearsMap.keys() );
    yearKeys.forEach(y=>{
      let t = yearsMap.get(y)
      // console.log(x + " "+ y + " " +formatDecimal(d3.mean(t, d => d.duration)))
      // let tempo = {
        
      // }

      pitStopsFlat.push({
        "constructor": x,
        "year": ""+y,
        "average_pitstop(milliseconds)": formatDecimal(d3.mean(t, d => d.duration))
      })
      
    })
  })
  return pitStopsFlat
}


function _87(Inputs,pitStopsData){return(
Inputs.table(pitStopsData)
)}

function _psmap1(d3,results){return(
d3.group(results, d=>d.constructorId)
)}

function _q5(FileAttachment){return(
FileAttachment("Q5Sample@2.png").image()
)}

function _90(md){return(
md`Question 6: For the top few drivers who have switched teams, how does their performance compare with each team that they have been in?`
)}

function _driverMap(drivers)
{
  let map = new Map()

  drivers.forEach(x=>{
    map.set(x.driverId, x.forename+" "+x.surname)
  })
  return map
}


function _getDriverName(driverMap){return(
function getDriverName(driverId) {
  return driverMap.get(driverId)
}
)}

function _getConstructorName(q5constructorMap){return(
function getConstructorName(constructorId) {
  return q5constructorMap.get(constructorId)
}
)}

function _driversCleaned(results,getDriverName,getConstructorName,getYear)
{
  let drvCleand = []

  results.forEach(x=>{
    let temp = {
      'driverId': x.driverId,
      'driverName': getDriverName(x.driverId),
      'constructorId': x.constructorId,
      'constructorName': getConstructorName(x.constructorId),
      'position': x.position,
      'year': getYear(x.raceId)
    }
    if(x.position != "\\N"){
      drvCleand.push(temp)
    }
  })
  return drvCleand
}


function _driversHistory(d3,driversCleaned){return(
d3.group(driversCleaned, d => d.driverName, c => c.constructorName, y => y.year)
)}

function _driverKeys(driversHistory){return(
Array.from( driversHistory.keys() )
)}

function _driversWhoSwitched(driverKeys,driversHistory)
{
  let temp = []
  driverKeys.forEach(x=>{
    if(driversHistory.get(x).size>=2){
      temp.push(x)
    }
  })
  return temp
}


function _q6final(driversWhoSwitched,driversHistory,d3,formatDecimal)
{
  let temp = []
  driversWhoSwitched.forEach(driver=>{
    let tempConstructors = driversHistory.get(driver)
    let tempConstructorKeys = Array.from(tempConstructors.keys())

    tempConstructorKeys.forEach(constructor=>{
  
    let yearMap = tempConstructors.get(constructor)
    let years = Array.from(yearMap.keys())
    let positions = []
  
    years.forEach(y=>{
      let season = yearMap.get(y)
      season.forEach(s=>{
        positions.push(s.position)
      })  
    })
    let bestAchieved = d3.min(positions)
    let meanAcheived = d3.mean(positions)

      let obj = {
        'driver': driver,
        'constructor': constructor,
        'best_Position': ""+bestAchieved,
        'mean_Position': formatDecimal(meanAcheived)
      }

      temp.push(obj)
})

    
  })
  return temp
}


function _q6Const(d3,q6final){return(
d3.group(q6final, d=>d.constructor)
)}

function _100(Inputs,q6final){return(
Inputs.table(q6final)
)}

function _q6(FileAttachment){return(
FileAttachment("Q6Sample@2.png").image()
)}

function _102(md){return(
md`### Question 7: 
What does the points progression look like for each driver & constructor throughout the season?`
)}

function _103(md){return(
md`#### Data Transformation`
)}

function _raceIds2021Set(races){return(
new Set(races.filter(d=>d.year==2021).map(d=>d.raceId))
)}

function _raceResults2021(results,raceIds2021Set)
{
  let raceRec = []
  results.forEach( r=> {
    if(raceIds2021Set.has(r.raceId))
      raceRec.push(r)
  })
  return raceRec.map(r=>({
    'resultId' : r.resultId,
    'raceId': r.raceId,
    'driverId': r.driverId,
    'constructorId' : r.constructorId,
    'points' : r.points,
    'position' : r.rank,
    'laps' : r.laps,
    'grid' : r.grid
  }))    
}


function _drivers2021(raceResults2021,driverMapRev){return(
new Set(raceResults2021.map(d=>d.driverId).filter(d=>d!==driverMapRev.get("Robert Kubica")))
)}

function _q7data(drivers2021,driverMap,accumulate,raceResults2021)
{
  let pointsProg = []
  drivers2021.forEach( dr=> {
    pointsProg.push({driver:driverMap.get(dr),cumulativePoints:accumulate(raceResults2021.filter(d=>d.driverId==dr).map(d=>({'raceId':d.raceId,'points':d.points})).sort((a,b) => a.raceId - b.raceId).map(d=>d.points))})  
  })
  return  pointsProg
}


function _108(Inputs,q7data){return(
Inputs.table(q7data)
)}

function _109(md){return(
md`#### Sample Sketch
Interactive Multiline Chart`
)}

function _110(md){return(
md`Choose Race from Menu`
)}

function _menu7(FileAttachment){return(
FileAttachment("menu.JPG").image()
)}

function _q7(FileAttachment){return(
FileAttachment("Q7@2.png").image()
)}

function _113(md){return(
md`### Question 8: 
What are total wins, podiums, DNFs( Did Not Finish ), laps driven for each driver?`
)}

function _114(md){return(
md`#### Data Transformation`
)}

function _115(md){return(
md`Wins`
)}

function _wins(d3,raceResults2021,driverMap){return(
d3.rollups(
  raceResults2021.filter(d=>d.position==1),
  g=>g.length,
  d=>d.driverId
  ).map(d=>({'driver':driverMap.get(d[0]),'wins':d[1]}))
)}

function _117(Inputs,wins){return(
Inputs.table(wins)
)}

function _118(md){return(
md`Podiums`
)}

function _podiums(d3,raceResults2021,driverMap){return(
d3.rollups(
  raceResults2021.filter(d=>{return d.position === 1 || d.position === 2 || d.position === 3;}),
  g=>g.length,
  d=>d.driverId
  ).map(d=>({'driver':driverMap.get(d[0]),'podiums':d[1]}))
)}

function _120(Inputs,podiums){return(
Inputs.table(podiums)
)}

function _121(md){return(
md`DNFs`
)}

function _finPos(){return(
new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
)}

function _DNFs(d3,raceResults2021,finPos,driverMap){return(
d3.rollups(
  raceResults2021.filter(d=>!finPos.has(d.position)),
  g=>g.length,
  d=>d.driverId
  ).map(d=>({'driver':driverMap.get(d[0]),'DNFs':d[1]}))
)}

function _124(Inputs,DNFs){return(
Inputs.table(DNFs)
)}

function _125(md){return(
md`Laps Driven`
)}

function _laps(d3,raceResults2021,driverMap){return(
d3.rollups(
  raceResults2021,
  g=>d3.sum(g, d => d.laps),
  d=>d.driverId
  ).map(d=>({'driver':driverMap.get(d[0]),'laps':d[1]}))
)}

function _127(Inputs,laps){return(
Inputs.table(laps)
)}

function _128(md){return(
md`#### Sample Sketch
Interactive Pie Chart`
)}

function _129(md){return(
md`Choose - Wins, Podiums, DNFs, Laps`
)}

function _menu8(FileAttachment){return(
FileAttachment("menu.JPG").image()
)}

function _q8(FileAttachment){return(
FileAttachment("Q8.png").image()
)}

function _132(md){return(
md`### Question 9: 
What does the points gap look like for the top 2 drivers after each race? More specifically, how did it look for Max Verstappen and Lewis Hamilton?`
)}

function _133(md){return(
md`#### Data Transformation`
)}

function _raceNamesMap(races)
{
  let map = new Map()

  races.forEach(x=>{
    map.set(x.raceId, x.name)
  })
  return map
}


function _driverMapRev(drivers)
{
  let map = new Map()

  drivers.forEach(x=>{
    map.set(x.forename+" "+x.surname, x.driverId)
  })
  return map
}


function _lHam(raceResults2021,driverMapRev){return(
raceResults2021.filter(d=>d.driverId==driverMapRev.get("Lewis Hamilton")).map(d=>({'raceId':d.raceId,'points':d.points})).sort((a,b) => a.raceId - b.raceId).map(d=>d.points)
)}

function _137(lHam){return(
lHam[9] +=2
)}

function _138(lHam){return(
lHam
)}

function _mVer(raceResults2021,driverMapRev){return(
raceResults2021.filter(d=>d.driverId==driverMapRev.get("Max Verstappen")).map(d=>({'raceId':d.raceId,'points':d.points})).sort((a,b) => a.raceId - b.raceId).map(d=>d.points)
)}

function _140(mVer){return(
mVer[9] += 3
)}

function _141(mVer){return(
mVer[13] += 2
)}

function _142(mVer){return(
mVer[18] += 2
)}

function _143(mVer){return(
mVer
)}

function _accumulate(){return(
arr => arr.map((sum => value => sum += value)(0))
)}

function _mVerCuSum(accumulate,mVer){return(
accumulate(mVer)
)}

function _lHamCuSum(accumulate,lHam){return(
accumulate(lHam)
)}

function _diff(){return(
(arr1, arr2) => {
   const res = [];
   for(let i = 0; i < arr1.length; i++){
      const el = (arr1[i] || 0) - (arr2[i] || 0);
      res[i] = el;
   };
   return res;
}
)}

function _diffPts(diff,mVerCuSum,lHamCuSum){return(
diff(mVerCuSum,lHamCuSum)
)}

function _racesOrder(raceResults2021){return(
new Set(raceResults2021.map(d=>d.raceId).sort((a,b) => a.raceId - b.raceId))
)}

function _q9datafinal(racesOrder,raceNamesMap,diffPts)
{
  let res = []
  let i = 0
  racesOrder.forEach( d=> {
    res.push({race:raceNamesMap.get(d),diff:diffPts[i]})
    i = i+1
  })
  return res
}


function _151(Inputs,q9datafinal){return(
Inputs.table(q9datafinal)
)}

function _152(md){return(
md`#### Sample Sketch`
)}

function _q9(FileAttachment){return(
FileAttachment("Q9.JPG").image()
)}

function _154(md){return(
md`### Question 10: 
How did their pole positions affect their race standings?`
)}

function _155(md){return(
md`#### Data Transformation`
)}

function _top10Pos(){return(
new Set([1,2,3,4,5,6,7,8,9,10])
)}

function _top10(raceResults2021,top10Pos){return(
raceResults2021.filter(d=>top10Pos.has(d.position)).map(d=>({'raceId':d.raceId,'start':d.grid,'finish':d.position}))
)}

function _q10data(d3,top10,raceNamesMap){return(
d3.group(
  top10,
  d=>raceNamesMap.get(d.raceId)
)
)}

function _159(Inputs,q10data){return(
Inputs.table(q10data.get("Bahrain Grand Prix"))
)}

function _160(md){return(
md`#### Sample Sketch
Interactive Scatter Plot`
)}

function _161(md){return(
md`Choose Race `
)}

function _menu10(FileAttachment){return(
FileAttachment("menu.JPG").image()
)}

function _q10(FileAttachment){return(
FileAttachment("Q10.png").image()
)}

function _164(md){return(
md`### Question 11
Its not enough to win the race, scoring points is equally important. Which drivers consistently scored points for their teams?`
)}

function _165(md){return(
md`#### Data Transformation`
)}

function _allRes(d3,results){return(
d3.rollup(
  results,
  g=>d3.sum(g, d=>d.points),
  d=>d.driverId,
  d=>d.constructorId
  )
)}

function _top_10_constructors(d3,results){return(
d3.rollups(
  results,
  g=>d3.sum(g, d=>d.points),
  d=>d.constructorId
).sort((a,b)=>d3.descending(a[1],b[1])).slice(0,10).map(d=>d[0])
)}

function _top_20_drivers(d3,results){return(
d3.rollups(
  results,   
  g=>d3.sum(g,d=>d.points),
  d=>d.driverId
).sort((a,b)=>d3.descending(a[1],b[1]))
.slice(0,20)
.map(d=>d[0])
)}

function _viz_data11(d3,top_20_drivers,top_10_constructors,allRes){return(
d3.cross(top_20_drivers,top_10_constructors).map(d=>({'Drivers':d[0],'Constructors':d[1],'points':allRes.has(d[0])?  allRes.get(d[0]).has(d[1]) ?allRes.get(d[0]).get(d[1]):0:0}))
)}

function _170(Inputs,viz_data11){return(
Inputs.table(viz_data11)
)}

function _171(md){return(
md`#### Sample Sketch`
)}

function _172(md){return(
md`Points`
)}

function _q11_legend(FileAttachment){return(
FileAttachment("Q11-legend.JPG").image()
)}

function _q11(FileAttachment){return(
FileAttachment("Q11.JPG").image()
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Unknown-2", {url: new URL("./files/6c1e7d35435a4b6aa86d7a62306febd864b594c31c7f96391875a36b862e25cf91e8101ad3083109a186c0c63936b5f08d4de9f70dd9b2cbd0aa81b8fb288169.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["circuits.csv", {url: new URL("./files/a7e9addafea85725524d19144896db63ad07e51a6b8ec4242a25194f8f4a36ce8d18a5aab878a553c9f84deb1acff3b56d6c48409706ec7c2ba6a944c04f3832.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["sprint_results.csv", {url: new URL("./files/b3aee9341a2852f214c57725be44d16da99434f9b36fd171083e38a59b77a1d067429950433546fea6113b14e6613225a98da2e434edbefbd504677687a64eba.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["status.csv", {url: new URL("./files/bfea2a39331c3339e366bb2185ecc479440f4375d662208c3e6fde6e808670af06596e0d7a67c232125e158ea6c8fa8f1a4222b6524ecb1c5f32010876ede0fa.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["constructors.csv", {url: new URL("./files/23850caf6a8bcbd45f8e0b34379d6090d7556efc6d80ded17ff5207fc81ff73556dea7feedfea9475e2e6fa9e90cbe90739767ef1686516ed5ffaba2a22cadc7.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["drivers.csv", {url: new URL("./files/6120a6a4ed795214ae1e47d1993e9ba9b173654ed93facbaf902110d332d361772ee17a8f58005a588a5cf18e780aa8c5382d8ddb9ace3e16cbd300bfc95632c.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["races.csv", {url: new URL("./files/a350f9bcab2f641789998157c6d9829297be3f13d4a7e46c23d253a799e761e3b737c5d8a7871faba0cfa6e99af977a3879000d693474856ba63127622205164.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["constructor_results.csv", {url: new URL("./files/6a582af8019604a5c9794b909e7be6e7f77325b8b7f3d256d81e8d6a2e49281949f80d24a4968db8ccc48bb73549c5159c2656903a8e1646076047fb0a39419f.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["constructor_standings.csv", {url: new URL("./files/a18867049fc6cfb6d81ac55b817111f2c4b1bdd20cbf2d17ae47bc5e82993dd87f509f9775b6587d59aa84e00e666409573bb7bd2680a86c3231bcecf29563b3.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["pit_stops.csv", {url: new URL("./files/7fc1c58216d6d5c5789c8d6d949ba04b990e95d04c80f95390121911204bc3a0244cf425db842d9d7898962942718270ab91cd7b081125ef093a4d0df0bb2da7.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["qualifying.csv", {url: new URL("./files/d27889237a90c77942a9d70074481df8a645de7b8f85997daed746564f2a352dc4581666b1d8d872d312c0173c18d024e5cb574e81cb7981b6d305002aca90e1.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["driver_standings.csv", {url: new URL("./files/cc0e657dd0c70c31aee5c74cb95e53261f7f21902befec136d5029831034247d25da0974984ffac34c9777bc0832e68566cd3c81411eaf638542f1588bbb2b3e.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["results.csv", {url: new URL("./files/d092564df5593b6465dd4176317681c95016fbe8670a0a103959b2fd3440f223742305666a14d1c4d6d2a4c4ab66a460a2a088b0609ef81a359fe33e0287288a.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["lap_times.csv", {url: new URL("./files/1007998b75a671e8d9cd074b9045da6658cc9df0e2105b5bc351186238ffb5cabd4f4ef9f3c3af7e1476ec827d1750b062381774274a14c7052f96274a6e4be9.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Q7@2.png", {url: new URL("./files/3f886f2dd365a398d114bee635e99befdf67eaa0dae07f54adad9843c9c040d6303b899bbc826419e9669d31c1d9746267dcb2050c6c0da350148d9418d57ace.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q5Sample@2.png", {url: new URL("./files/3b7ee3ded8ceda6a0708b7737aecb614533246451a61749d0cd6d068f160ea21f8a077f76cfa1676cbf032146e3176083f3d6dbff870a348f5a79e5fa47227d9.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q9.JPG", {url: new URL("./files/e45647feca50d40dfb9872dd523ff6784d48e6a628f9dcfd01cbe9d9804463b7c38ce88b13e571e0531fd3d471785b7e72331a8b5692f3c057d97993ef3b6867.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["Q1.png", {url: new URL("./files/cca59cce04b9667a72c2eb35b9005f3e521fe43b5b050ef78454eb5677c06693daba4496acfd6f261ee42967f27361229afd46123ac41a7fb0208cece85d842c.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q3.png", {url: new URL("./files/827490cb7730b0447453205e56fb508cb896a6508951aca7daffefc5405f005e77082df7c5c3eb6e2cc8c3b17c1bba86b07a8ed280ba765b936d2adbeb8e48a6.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q2@2.png", {url: new URL("./files/7fb2cc008f6f31169d15e1000d79a646f5b9092c7838b55599bd86cf1eaa3c0c57668387a300a0573462cb9051928e56b7f46d5951c840eef813c1cd40c77f38.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q11.JPG", {url: new URL("./files/325556a86e04e892934f642e069d16a32ada1fd9039dc7e0e5a08eb7ee8a766514f4218e98eafe153494af8c15be64222b1ea99228aedc1d3e4c2c6970fe2325.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["Q11-legend.JPG", {url: new URL("./files/1b253e3663a9d77ba0de9cb8363fec1806102aa31bef22bfcbf45c5dd1b569125c613dbab5ac474c453f1f6c3e9dd6bc85b3cce23260897bc0ba99a25421b3d9.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["menu.JPG", {url: new URL("./files/ea153753df90d23f7460cb1360db2e8a0d4d81abbd716071947ca88e24a8a9e38a54b8808715ddb5784a0e326871008ede4d79e64e6086827f3326e01f6f7142.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["Q8.png", {url: new URL("./files/efe33904dd2699ee642270d0faa9b4a89070a3865b378e2f582bf771a0f386277bd2040c970279620b528e617cd49609e74b734815bd458e4fb0cf85af0b5377.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q10.png", {url: new URL("./files/d1b67bc45b870664f8610fe2f6239a9b0024ddf7f4d0dd92585996bf3c49f5e823a99c37be13e2b825ee056c5d74735a4f06cc3fb9e605fd11cc7bec2d05ed0c.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q6Sample@2.png", {url: new URL("./files/a894bb08117384c5181b9841fdc30d1c83eab521581c400370f4b8940f796bcd874c976d7995ebc9df0637a28674298c686c04eec7e7a098e96007c8243f4de7.png", import.meta.url), mimeType: "image/png", toString}],
    ["Q4Sample@1.png", {url: new URL("./files/be07d3f37e0265caff066d4ce2793bc81c408ca137040d63285cc77b8ca4daf53e65447e16864a388117e5f96d765a2e322687416543bf5e310c68a40536c072.png", import.meta.url), mimeType: "image/png", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("untitled")).define("untitled", ["FileAttachment"], _untitled);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("circuits")).define("circuits", ["FileAttachment"], _circuits);
  main.variable(observer()).define(["Inputs","circuits"], _10);
  main.variable(observer("constructor_results")).define("constructor_results", ["FileAttachment"], _constructor_results);
  main.variable(observer()).define(["Inputs","constructor_results"], _12);
  main.variable(observer("constructor_standings")).define("constructor_standings", ["FileAttachment"], _constructor_standings);
  main.variable(observer()).define(["Inputs","constructor_standings"], _14);
  main.variable(observer("constructors")).define("constructors", ["FileAttachment"], _constructors);
  main.variable(observer()).define(["Inputs","constructors"], _16);
  main.variable(observer("driver_standings")).define("driver_standings", ["FileAttachment"], _driver_standings);
  main.variable(observer()).define(["Inputs","driver_standings"], _18);
  main.variable(observer("drivers")).define("drivers", ["FileAttachment"], _drivers);
  main.variable(observer()).define(["Inputs","drivers"], _20);
  main.variable(observer("lap_times")).define("lap_times", ["FileAttachment"], _lap_times);
  main.variable(observer()).define(["Inputs","lap_times"], _22);
  main.variable(observer("pit_stops")).define("pit_stops", ["FileAttachment"], _pit_stops);
  main.variable(observer()).define(["Inputs","pit_stops"], _24);
  main.variable(observer("qualifying")).define("qualifying", ["FileAttachment"], _qualifying);
  main.variable(observer()).define(["Inputs","qualifying"], _26);
  main.variable(observer("races")).define("races", ["FileAttachment"], _races);
  main.variable(observer()).define(["Inputs","races"], _28);
  main.variable(observer("results")).define("results", ["FileAttachment"], _results);
  main.variable(observer()).define(["Inputs","results"], _30);
  main.variable(observer("sprint_results")).define("sprint_results", ["FileAttachment"], _sprint_results);
  main.variable(observer()).define(["Inputs","sprint_results"], _32);
  main.variable(observer("status")).define("status", ["FileAttachment"], _status);
  main.variable(observer()).define(["Inputs","status"], _34);
  main.variable(observer()).define(["md"], _35);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer("countries")).define("countries", ["circuits"], _countries);
  main.variable(observer("circuits_dist")).define("circuits_dist", ["d3","circuits"], _circuits_dist);
  main.variable(observer("maxCircuits")).define("maxCircuits", ["d3","races_dist"], _maxCircuits);
  main.variable(observer("races_dist")).define("races_dist", ["d3","races"], _races_dist);
  main.variable(observer("circuitCountry")).define("circuitCountry", ["d3","circuits"], _circuitCountry);
  main.variable(observer("map")).define("map", ["races_dist","circuitCountry"], _map);
  main.variable(observer("color_1")).define("color_1", ["d3","maxCircuits"], _color_1);
  const child1 = runtime.module(define1);
  main.import("legend", child1);
  main.variable(observer()).define(["md"], _45);
  main.variable(observer()).define(["legend","color_1"], _46);
  main.variable(observer("q1")).define("q1", ["FileAttachment"], _q1);
  main.variable(observer()).define(["md"], _48);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer("totalPoints")).define("totalPoints", ["d3","driver_standings"], _totalPoints);
  main.variable(observer("topDriverIds")).define("topDriverIds", ["totalPoints"], _topDriverIds);
  main.variable(observer()).define(["driversCleaned"], _52);
  main.variable(observer("topDriversAll")).define("topDriversAll", ["driversCleaned","topDriverIds"], _topDriversAll);
  main.variable(observer("topDrivers")).define("topDrivers", ["topDriversAll"], _topDrivers);
  main.variable(observer()).define(["md"], _55);
  main.variable(observer("q2")).define("q2", ["FileAttachment"], _q2);
  main.variable(observer()).define(["md"], _57);
  main.variable(observer()).define(["md"], _58);
  main.variable(observer()).define(["results"], _59);
  main.variable(observer("top5")).define("top5", ["d3","results"], _top5);
  main.variable(observer("top5constructors")).define("top5constructors", ["top5"], _top5constructors);
  main.variable(observer()).define(["d3","races"], _62);
  main.variable(observer()).define(["md"], _63);
  main.variable(observer("q3")).define("q3", ["FileAttachment"], _q3);
  main.variable(observer()).define(["md"], _65);
  main.variable(observer("circuitsCleaned")).define("circuitsCleaned", ["circuits"], _circuitsCleaned);
  main.variable(observer("raceCleaned")).define("raceCleaned", ["races"], _raceCleaned);
  main.variable(observer("resultsCleaned")).define("resultsCleaned", ["results"], _resultsCleaned);
  main.variable(observer("getRaceIds")).define("getRaceIds", ["raceCleaned"], _getRaceIds);
  main.variable(observer("getFastestLap")).define("getFastestLap", ["resultsCleaned"], _getFastestLap);
  main.variable(observer("getMillis")).define("getMillis", _getMillis);
  main.variable(observer("q4final")).define("q4final", ["circuitsCleaned","getRaceIds","getMillis","getFastestLap","d3"], _q4final);
  main.variable(observer()).define(["Inputs","q4final"], _73);
  main.variable(observer("q4")).define("q4", ["FileAttachment"], _q4);
  main.variable(observer()).define(["md"], _75);
  main.variable(observer("raceIds")).define("raceIds", ["races"], _raceIds);
  main.variable(observer("q5RaceIdsSet")).define("q5RaceIdsSet", ["raceIds"], _q5RaceIdsSet);
  main.variable(observer("q5constructorMap")).define("q5constructorMap", ["constructors"], _q5constructorMap);
  main.variable(observer("getConstructorId")).define("getConstructorId", ["results","q5constructorMap"], _getConstructorId);
  main.variable(observer("getYear")).define("getYear", ["races"], _getYear);
  main.variable(observer("pitStopsCleaned")).define("pitStopsCleaned", ["pit_stops","q5RaceIdsSet","getConstructorId","getYear"], _pitStopsCleaned);
  main.variable(observer("pitStopsCleanedNew")).define("pitStopsCleanedNew", ["pitStopsCleaned"], _pitStopsCleanedNew);
  main.variable(observer("psmap")).define("psmap", ["d3","pitStopsCleanedNew"], _psmap);
  main.variable(observer("psKeys")).define("psKeys", ["psmap"], _psKeys);
  main.variable(observer("formatDecimal")).define("formatDecimal", ["d3"], _formatDecimal);
  main.variable(observer("pitStopsData")).define("pitStopsData", ["psKeys","psmap","formatDecimal","d3"], _pitStopsData);
  main.variable(observer()).define(["Inputs","pitStopsData"], _87);
  main.variable(observer("psmap1")).define("psmap1", ["d3","results"], _psmap1);
  main.variable(observer("q5")).define("q5", ["FileAttachment"], _q5);
  main.variable(observer()).define(["md"], _90);
  main.variable(observer("driverMap")).define("driverMap", ["drivers"], _driverMap);
  main.variable(observer("getDriverName")).define("getDriverName", ["driverMap"], _getDriverName);
  main.variable(observer("getConstructorName")).define("getConstructorName", ["q5constructorMap"], _getConstructorName);
  main.variable(observer("driversCleaned")).define("driversCleaned", ["results","getDriverName","getConstructorName","getYear"], _driversCleaned);
  main.variable(observer("driversHistory")).define("driversHistory", ["d3","driversCleaned"], _driversHistory);
  main.variable(observer("driverKeys")).define("driverKeys", ["driversHistory"], _driverKeys);
  main.variable(observer("driversWhoSwitched")).define("driversWhoSwitched", ["driverKeys","driversHistory"], _driversWhoSwitched);
  main.variable(observer("q6final")).define("q6final", ["driversWhoSwitched","driversHistory","d3","formatDecimal"], _q6final);
  main.variable(observer("q6Const")).define("q6Const", ["d3","q6final"], _q6Const);
  main.variable(observer()).define(["Inputs","q6final"], _100);
  main.variable(observer("q6")).define("q6", ["FileAttachment"], _q6);
  main.variable(observer()).define(["md"], _102);
  main.variable(observer()).define(["md"], _103);
  main.variable(observer("raceIds2021Set")).define("raceIds2021Set", ["races"], _raceIds2021Set);
  main.variable(observer("raceResults2021")).define("raceResults2021", ["results","raceIds2021Set"], _raceResults2021);
  main.variable(observer("drivers2021")).define("drivers2021", ["raceResults2021","driverMapRev"], _drivers2021);
  main.variable(observer("q7data")).define("q7data", ["drivers2021","driverMap","accumulate","raceResults2021"], _q7data);
  main.variable(observer()).define(["Inputs","q7data"], _108);
  main.variable(observer()).define(["md"], _109);
  main.variable(observer()).define(["md"], _110);
  main.variable(observer("menu7")).define("menu7", ["FileAttachment"], _menu7);
  main.variable(observer("q7")).define("q7", ["FileAttachment"], _q7);
  main.variable(observer()).define(["md"], _113);
  main.variable(observer()).define(["md"], _114);
  main.variable(observer()).define(["md"], _115);
  main.variable(observer("wins")).define("wins", ["d3","raceResults2021","driverMap"], _wins);
  main.variable(observer()).define(["Inputs","wins"], _117);
  main.variable(observer()).define(["md"], _118);
  main.variable(observer("podiums")).define("podiums", ["d3","raceResults2021","driverMap"], _podiums);
  main.variable(observer()).define(["Inputs","podiums"], _120);
  main.variable(observer()).define(["md"], _121);
  main.variable(observer("finPos")).define("finPos", _finPos);
  main.variable(observer("DNFs")).define("DNFs", ["d3","raceResults2021","finPos","driverMap"], _DNFs);
  main.variable(observer()).define(["Inputs","DNFs"], _124);
  main.variable(observer()).define(["md"], _125);
  main.variable(observer("laps")).define("laps", ["d3","raceResults2021","driverMap"], _laps);
  main.variable(observer()).define(["Inputs","laps"], _127);
  main.variable(observer()).define(["md"], _128);
  main.variable(observer()).define(["md"], _129);
  main.variable(observer("menu8")).define("menu8", ["FileAttachment"], _menu8);
  main.variable(observer("q8")).define("q8", ["FileAttachment"], _q8);
  main.variable(observer()).define(["md"], _132);
  main.variable(observer()).define(["md"], _133);
  main.variable(observer("raceNamesMap")).define("raceNamesMap", ["races"], _raceNamesMap);
  main.variable(observer("driverMapRev")).define("driverMapRev", ["drivers"], _driverMapRev);
  main.variable(observer("lHam")).define("lHam", ["raceResults2021","driverMapRev"], _lHam);
  main.variable(observer()).define(["lHam"], _137);
  main.variable(observer()).define(["lHam"], _138);
  main.variable(observer("mVer")).define("mVer", ["raceResults2021","driverMapRev"], _mVer);
  main.variable(observer()).define(["mVer"], _140);
  main.variable(observer()).define(["mVer"], _141);
  main.variable(observer()).define(["mVer"], _142);
  main.variable(observer()).define(["mVer"], _143);
  main.variable(observer("accumulate")).define("accumulate", _accumulate);
  main.variable(observer("mVerCuSum")).define("mVerCuSum", ["accumulate","mVer"], _mVerCuSum);
  main.variable(observer("lHamCuSum")).define("lHamCuSum", ["accumulate","lHam"], _lHamCuSum);
  main.variable(observer("diff")).define("diff", _diff);
  main.variable(observer("diffPts")).define("diffPts", ["diff","mVerCuSum","lHamCuSum"], _diffPts);
  main.variable(observer("racesOrder")).define("racesOrder", ["raceResults2021"], _racesOrder);
  main.variable(observer("q9datafinal")).define("q9datafinal", ["racesOrder","raceNamesMap","diffPts"], _q9datafinal);
  main.variable(observer()).define(["Inputs","q9datafinal"], _151);
  main.variable(observer()).define(["md"], _152);
  main.variable(observer("q9")).define("q9", ["FileAttachment"], _q9);
  main.variable(observer()).define(["md"], _154);
  main.variable(observer()).define(["md"], _155);
  main.variable(observer("top10Pos")).define("top10Pos", _top10Pos);
  main.variable(observer("top10")).define("top10", ["raceResults2021","top10Pos"], _top10);
  main.variable(observer("q10data")).define("q10data", ["d3","top10","raceNamesMap"], _q10data);
  main.variable(observer()).define(["Inputs","q10data"], _159);
  main.variable(observer()).define(["md"], _160);
  main.variable(observer()).define(["md"], _161);
  main.variable(observer("menu10")).define("menu10", ["FileAttachment"], _menu10);
  main.variable(observer("q10")).define("q10", ["FileAttachment"], _q10);
  main.variable(observer()).define(["md"], _164);
  main.variable(observer()).define(["md"], _165);
  main.variable(observer("allRes")).define("allRes", ["d3","results"], _allRes);
  main.variable(observer("top_10_constructors")).define("top_10_constructors", ["d3","results"], _top_10_constructors);
  main.variable(observer("top_20_drivers")).define("top_20_drivers", ["d3","results"], _top_20_drivers);
  main.variable(observer("viz_data11")).define("viz_data11", ["d3","top_20_drivers","top_10_constructors","allRes"], _viz_data11);
  main.variable(observer()).define(["Inputs","viz_data11"], _170);
  main.variable(observer()).define(["md"], _171);
  main.variable(observer()).define(["md"], _172);
  main.variable(observer("q11_legend")).define("q11_legend", ["FileAttachment"], _q11_legend);
  main.variable(observer("q11")).define("q11", ["FileAttachment"], _q11);
  return main;
}
