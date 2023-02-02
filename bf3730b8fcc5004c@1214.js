import define1 from "./143b0df85895786b@1350.js";
import define2 from "./64e74b1cb96692d4@377.js";
import define3 from "./94ec6a96c46fc206@1730.js";
import define4 from "./0a1edcdbbfea1bbe@1458.js";
import define5 from "./a33468b95d0b15b0@808.js";
import define6 from "./50064204b82fdf22@645.js";
import define7 from "./c23a2a3474c7b173@597.js";
import define8 from "./dea0d0ec849491a6@508.js";

function _1(md){return(
md`# New Draft`
)}

function _2(md){return(
md`## Team Members
-  CHETAN INGLE: [cmi8525@nyu.edu](mailto:cmi8525@nyu.edu)
-  LAKSHANA KOLUR: [lk2719@nyu.edu](mailto:lk2719@nyu.edu)
-  SINDHU BHOOPALAM DINESH: [sb8019@nyu.edu](mailto:sb8019@nyu.edu)`
)}

function _3(md){return(
md`### Importing datasets`
)}

function _geoJSON(FileAttachment){return(
FileAttachment("countries-50m.json").json()
)}

function _7(md){return(
md`### Importing processed cells`
)}

function _11(md){return(
md`### Question 1
What is the popularity of the game across the world i.e. how are the race circuits distributed across the world? What is the distribution of races held across the world?`
)}

function _12(md){return(
md`#### 1.1 How are the race circuits distributed across the world?`
)}

function _countries(circuits){return(
[...new Set(circuits.map(d => d.country))]
)}

function _circuits_dist(d3,circuits){return(
d3.rollup(
  circuits,
  d => d.length,
  c => c.country
  )
)}

function _max_circuits(d3,circuits_dist){return(
d3.max(Array.from(circuits_dist.values()))
)}

function _color_1_1(d3,max_circuits){return(
d3.scaleSequential()
  .domain([0, max_circuits])
  .interpolator(d3.interpolateBlues)
  .unknown('lightgray')
)}

function _17(legend,color_1_1){return(
legend({
  color: color_1_1,
  title: 'Distribution of races amongst countries around the world'
})
)}

function _worldChart_1_1(width,d3,geoJSON,circuits_dist,color_1_1)
{
  const worldMargin = ({top: 0, right: 0, bottom: -50, left: 0});
  const worldWidth = width - worldMargin.top - worldMargin.bottom;
  const worldHeight = 700 - worldMargin.left - worldMargin.right;

  const worldOutline = d3.geoGraticule().outline();
  
  const worldProjection =  d3.geoEqualEarth()
    .fitSize([worldWidth, worldHeight], worldOutline);

  const worldPath = d3.geoPath().projection(worldProjection);

  const svg = d3.create('svg')
      .attr('width', worldWidth + worldMargin.left + worldMargin.right)
      .attr('height', worldHeight + worldMargin.top + worldMargin.bottom);

  const g = svg.append('g')
      .attr('transform', `translate(${worldMargin.left}, ${worldMargin.top})`);

   g.selectAll('path')
    .data(geoJSON.features.filter(d => d.properties.NAME_LONG !== 'Antarctica'))
    .join('path')
      .attr('d', worldPath)
      .attr('fill', d => circuits_dist.has(d.properties.NAME_LONG) ? color_1_1(circuits_dist.get(d.properties.NAME_LONG)) : "lightgray")
      .attr('stroke', 'white');

  return svg.node();
}


function _19(md){return(
md`1.2 What is the distribution of races held across the world?`
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

function _data_1(races_dist,circuitCountry){return(
races_dist.map(currentElem=>({'circuitId':currentElem[0],
                                    'numberOfRaces':currentElem[1],
                                    'country':Array.from(circuitCountry.get(currentElem[0]))[0][0]}))
)}

function _racesPerCountry(d3,data_1){return(
d3.rollup(
  data_1, 
  g => d3.sum(g,k => k.numberOfRaces),
  d => d.country
)
)}

function _maxCircuits(d3,racesPerCountry){return(
d3.max(racesPerCountry, d=>d[1])
)}

function _color_1_2(d3,maxCircuits){return(
d3.scaleSequential()
  .domain([0, maxCircuits])
  .interpolator(d3.interpolateReds)
  .unknown('lightgray')
)}

function _26(legend,color_1_2){return(
legend({
  color: color_1_2,
  title: 'Distribution of races around the world'
})
)}

function _worldChart_1_2(width,d3,geoJSON,racesPerCountry,color_1_2)
{
  const worldMargin = ({top: 0, right: 0, bottom: -50, left: 0});
  const worldWidth = width - worldMargin.top - worldMargin.bottom;
  const worldHeight = 700 - worldMargin.left - worldMargin.right;

  const worldOutline = d3.geoGraticule().outline();
  
  const worldProjection =  d3.geoEqualEarth()
    .fitSize([worldWidth, worldHeight], worldOutline);

  const worldPath = d3.geoPath().projection(worldProjection);

  const svg = d3.create('svg')
      .attr('width', worldWidth + worldMargin.left + worldMargin.right)
      .attr('height', worldHeight + worldMargin.top + worldMargin.bottom);

  const g = svg.append('g')
      .attr('transform', `translate(${worldMargin.left}, ${worldMargin.top})`);

   g.selectAll('path')
    .data(geoJSON.features.filter(d => d.properties.NAME_LONG !== 'Antarctica'))
    .join('path')
      .attr('d', worldPath)
      .attr('fill', d => racesPerCountry.has(d.properties.NAME_LONG) ? color_1_2(racesPerCountry.get(d.properties.NAME_LONG)) : "lightgray")
      .attr('stroke', 'white');

  return svg.node();
}


function _28(md){return(
md`### Explanation:

Understanding the distribution of races and circuits around the world can be best visualized by a choropleth map. 
We can see in the first map how the circuits are distributed - with a concentration of circuits ion Europe (shown with a darker colour). 
However, it isn't enough to see which countries/continents have more circuits, the number of races held at each circuit is also of importance - this is shown in the second map. 

It can be noticed that there is a slight difference between the two, but the majority of races are held in Europe, especially in SPain, France, Italy (which not surprisingly is where the best teams are from). `
)}

function _29(md){return(
md`### Question 2
Who are the top/most popular drivers over the last few years?`
)}

function _totalPoints(d3,driver_standings){return(
d3.rollups(
  driver_standings, 
  d => d3.sum(d, m => m.points),
  c => c.driverId
)
.sort((a,b) => d3.descending(a[1], b[1]))
)}

function _tp(d3,driver_standings){return(
d3.rollup(
  driver_standings, 
  d => d3.sum(d, m => m.points),
  c => c.driverId
)
)}

function _topDriverIds(totalPoints){return(
new Set(totalPoints.map(d => d[0]))
)}

function _intermediate(d3,driversCleaned){return(
d3.rollup(
  driversCleaned,
  g => g[0].driverName, 
  d => d.driverId
)
)}

function _topDriversAll(driversCleaned,topDriverIds){return(
driversCleaned.filter(d => topDriverIds.has(d.driverId))
)}

function _topDrivers_q2(topDriversAll){return(
new Set(topDriversAll.map(d => d.driverName))
)}

function _files(totalPoints,intermediate){return(
totalPoints.map(
  currentElem=>({
    'driverId':currentElem[0],
    'points':currentElem[1],
    'driverName': intermediate.get(currentElem[0])
      })
)
)}

function _chart(BubbleChart,files){return(
BubbleChart(files, {
  label: d => d.driverName,
  value: d => d.points, 
  width: 700
})
)}

function _38(md){return(
md`### Explanation:

A bubble map seemed appropriate to capture the top drivers in F1 over the last few years. By sorting the data, we can see the biggest circles (and hence, best players) in the center drawing our attention to it. 
We have assumed the top players to be the ones who have scored the most points. 
The top players as seen from the viz are Lewis Hamilton, Sebastial Vettel, Kimi, Valteri, and so on. 

A disadvantage to this chart can be that the players towards the edges cannot be seen accurately. However, since our focus is on the main players, we can see them clearly enough. 
One way to improve this can be to add colours where each colour represents the constructor/team that each driver belongs to.
`
)}

function _39(md){return(
md`### Question 3
Which are the top constructors? How does their performance compare on each race circuit?`
)}

function _40(md){return(
md`#### 1.1 Which are the top constructors? (based on the number of points)`
)}

function _constructor_points(d3,results){return(
d3.rollups(
  results,
  g => d3.sum(g, f => f.points),
  d => d.constructorId
).sort((a,b) => d3.descending(a[1], b[1]))
.slice(0,10)
)}

function _top10_constr(constructor_points){return(
new Map(constructor_points)
)}

function _topConNames(){return(
new Map([
  [1,'McLaren'], [3,'Williams'], [4,'Renault'], [6,'Ferrari'], [9,'Red Bull'], [10,'Force India'], [22,'Benetton'], [25,'Tyrrell'], [32,'Team Lotus'], [131,'Mercedes']
])
)}

function _44(md){return(
md`#### 1.2 How does their performance compare on each race circuit?`
)}

function _top10_data(results,top10_constr){return(
results.filter(d => top10_constr.has(d.constructorId))
)}

function _top5circuits(){return(
new Set([ 'monaco', 'silverstone', 'spa', 'villeneuve', 'red_bull_ring'])
)}

function _types(circuits,top5circuits){return(
new Set(circuits.filter(d => top5circuits.has(d.circuitRef)).map(m => m.circuitId))
)}

function _race_circuit_map(d3,races){return(
d3.rollup(
  races, 
  m => m,
  d => d.raceId, 
  d => d.circuitId
)
)}

function _raceId_data(d3,top10_data,race_circuit_map,types){return(
d3.flatRollup(
  top10_data, 
  g => d3.sum(g, p => p.points),
  e => e.constructorId,
  d => d.raceId
).map(curr => ({
  'constructorId': curr[0],
  'circuitId': Array.from(race_circuit_map.get(curr[1]))[0][0],
  'noOfPoints':curr[2]
}) 
).filter(k => types.has(k.circuitId))
)}

function _topTeams(d3,raceId_data,topConNames){return(
d3.rollups(
  raceId_data, 
  g => d3.sum(g, m => m.noOfPoints), 
  d => d.constructorId,
  c => c.circuitId
).map(curr => ({
  'constructorId':topConNames.get(curr[0]),
  'Monaco': curr[1][0][1],
  'Silverstone':curr[1][1][1],
  'Spa':curr[1][2][1],
  'Villeneuve': curr[1][3][1],
  'Red Bull Ring': curr[1][4][1],
  'total': curr[1][0][1] + curr[1][1][1] + curr[1][2][1] + curr[1][3][1] + curr[1][4][1]
}) 
).sort((a, b) => d3.descending(a.total, b.total))
)}

function _types_arr(){return(
['Monaco', 'Silverstone', 'Spa', 'Villaneuve', 'Red Bull Ring']
)}

function _typeColor(d3,types_arr){return(
d3.scaleOrdinal()
    .domain(types_arr)
    .range(['orange', 'red', 'green', 'blue', 'purple'])
)}

function _stacked(d3,types_arr,topTeams){return(
d3.stack()
  .keys(types_arr)
  .value((d, key) => d[key] ?? 0)(topTeams)
)}

function _54(swatches,typeColor){return(
swatches({color: typeColor})
)}

function _55(width,d3,topTeams,stacked,typeColor)
{
  // set up
  
  const margin = {top: 10, right: 10, bottom: 50, left: 105};

  const visWidth = width - margin.left - margin.right;
  const visHeight = 600 - margin.top - margin.bottom;

  const svg = d3.create('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom);

  const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

  // scales

  const x = d3.scaleLinear()
      .domain([0, d3.max(topTeams, d => d.total)]).nice()
      .range([0, visWidth-20])

  const y = d3.scaleBand()
      .domain(topTeams.map(d => d.constructorId))
      .range([0, visHeight])
      .padding(0.25);

  // axes

  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y);

  // draw bars

  const layers = g.append('g')
    .selectAll('g')
    .data(stacked)
    .join('g')
      .attr('fill', d => typeColor(d.key));

  layers.selectAll('rect')
    .data(d => d)
    .join('rect')
      .attr('x', d => x(d[0]))
      .attr('width', d => x(d[1]) - x(d[0]))
      .attr('y', d => y(d.data.constructorId))
      .attr('height', y.bandwidth());

  // draw axes

  // x-axis
  g.append('g')
      .attr('transform', `translate(0,${visHeight})`)
      .call(xAxis)
  .append('text')
      .attr('fill', 'black')
      .attr('font-family', 'sans-serif')
      .attr('x', visWidth / 2)
      .attr('y', 40)
      .text("Count of Points Per Circuit");

  // y-axis
  g.append('g')
      .call(yAxis);

  return svg.node();
}


function _56(md){return(
md`### Explanation:

In the same way as calculating the top drivers, the top constructors are calculated based on the number of points. We got the top 10 teams however, that did not seem like enough information which lead to the question of - 'How do these top constructors compare in performance on the race circuits'.

This led to the stacked bar chart seen above. We can see the performance of the constructors on each race ciruit - the horizontal bars help to compare the different colours better. The analysis is done on the top 5 race circuits (by popular demand) since the vizualization would be too crowded if we do this over all 76 circuits. `
)}

function _57(md){return(
md`### Question 4: 
What are the fastest lap times for the above constructors?`
)}

function _top10constructors(topTeams){return(
new Set(topTeams.map(d=>d.constructorId))
)}

function _resultsConstructors(d3,results){return(
d3.group(results.map(r=>({
  'ctrId': r.constructorId,
  'fastestLapTime': r.fastestLapTime
})).filter(d => d.fastestLapTime != "\\N"), d=>d.ctrId)
)}

function _constructorsMap(d3,constructors){return(
d3.group(constructors, d=>d.constructorId)
)}

function _getMilliseconds(){return(
function getMilliseconds(lapTime){
  const min = parseInt(lapTime.split(":")[0])
  const sec = parseInt(lapTime.split(":")[1].split(".")[0])
  const msec = parseInt(lapTime.split(":")[1].split(".")[1])
  const millis = min * 60000 + sec*1000 + msec

  return parseInt(millis)
}
)}

function _constructorLaptimes(resultsConstructors,constructorsMap,top10constructors,d3,getMilliseconds)
{
  let temp = []
  for(let [key, value] of resultsConstructors){
    let ctrName = constructorsMap.get(key)[0].name
    if(top10constructors.has(ctrName)){
      let laptime = d3.min(value, function(d) {
        return d.fastestLapTime;
      });
  
      // console.log(ctrName+":"+laptime)
  
      let t = {
        'constructorName': ctrName,
        'fastestLapTime': getMilliseconds(laptime)
      };
      temp.push(t)
    }
  }
  return temp.sort((a,b)=>d3.ascending(a.fastestLapTime,b.fastestLapTime))
}


function _numRows(){return(
3
)}

function _numCols(){return(
3
)}

function _gridPositions(d3,numRows,numCols){return(
d3.cross(d3.range(numRows), d3.range(numCols), (row, col) => ({row, col}))
)}

function _constructorsWithGrid(d3,constructorLaptimes,gridPositions){return(
d3.zip(constructorLaptimes, gridPositions)
    .map(([data, position]) => ({...data, ...position}))
)}

function _q4extent(d3,constructorLaptimes){return(
d3.extent(constructorLaptimes, d => d.fastestLapTime)
)}

function _q4LapTimes(d3,numCols,numRows,q4extent,constructorsWithGrid,lightgray)
{
  const margin = {top: 30, right: 20, bottom: 0, left: 30};
  const visWidth = 1000 - margin.left - margin.right;
  const visHeight = 750 - margin.top - margin.bottom;

  const svg = d3.create('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom)
      .attr('font-family', 'sans-serif')
      .attr('text-anchor', 'middle');

  const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
  // title
  g.append('text')
      .attr('font-size', '16px')
      .attr('dominant-baseline', 'hanging')
      .attr('x', visWidth / 2)
      .attr('y', -margin.top + 5)
      .text('Fastest Lap Times (seconds) for Top Constructors');

  // set up scales
  
  const column = d3.scaleBand()
      .domain(d3.range(numCols))
      .range([0, visWidth])
      .paddingInner(0.05);
  
  const row = d3.scaleBand()
      .domain(d3.range(numRows))
      .range([0, visHeight])
      .paddingInner(0.05);
  
  const angle = d3.scaleLinear()
      .domain([Math.floor(q4extent[0]), Math.ceil(q4extent[1])])
      .range([0, Math.PI]);
  
  const radius = Math.min(column.bandwidth(), row.bandwidth()) / 2;
  
  // create a group for each cell in the grid
  const cell = g.selectAll('g')
    .data(constructorsWithGrid)
    .join('g')
      .attr('transform', d => `translate(${column(d.col) + radius},${row(d.row) + radius})`);
  
  // use an arc generator to create a half-circle
  
  const arc = d3.arc()
      .innerRadius(radius - 1)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);
  
  cell.append('path')
      .attr('d', arc())
      .attr('fill', lightgray);
  
  // add baseline
  const line = d3.line();
  
  cell.append('path')
      .attr('d', d => line([[-radius, 0], [radius, 0]]))
      .attr('fill', 'none')
      .attr('stroke', lightgray)
      .attr('stroke-width', 1)
  
  // add sloped line
  cell.append('path')
      .attr('d', d => {
        const start = [0, 0];
        const end = [-Math.cos(angle(d.fastestLapTime)) * radius,
                     -Math.sin(angle(d.fastestLapTime)) * radius];
        return line([start, end])
      })
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 2);
  
  // add labels
  
  cell.append('text')
      .attr('y', 20)
      .attr('font-size', '15px')
      .text(d => d.constructorName);
  
  cell.append('text')
      .attr('font-size', '12px')
      .attr('fill', "#000000")
      .attr('x', -radius)
      .attr('y', 10)
      .text(Math.ceil(q4extent[0]));
  
  cell.append('text')
      .attr('font-size', '12px')
      .attr('fill', "#000000")
      .attr('x', radius)
      .attr('y', 10)
      .text(Math.ceil(q4extent[1]));

  return svg.node();
}


function _69(md){return(
md`### Explanation:
We have used speedometer charts to visualize the fastest lap for the top 10 constructors identified above and have presented them in increasing order of the time.
We can see that Mercedes holds the record for the fastest lap time (55 seconds) whereas Force India has a fastest lap time of 68 seconds.
We do not have data for Benetton, Team Lotus and Tyrell but for the rest of the constructors we see that they have a similar fastest lap time.`
)}

function _70(md){return(
md`### Question 5: 
How have the pit stop times changed over the past 5 years for top few teams/constructors?`
)}

function _71(q5_pitStopsData){return(
q5_pitStopsData
)}

function _q5DataGrouped(d3,q5_pitStopsData){return(
d3.group(q5_pitStopsData,d=>d.constructor)
)}

function _constChanges()
{
  const map = new Map()

  map.set('AlphaTauri', 'Toro Rosso')
  map.set('Alfa Romeo', 'Sauber')
  map.set('Racing Point', 'Force India')
  map.set('Aston Martin', 'Racing Point')
  map.set('Alpine F1 Team', 'Renault')
  return map
}


function _z(constChanges,q5DataGrouped)
{
  
for (let [key, value] of constChanges) {
  let newConst = key
  let oldConst = value

  // console.log(key+":"+value)
  let oldData = q5DataGrouped.get(oldConst)
  let newData = q5DataGrouped.get(newConst)

  oldData.forEach(x=>{
    x.constructor = newConst
    newData.push(x)
  })

  // console.log(oldData)
  // console.log(newData)
  console.log('------------------------------')

  return q5DataGrouped

}
}


function _q5DataGrouped1(d3,q5_pitStopsData){return(
d3.group(q5_pitStopsData,d=>d.constructor)
)}

function _77(q5DataGrouped1){return(
q5DataGrouped1.delete("Manor Marussia")
)}

function _psKeys(q5DataGrouped1){return(
q5DataGrouped1.keys()
)}

function _q5Data(q5DataGrouped1)
{
  let temp = []
  for(let [key, value] of q5DataGrouped1){
    console.log(key+":"+value)
    let data = []
    value.forEach(y=>{
      let td = {
        'year': parseInt(y.year),
        'duration': parseInt(y['average_pitstop(milliseconds)'])
      }
      data.push(td)
    })
    let formattedData = {
    'constructor': key,
    'data': data
  }

  temp.push(formattedData)
  }
  return temp
}


function _q5data1(q5Data,minYear,maxYear)
{
    let res = []
    for(let i=0; i <q5Data.length;i++){
        let constructor = q5Data[i].constructor
        let psdata = q5Data[i].data
        let yearSet = new Set()
      
        psdata.forEach(x=>{
            yearSet.add(parseInt(x.year))
        })
  
        let yearData = []
      
        for(let i = parseInt(minYear); i <=parseInt(maxYear); i++){
            if(yearSet.has(i)){
                psdata.forEach(x=>{
                    if(x.year == i){
                        yearData.push(x)
                    }
                })      
            }
            // else{
            //     let tempY = {
            //         'year': i,
            //         'duration': 0
            //     }
            //     yearData.push(tempY)
            // }
        }  
        let fin = {
            'constructor': constructor,
            'data': yearData
        }

        res.push(fin)
    }
    return res
}


function _minYear(d3,q5Data){return(
d3.min(q5Data, constructor => d3.min(constructor.data, d => d.year))
)}

function _maxYear(d3,q5Data){return(
d3.max(q5Data, constructor => d3.max(constructor.data, d => d.year))
)}

function _yearExtent(minYear,maxYear){return(
[minYear,maxYear]
)}

function _maxPitStop(d3,q5Data){return(
d3.max(q5Data, constructor => d3.max(constructor.data, d => d.duration))
)}

function _dimensions(width)
{
  const margin = { top: 30, bottom: 20, right: 10, left: 30 };
  const visWidth = width - margin.left - margin.right;
  const visHeight = 600 - margin.top - margin.bottom;
  
  return { margin, visWidth, visHeight };
}


function _q5NumRows(){return(
4
)}

function _q5NumCols(){return(
4
)}

function _row(d3,q5NumRows,dimensions){return(
d3.scaleBand()
  .domain(d3.range(q5NumRows))
  .range([0, dimensions.visHeight])
  .padding(0.05)
)}

function _col(d3,q5NumCols,dimensions){return(
d3.scaleBand()
  .domain(d3.range(q5NumCols))
  .range([0, dimensions.visWidth])
  .padding(0.1)
)}

function _y(d3,maxPitStop,row){return(
d3.scaleLinear()
  .domain([0, maxPitStop])
  .range([row.bandwidth(), 0])
)}

function _x(d3,yearExtent,col){return(
d3.scaleTime()
  .domain(yearExtent)
  .range([0, col.bandwidth()])
)}

function _area(d3,x,y){return(
d3.area()
  .x(d => x(d.year))
  .y1(d => y(d.duration))
  .y0(d => y(0))
  .defined(d => d.duration !== '-')
)}

function _line(d3,x,y){return(
d3.line()
    .x(d => x(d.year))
    .y(d => y(d.duration))
)}

function _xAxis(d3,x){return(
d3.axisBottom(x)
  .tickSizeOuter(0)
)}

function _yAxis(d3,y){return(
d3.axisLeft(y)
  .tickSizeOuter(0)
  .ticks(4)
)}

function _pitStopSvg(dimensions,d3,yearExtent,q5data1,q5NumCols,col,row,area,xAxis,yAxis)
{
  // the usual set up
  const {visWidth, visHeight, margin} = dimensions;
  
  const svg = d3.create('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom);
  
  const g = svg.append('g')
      .attr('font-family', 'sans-serif')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
  // title
  g.append('text')
      .text(`Pit Stop Durations, ${yearExtent[0]} - ${yearExtent[1]}`)
  
  // add a group for each cell and position it according to its row and column
  
  const cells = g.selectAll('g')
    .data(q5data1)
    .join('g')
      .attr('transform', (d, i) => {
        /* i is the current index
           in this case, the value of i will be from 0-15. */
        
        // get the row index and column index for this cell
        const r = Math.floor(i / q5NumCols);
        const c = i % q5NumCols;
        
        // use the scales to get the x, y coordinates
        return `translate(${col(c)}, ${row(r)})`;
      });
  
  // add the area to each cell
  
  cells.append('path')
      .attr('d', d => area(d.data))
      .attr('fill', 'steelblue');

  // cells.append("path")
  //    .datum(numRequestsByHour)
  //    .attr("d", line)
  //    .attr("fill", "none")
  //    .attr("stroke", "steelblue")
  //    .attr("stroke-width", 2);
  
  // add the state label to each cell
  
  cells.append('text')
      .attr('font-size', 15)
      .attr('dominant-baseline', 'middle')
      .attr('x', 15)
      .attr('y', 40)
      .text(d => d.constructor)
  
  // Axes
  
  // add x axes to each chart
  const xAxes = cells.append('g')
    // move it to the bottom
    .attr('transform', d => `translate(0,${row.bandwidth()})`)
    .call(xAxis)
    // remove the baseline
    .call(g => g.select('.domain').remove())
    // change the tick color to gray
    .call(g => g.selectAll('line').attr('stroke', '#c0c0c0'));
  
  // remove tick labels from all charts except the ones at the bottom of the columns
  xAxes.filter((d, i) => i < q5data1.length - q5NumCols)
    .selectAll('text')
    .remove();
  
  // add y axes to each chart
  const yAxes = cells.append('g')
    .call(yAxis)
    // remove the baseline
    .call(g => g.select('.domain').remove())
    // change the tick color to gray
    .call(g => g.selectAll('line').attr('stroke', '#c0c0c0'));
  
  // remove tick labels from all charts except the first column
  yAxes.filter((d, i) => i % q5NumCols !== 0)
    .selectAll('text')
    .remove();
  
  return svg.node();
}


function _97(md){return(
md`### Explanation:
We have used area charts to visualize the average pitstop duration for top 16 Constructors since 2016. For some constructors the data was not available. We notice that the average pitstop time for each constructor went down from 2016 to 2019. From 2019 to 2022 increase in pit stop durations were observed.`
)}

function _98(md){return(
md`## Question 6: 
For the top few drivers who have switched teams, how does their performance compare with each team that they have been in?`
)}

function _drivList(topDrivers,driversWhoSwitched)
{
  let td = new Set();
  let temp = []
  topDrivers.forEach(x=>{
    td.add(x)
  })

  driversWhoSwitched.forEach(x=>{
    if(td.has(x)){
      temp.push(x)
    }
  })
  return temp
}


function _q6Const(d3,q6final){return(
d3.group(q6final, d=>d.driver)
)}

function _q6constructors(drivList,q6Const,q5DataGrouped1)
{
  let tempSet = new Set()

  drivList.forEach(x=>{
    let dd = q6Const.get(x)
    dd.forEach(y=>{
      if(q5DataGrouped1.has(y.constructor)){
        tempSet.add(y.constructor)
      }
    })
  })
  return Array.from(tempSet)
}


function _groupedData2(d3,q6final)
{
  let result = {}
  const grouped = d3.group(q6final, d => d.driver)
  for (const name of grouped){
    // console.log(name)
    let retVar2 = {}
    let grouped2 = d3.group(name[1], d => d.constructor)
    for (const constructor of grouped2){      
      let temp1 = d3.rollup(constructor[1], v => d3.sum(v, d => d.mean_Position), d=> parseInt(d.best_Position))
      let temp2 = Array.from(temp1, ([best_Position, mean_Position]) => ({best_Position, mean_Position}))
      let sorted = temp2.sort((a, b) => d3.ascending(a.best_Position, b.best_Position))
      retVar2[constructor[0]] = temp2
    }
    result[name[0]] = retVar2
  }
  return result
}


function _groupedData3(drivList,groupedData2)
{
  let driverSet = new Set();
  let result = {}
  drivList.forEach(x=>{
    driverSet.add(x)
  })

  for(const name of Object.keys(groupedData2)){
    if(driverSet.has(name)){
      result[name] = (groupedData2[name])
    }
  }
  return result
}


function _meanPositions(drivList,groupedData3,d3)
{
  let driverSet = new Set();
  let result = []
  drivList.forEach(x=>{
    driverSet.add(x)
  })

  debugger;
  for(const name of Object.keys(groupedData3)){
    if(driverSet.has(name)){
      for(const ctr of Object.keys(groupedData3[name])){
        result.push(groupedData3[name][ctr][0].mean_Position)
      }
    }
  }
  return result.sort(d3.ascending)
}


function _driverConstructor(drivList,q6constructors)
{
  let result = []
  for (const d of drivList) {
    for (const c of q6constructors) {
      result.push({driver : d, constructor : c})
    }
  }
  return result
}


function _color2(d3,meanPositions){return(
d3.scaleOrdinal()
    .domain(meanPositions)
    .range(d3.schemeTableau10)
)}

function _107(Swatches,d3,meanPositions){return(
Swatches(d3.scaleOrdinal(meanPositions,d3.schemeTableau10))
)}

function _108(width,d3,q6constructors,drivList,groupedData3,driverConstructor,color2)
{
  const margin = {top: 60, right: 10, bottom: 50, left: 120};
  const visWidth = width - margin.left - margin.right;
  const visHeight = 1000 - margin.top - margin.bottom;

  const svg = d3.create('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom)
      .attr('font-family', 'sans-serif')
      .attr('text-anchor', 'middle');

  const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const yScale = d3.scaleBand()
      .domain(q6constructors)
      .range([visHeight, 0])
      .padding(0.2);
  
  const xScale = d3.scaleBand()
      .domain(drivList)
      .range([0, visWidth])
      .padding(0.2);
  
  const outerRadius = Math.min(xScale.bandwidth(), yScale.bandwidth()) / 2;
 
  function getPieData(d) {
    return groupedData3[d.driver][d.constructor] || {best_Position : 0, mean_Position : 0}
  }

  const pie = d3.pie()
      .value(d => d.best_Position);

  const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(outerRadius);

  const pieGroups = g.selectAll('.pieGroup')
    .data(driverConstructor)
    .join('g')
      .attr('class', 'pieGroup')
      .attr('transform', d => `translate(${xScale(d.driver) + xScale.bandwidth() / 2},${yScale(d.constructor) + yScale.bandwidth() / 2})`);

  pieGroups.selectAll('path')
    .data(d => pie(getPieData(d)))
    .join('path')
      .attr('d', d => arc(d))
      .attr('fill', d => color2(d.data.mean_Position))
  
  let xaxis = g.append("g")
    .attr("transform", "translate(0,0)")
    .call(d3.axisTop(xScale))
  
  let yaxis = g.append("g")
    .attr("transform", "translate(0,0)")
    .call(d3.axisLeft(yScale))
  
  let xLabel = g.append('text')
    .attr("x", visWidth /2)
    .attr("y", -40)
    .text("Driver")
    .attr("font-size", 14)
    .attr('font-family', 'sans-serif')
    .attr("dominant-baseline","middle")
    .attr("text-anchor", "middle")
  
  let yLabel = g.append('text')
    .attr("x", 0)
    .attr("y", 0)
    .text("Constructor")
    .attr("font-size", 14)
    .attr('font-family', 'sans-serif')
    .attr("dominant-baseline","middle")
    .attr("text-anchor", "middle")
    .attr("transform", `translate(${-100}, ${visHeight/2})rotate(-90)`)

    let title = g.append('text')
    .attr("x", visWidth / 2)
    .attr("y", -200)
    .text("Drivers & Constructors")
    .attr("font-size", 14)
    .attr("dominant-baseline","middle")
    .attr("text-anchor", "middle")
    .attr('font-weight', 'bolder')
  
  return svg.node()
}


function _109(md){return(
md`### Explanation:
We have identified top drivers who have switched constructors in their careers. For each of the driver, we have plotted charts to depict what was their best position and mean position that they achieved with the respective constructor. This gives us a clear way of understanding the performance of each driver with respective constructors. `
)}

function _110(md){return(
md`### Question 7: 
What does the points progression look like for each driver throughout the season?`
)}

function _drivers7(q7datafinal){return(
q7datafinal.map(d=>d.driver)
)}

function _color7(d3,drivers7){return(
d3.scaleOrdinal(drivers7, /*d3.schemePaired*/ 
                        ["lightblue", "#ff7f0e", "blue", "green", "yellow", "#8c564b", "grey", "pink", "magenta", "brown", "purple", "lightgrey", "orange", "#FFDEAD", "black", "#bcbd22", "lightgreen", "red", "darkviolet", "#17becf" ])
)}

function _113(Swatches,color7){return(
Swatches(color7,{})
)}

function _multiLine(q7datafinal,width,d3,color7)
{

  const data7 = q7datafinal
  // set up 
  const margin = ({top: 30, right: 30, bottom: 40, left: 40})
  const visWidth = width - margin.left - margin.right
  const visHeight = 500 - margin.top - margin.bottom
  const raceExtent = [1,22]

  const x = d3.scaleLinear()
    .domain(raceExtent)
    .range([0, visWidth])

  const maxPoints =  393

  const y = d3.scaleLinear()
    .domain([0, maxPoints]).nice()
    .range([visHeight, 0])

  const line = d3.line()
    .x(d => x(d.race))
    .y(d => y(d.points))

  const xAxis = d3.axisBottom(x)
  const yAxis = d3.axisLeft(y)
  
  const svg = d3.create('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom);
  
  const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
  // draw axes
  
  g.append('g')
      // move x-axis to the bottom 
      .attr('transform', `translate(0,${visHeight})`)
      .call(xAxis)
    .append('text')
    .attr('fill', 'black')
      .attr('text-anchor', 'start')
      .attr('dominant-baseline', 'hanging')
      .attr('font-weight', 'bold')
      .attr('y', -margin.bottom + 60)
      .attr('x', margin.left)
      .text('Races')
  
  g.append('g')
      .call(yAxis)
      .call(g => g.select('.domain').remove())
    // add axis label
    .append('text')
      .attr('fill', 'black')
      .attr('text-anchor', 'start')
      .attr('dominant-baseline', 'hanging')
      .attr('font-weight', 'bold')
      .attr('y', -margin.top + 5)
      .attr('x', -margin.left)
      .text('Points');
  
  const linesGroup = g.append('g');

  linesGroup
    .selectAll('path')
    .data(data7)
    .join('path')
      .attr('stroke', d => color7(d.driver))
      .attr('fill', 'none')
      .attr('stroke-width', 2)
      .attr('d', d => line(d.points));
  
  return svg.node();
}


function _115(md){return(
md`#### Explanation
We have used Multiline charts to show how the points for each driver progressed from 1 to the 22nd race. The user can choose if the chart should be for Drivers. This hows the progress and also allows for comparison between the drivers after each race. `
)}

function _116(md){return(
md`### Question 8: 
What are total wins, podiums, DNFs( Did Not Finish ), laps driven for each driver?`
)}

function _getMapArray(wins,podiums,DNFs,laps){return(
function getMapArray(option) 
{
  if(option == "Wins"){
    return wins
  }
  else if(option == "Podiums"){
    return podiums
  }
  else if(option == "DNFs"){
    return DNFs
  }
  else{
    return laps
  }
}
)}

function _width8(){return(
923
)}

function _selected_option(Inputs){return(
Inputs.select(["Wins"].concat(["Podiums", "DNFs", "Laps Driven"]), {label: "Choose Option"})
)}

function _chart8(PieChart,getMapArray,selected_option,width8){return(
PieChart(getMapArray(selected_option), {
  name: (d) => d.map,
  value: (d) => d.value,
  width8,
  height: 500
})
)}

function _121(md){return(
md`#### Explanation
We have used Interactive Pie Chart to display the comparison among all drivers for wins, podiums, DNFs, Laps driven. This way, many statistics can be seen and compared in one diagram as required.`
)}

function _122(md){return(
md`### Question 9: 
What does the points gap look like for the top 2 drivers after each race? More specifically, how did it look for Max Verstappen and Lewis Hamilton?`
)}

function _chart9(DivergingBarChart,q9datafinal,width,d3){return(
DivergingBarChart(q9datafinal, {
  x: d => d.diff,
  y: d => d.race,
  xFormat: "+,d",
  xLabel: "← Ham · Difference in Points · Ver →",
  width,
  marginRight: 70,
  marginLeft: 70,
  colors: d3.schemeRdBu[3]
})
)}

function _124(md){return(
md`#### Explanation
The diverging bar chart shows the points difference between Hamilton and Verstappen, after each race in sequence. This makes it easy to understand how the points difference shrunk or increased after each race and when the competition got close.`
)}

function _125(md){return(
md`### Question 10: 
How did their pole positions affect their race standings?`
)}

function _getRacePositions(q10data){return(
function getRacePositions(race) 
{
   return q10data.get(race)
}
)}

function _selected_race(Inputs,q10data){return(
Inputs.select(q10data.keys(), {label: "Choose Race"})
)}

function _chart10(Scatterplot,getRacePositions,selected_race,width){return(
Scatterplot(getRacePositions(selected_race), {
  x: d => d.start,
  y: d => d.finish,
  xLabel: "Start Position",
  yLabel: "Finish Position",
  stroke: "red",
  width,
  height: 600
})
)}

function _129(md){return(
md`#### Explanation
The Interactive Scatter plot shows the mappings between the start and end positions for the top 10 finishes in each race. The user can choose the Race and check these metrics.`
)}

function _130(md){return(
md`### Question 11
Its not enough to win the race, scoring points is equally important. Which drivers consistently scored points for their teams?`
)}

function _points_extent(d3,viz_data11){return(
d3.extent(viz_data11, d => d.points)
)}

function _color11(d3,points_extent){return(
d3.scaleSequential()
      .interpolator(d3.interpolateYlGnBu)
      .domain(points_extent)
      .unknown("#F2F2F2")
)}

function _133(legend,color11){return(
legend({
  color: color11,
  width: 500,
  ticks: 5,
  title: 'Championship Points'
})
)}

function _heatmap(d3,DOM,top_10_constructors,top_20_drivers,viz_data11,color11)
{
  const height = 800
  const width = 950
  const marginLeft = 80
  const marginTop = 35
  const svg = d3.select(DOM.svg(width, height))
    .attr('viewBox', `-${marginLeft} -${marginTop} ${width} ${height}`)
  
  // Define x axis
  const x = d3.scaleBand()
    .range([0, width - 90])
    .domain(top_10_constructors)
    .padding(0.02)
  
  const xAxis = d3.axisTop(x)
  
  svg.append('g')
    .call(xAxis)
    .append("text")
      .attr("x", (width / 2 )  - 100 )
      .attr("y", -marginTop + 5)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "hanging")
      .text("Constructors")
      .attr("font-weight", "bold")
    .selectAll("text")
      .attr("margin-top", 2);
  
  // Define y-axis
  const y = d3.scaleBand()
		.range([0, height - 40])
		.domain(top_20_drivers)
		.padding(0.02)
  
  const yAxis = d3.axisLeft(y)
  
	svg.append('g')
    .call(yAxis)
    .append("text")
          .attr("x", -marginLeft)
          .attr("y", (height / 2)-20)
          .attr("fill", "black")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "start")
          .text("Drivers")
          .attr("font-weight", "bold");
    
	// draw rectangles
	svg.selectAll('rect')
		.data(viz_data11)
		.enter().append('rect')
			.attr('x', d => x(d.Constructors))
			.attr('y', d => y(d.Drivers))
			.attr('width', x.bandwidth())
			.attr('height', y.bandwidth())
			.attr('fill', d => color11(d.points))
  
  return svg.node()
}


function _135(md){return(
md`#### Explanation
The heatmap shows how much the top 20 drivers were able to contribute to the top 10 constructors. It also shows how consistent each driver was. It also helps compare between drivers and also to understand how a driver performed with each constructor.`
)}

function _136(md){return(
md`---
## Appendix`
)}

function _lightgray(){return(
"#dcdcdc"
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["countries-50m.json", {url: new URL("./files/55260abbc777c0a3b8fed19f3929dd822fef9d5118b53b76b2176d20782910e599eac919999ea8ee85a60b783fd37082574f6591fd46c0d70ddf9b00df71ce27.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  const child1 = runtime.module(define1);
  main.import("circuits", child1);
  main.import("constructor_results", child1);
  main.import("constructor_standings", child1);
  main.import("constructors", child1);
  main.import("driver_standings", child1);
  main.import("drivers", child1);
  main.import("lap_times", child1);
  main.import("pit_stops", child1);
  main.import("qualifying", child1);
  main.import("races", child1);
  main.import("results", child1);
  main.import("sprint_results", child1);
  main.import("status", child1);
  const child2 = runtime.module(define2);
  main.import("BubbleChart", child2);
  main.variable(observer("geoJSON")).define("geoJSON", ["FileAttachment"], _geoJSON);
  main.variable(observer()).define(["md"], _7);
  const child3 = runtime.module(define1);
  main.import("q4final", child3);
  main.import("q5_pitStopsData", child3);
  main.import("q6final", child3);
  main.import("topDrivers", child3);
  main.import("driversWhoSwitched", child3);
  const child4 = runtime.module(define3);
  main.import("driversCleaned", child4);
  const child5 = runtime.module(define4);
  main.import("viz_data11", child5);
  main.import("top_10_constructors", child5);
  main.import("top_20_drivers", child5);
  main.import("getConstructorName", child5);
  main.import("getDriverName", child5);
  main.import("drivers2021", child5);
  main.import("DNFs", child5);
  main.import("wins", child5);
  main.import("podiums", child5);
  main.import("laps", child5);
  main.import("q7datafinal", child5);
  main.import("q9datafinal", child5);
  main.import("q10data", child5);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer("countries")).define("countries", ["circuits"], _countries);
  main.variable(observer("circuits_dist")).define("circuits_dist", ["d3","circuits"], _circuits_dist);
  main.variable(observer("max_circuits")).define("max_circuits", ["d3","circuits_dist"], _max_circuits);
  main.variable(observer("color_1_1")).define("color_1_1", ["d3","max_circuits"], _color_1_1);
  main.variable(observer()).define(["legend","color_1_1"], _17);
  main.variable(observer("worldChart_1_1")).define("worldChart_1_1", ["width","d3","geoJSON","circuits_dist","color_1_1"], _worldChart_1_1);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("races_dist")).define("races_dist", ["d3","races"], _races_dist);
  main.variable(observer("circuitCountry")).define("circuitCountry", ["d3","circuits"], _circuitCountry);
  main.variable(observer("data_1")).define("data_1", ["races_dist","circuitCountry"], _data_1);
  main.variable(observer("racesPerCountry")).define("racesPerCountry", ["d3","data_1"], _racesPerCountry);
  main.variable(observer("maxCircuits")).define("maxCircuits", ["d3","racesPerCountry"], _maxCircuits);
  main.variable(observer("color_1_2")).define("color_1_2", ["d3","maxCircuits"], _color_1_2);
  main.variable(observer()).define(["legend","color_1_2"], _26);
  main.variable(observer("worldChart_1_2")).define("worldChart_1_2", ["width","d3","geoJSON","racesPerCountry","color_1_2"], _worldChart_1_2);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer("totalPoints")).define("totalPoints", ["d3","driver_standings"], _totalPoints);
  main.variable(observer("tp")).define("tp", ["d3","driver_standings"], _tp);
  main.variable(observer("topDriverIds")).define("topDriverIds", ["totalPoints"], _topDriverIds);
  main.variable(observer("intermediate")).define("intermediate", ["d3","driversCleaned"], _intermediate);
  main.variable(observer("topDriversAll")).define("topDriversAll", ["driversCleaned","topDriverIds"], _topDriversAll);
  main.variable(observer("topDrivers_q2")).define("topDrivers_q2", ["topDriversAll"], _topDrivers_q2);
  main.variable(observer("files")).define("files", ["totalPoints","intermediate"], _files);
  main.variable(observer("chart")).define("chart", ["BubbleChart","files"], _chart);
  main.variable(observer()).define(["md"], _38);
  main.variable(observer()).define(["md"], _39);
  main.variable(observer()).define(["md"], _40);
  main.variable(observer("constructor_points")).define("constructor_points", ["d3","results"], _constructor_points);
  main.variable(observer("top10_constr")).define("top10_constr", ["constructor_points"], _top10_constr);
  main.variable(observer("topConNames")).define("topConNames", _topConNames);
  main.variable(observer()).define(["md"], _44);
  main.variable(observer("top10_data")).define("top10_data", ["results","top10_constr"], _top10_data);
  main.variable(observer("top5circuits")).define("top5circuits", _top5circuits);
  main.variable(observer("types")).define("types", ["circuits","top5circuits"], _types);
  main.variable(observer("race_circuit_map")).define("race_circuit_map", ["d3","races"], _race_circuit_map);
  main.variable(observer("raceId_data")).define("raceId_data", ["d3","top10_data","race_circuit_map","types"], _raceId_data);
  main.variable(observer("topTeams")).define("topTeams", ["d3","raceId_data","topConNames"], _topTeams);
  main.variable(observer("types_arr")).define("types_arr", _types_arr);
  main.variable(observer("typeColor")).define("typeColor", ["d3","types_arr"], _typeColor);
  main.variable(observer("stacked")).define("stacked", ["d3","types_arr","topTeams"], _stacked);
  main.variable(observer()).define(["swatches","typeColor"], _54);
  main.variable(observer()).define(["width","d3","topTeams","stacked","typeColor"], _55);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer()).define(["md"], _57);
  main.variable(observer("top10constructors")).define("top10constructors", ["topTeams"], _top10constructors);
  main.variable(observer("resultsConstructors")).define("resultsConstructors", ["d3","results"], _resultsConstructors);
  main.variable(observer("constructorsMap")).define("constructorsMap", ["d3","constructors"], _constructorsMap);
  main.variable(observer("getMilliseconds")).define("getMilliseconds", _getMilliseconds);
  main.variable(observer("constructorLaptimes")).define("constructorLaptimes", ["resultsConstructors","constructorsMap","top10constructors","d3","getMilliseconds"], _constructorLaptimes);
  main.variable(observer("numRows")).define("numRows", _numRows);
  main.variable(observer("numCols")).define("numCols", _numCols);
  main.variable(observer("gridPositions")).define("gridPositions", ["d3","numRows","numCols"], _gridPositions);
  main.variable(observer("constructorsWithGrid")).define("constructorsWithGrid", ["d3","constructorLaptimes","gridPositions"], _constructorsWithGrid);
  main.variable(observer("q4extent")).define("q4extent", ["d3","constructorLaptimes"], _q4extent);
  main.variable(observer("q4LapTimes")).define("q4LapTimes", ["d3","numCols","numRows","q4extent","constructorsWithGrid","lightgray"], _q4LapTimes);
  main.variable(observer()).define(["md"], _69);
  main.variable(observer()).define(["md"], _70);
  main.variable(observer()).define(["q5_pitStopsData"], _71);
  main.variable(observer("q5DataGrouped")).define("q5DataGrouped", ["d3","q5_pitStopsData"], _q5DataGrouped);
  main.variable(observer("constChanges")).define("constChanges", _constChanges);
  main.variable(observer("z")).define("z", ["constChanges","q5DataGrouped"], _z);
  main.variable(observer("q5DataGrouped1")).define("q5DataGrouped1", ["d3","q5_pitStopsData"], _q5DataGrouped1);
  main.variable(observer()).define(["q5DataGrouped1"], _77);
  main.variable(observer("psKeys")).define("psKeys", ["q5DataGrouped1"], _psKeys);
  main.variable(observer("q5Data")).define("q5Data", ["q5DataGrouped1"], _q5Data);
  main.variable(observer("q5data1")).define("q5data1", ["q5Data","minYear","maxYear"], _q5data1);
  main.variable(observer("minYear")).define("minYear", ["d3","q5Data"], _minYear);
  main.variable(observer("maxYear")).define("maxYear", ["d3","q5Data"], _maxYear);
  main.variable(observer("yearExtent")).define("yearExtent", ["minYear","maxYear"], _yearExtent);
  main.variable(observer("maxPitStop")).define("maxPitStop", ["d3","q5Data"], _maxPitStop);
  main.variable(observer("dimensions")).define("dimensions", ["width"], _dimensions);
  main.variable(observer("q5NumRows")).define("q5NumRows", _q5NumRows);
  main.variable(observer("q5NumCols")).define("q5NumCols", _q5NumCols);
  main.variable(observer("row")).define("row", ["d3","q5NumRows","dimensions"], _row);
  main.variable(observer("col")).define("col", ["d3","q5NumCols","dimensions"], _col);
  main.variable(observer("y")).define("y", ["d3","maxPitStop","row"], _y);
  main.variable(observer("x")).define("x", ["d3","yearExtent","col"], _x);
  main.variable(observer("area")).define("area", ["d3","x","y"], _area);
  main.variable(observer("line")).define("line", ["d3","x","y"], _line);
  main.variable(observer("xAxis")).define("xAxis", ["d3","x"], _xAxis);
  main.variable(observer("yAxis")).define("yAxis", ["d3","y"], _yAxis);
  main.variable(observer("pitStopSvg")).define("pitStopSvg", ["dimensions","d3","yearExtent","q5data1","q5NumCols","col","row","area","xAxis","yAxis"], _pitStopSvg);
  main.variable(observer()).define(["md"], _97);
  main.variable(observer()).define(["md"], _98);
  main.variable(observer("drivList")).define("drivList", ["topDrivers","driversWhoSwitched"], _drivList);
  main.variable(observer("q6Const")).define("q6Const", ["d3","q6final"], _q6Const);
  main.variable(observer("q6constructors")).define("q6constructors", ["drivList","q6Const","q5DataGrouped1"], _q6constructors);
  main.variable(observer("groupedData2")).define("groupedData2", ["d3","q6final"], _groupedData2);
  main.variable(observer("groupedData3")).define("groupedData3", ["drivList","groupedData2"], _groupedData3);
  main.variable(observer("meanPositions")).define("meanPositions", ["drivList","groupedData3","d3"], _meanPositions);
  main.variable(observer("driverConstructor")).define("driverConstructor", ["drivList","q6constructors"], _driverConstructor);
  main.variable(observer("color2")).define("color2", ["d3","meanPositions"], _color2);
  main.variable(observer()).define(["Swatches","d3","meanPositions"], _107);
  main.variable(observer()).define(["width","d3","q6constructors","drivList","groupedData3","driverConstructor","color2"], _108);
  main.variable(observer()).define(["md"], _109);
  main.variable(observer()).define(["md"], _110);
  main.variable(observer("drivers7")).define("drivers7", ["q7datafinal"], _drivers7);
  main.variable(observer("color7")).define("color7", ["d3","drivers7"], _color7);
  main.variable(observer()).define(["Swatches","color7"], _113);
  main.variable(observer("multiLine")).define("multiLine", ["q7datafinal","width","d3","color7"], _multiLine);
  main.variable(observer()).define(["md"], _115);
  main.variable(observer()).define(["md"], _116);
  main.variable(observer("getMapArray")).define("getMapArray", ["wins","podiums","DNFs","laps"], _getMapArray);
  main.variable(observer("width8")).define("width8", _width8);
  main.variable(observer("viewof selected_option")).define("viewof selected_option", ["Inputs"], _selected_option);
  main.variable(observer("selected_option")).define("selected_option", ["Generators", "viewof selected_option"], (G, _) => G.input(_));
  main.variable(observer("chart8")).define("chart8", ["PieChart","getMapArray","selected_option","width8"], _chart8);
  main.variable(observer()).define(["md"], _121);
  main.variable(observer()).define(["md"], _122);
  main.variable(observer("chart9")).define("chart9", ["DivergingBarChart","q9datafinal","width","d3"], _chart9);
  main.variable(observer()).define(["md"], _124);
  main.variable(observer()).define(["md"], _125);
  main.variable(observer("getRacePositions")).define("getRacePositions", ["q10data"], _getRacePositions);
  main.variable(observer("viewof selected_race")).define("viewof selected_race", ["Inputs","q10data"], _selected_race);
  main.variable(observer("selected_race")).define("selected_race", ["Generators", "viewof selected_race"], (G, _) => G.input(_));
  main.variable(observer("chart10")).define("chart10", ["Scatterplot","getRacePositions","selected_race","width"], _chart10);
  main.variable(observer()).define(["md"], _129);
  main.variable(observer()).define(["md"], _130);
  main.variable(observer("points_extent")).define("points_extent", ["d3","viz_data11"], _points_extent);
  main.variable(observer("color11")).define("color11", ["d3","points_extent"], _color11);
  main.variable(observer()).define(["legend","color11"], _133);
  main.variable(observer("heatmap")).define("heatmap", ["d3","DOM","top_10_constructors","top_20_drivers","viz_data11","color11"], _heatmap);
  main.variable(observer()).define(["md"], _135);
  main.variable(observer()).define(["md"], _136);
  main.variable(observer("lightgray")).define("lightgray", _lightgray);
  const child6 = runtime.module(define5);
  main.import("legend", child6);
  main.import("swatches", child6);
  main.import("Swatches", child6);
  const child7 = runtime.module(define6);
  main.import("PieChart", child7);
  const child8 = runtime.module(define7);
  main.import("DivergingBarChart", child8);
  const child9 = runtime.module(define8);
  main.import("Scatterplot", child9);
  return main;
}
