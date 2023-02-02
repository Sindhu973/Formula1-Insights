import define1 from "./a33468b95d0b15b0@808.js";
import define2 from "./50064204b82fdf22@645.js";
import define3 from "./c23a2a3474c7b173@597.js";
import define4 from "./dea0d0ec849491a6@508.js";
import define5 from "./86944e959995fdeb@496.js";
import define6 from "./143b0df85895786b@1350.js";
import define7 from "./64e74b1cb96692d4@377.js";
import define8 from "./94ec6a96c46fc206@1730.js";
import define9 from "./0a1edcdbbfea1bbe@1458.js";
import define10 from "./8072d55735c62970@1101.js";
import define11 from "./bf3730b8fcc5004c@1214.js";

function _1(md){return(
md`# Group Project: Final Draft`
)}

function _2(md){return(
md`# Formula 1 Insights`
)}

function _untitled(FileAttachment){return(
FileAttachment("Unknown-2").image()
)}

function _4(md){return(
md`## Team Members
-  CHETAN INGLE: [cmi8525@nyu.edu](mailto:cmi8525@nyu.edu)
-  LAKSHANA KOLUR: [lk2719@nyu.edu](mailto:lk2719@nyu.edu)
-  SINDHU BHOOPALAM DINESH: [sb8019@nyu.edu](mailto:sb8019@nyu.edu)`
)}

function _5(md){return(
md`## Introduction`
)}

function _6(md){return(
md`Formula One (also known as Formula 1 or F1) is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the Fédération Internationale de l'Automobile (FIA). Below is a short video that gives an overview on how the sport works.`
)}

function _7(html){return(
html`<iframe width="700" height="415" src="https://www.youtube.com/embed/T_GFuxOP7gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
)}

function _8(md){return(
md`
### Background: 
Formula One (F1) has a competition structure that involves ten teams, with two drivers per team. It uses point systems to determine two annual World Championships: one for drivers, the other for constructors. It is effectively a league table format, with points racked up over the course of the season, that determine the two world championships. A Formula One Grand Prix event spans a weekend. It begins with three free practice sessions. A qualifying session is held after the last free practice session which determines the starting order for the race on Sunday.  

### Analysis plan: 
Initially, we start with getting to know the sport. We explore the data across all years and use aggregate statistics to understand where the most races have been held, who the most popular constructors and drivers are. Next we move on to comparisons with respect to specific factors - races, circuits, teams, pitstops to understand racing strategies. Once we've established an understanding of the important aspects of this sport, we move to performing detailed analysis of a particular season. The F1 2021 was action-packed and a thrilling season, having a close call between Red Bull driver Max Verstappen and the Mercedes driver Lewis Hamilton. Hence, we highlight the details of the 2021 season and also compare the performances of these top two drivers.

### Goal:
To get a better insight of how various constructors and drivers performed at different circuits and to understand how the 2021 F1 Season progressed to reach its current glory.`
)}

function _9(md){return(
md`### Dataset:

Here is a sample of tables from our dataset`
)}

function _10(md){return(
md`### Table 1: Results.csv`
)}

function _11(Inputs,results){return(
Inputs.table(results)
)}

function _12(md){return(
md`### Table 2: Drivers.csv`
)}

function _13(Inputs,drivers){return(
Inputs.table(drivers)
)}

function _14(md){return(
md`### Table 3: Constructor.csv`
)}

function _15(Inputs,constructors){return(
Inputs.table(constructors)
)}

function _16(md){return(
md`### Let's get to know the sport!`
)}

function _17(md){return(
md`## What is the popularity of the game across the world i.e. how are the race circuits distributed across the world?`
)}

function _18(legend,color_1_1){return(
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
      .attr('fill', d => circuits_dist.has(d.properties.NAME) ? color_1_1(circuits_dist.get(d.properties.NAME)) : "lightgray")
      .attr('stroke', 'white');

  return svg.node();
}


function _20(md){return(
md`## What is the distribution of races held across the world?`
)}

function _21(legend,color_1_2){return(
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
      .attr('fill', d => racesPerCountry.has(d.properties.NAME) ? color_1_2(racesPerCountry.get(d.properties.NAME)) : "lightgray")
      .attr('stroke', 'white');

  return svg.node();
}


function _23(md){return(
md`Since we want to analyse a distribution of data across the world, a choropleth map is best suited for this task. 
We can see in the first map how the circuits are distributed - with a concentration of circuits in Europe (shown with a darker colour) as well as the United States (11 in number) as well as UK (4). 
However, it isn't enough to see which countries/continents have more circuits as some circuits may also be inactive, we need to see how this maps to the actual number of races held at these circuits. This can be seen in the second map. 

It can be noticed that although they are quite coherent, there is a slight difference between the two. The majority of races (where the hue is the highest)are held in Europe, especially in Spain, France, Italy (which not surprisingly is where the best teams are from!). 

Now that we have sufficient information about the circuits as well as the races held around the world, lets divert our attention to the drivers that are racing in these circuits. `
)}

function _24(md){return(
md`## Who are the top/most popular drivers over the last few years?`
)}

function _chart(BubbleChart,files){return(
BubbleChart(files, {
  label: d => d.driverName,
  value: d => d.points, 
  width: 700
})
)}

function _26(md){return(
md`A bubble map seems appropriate to capture the top drivers in F1 over the last few years since we have a large number of drivers and the size of the bubbles gives us a good visualization to understand their standing. In this case, we are assuming that the top drivers are the ones who have scored most points over the years.
By sorting the data, we can see the biggest circles (and hence, best players) in the center drawing our attention to it which is an added advantage of using a bubble map - we can look at all the players at once in addition to focusing on the best ones. 
The top players as seen are Lewis Hamilton, Michael Schumacher, Max Verstappen, Sebastian Vettel, Kimi, Valteri Bottas, and so on. 
A disadvantage to this chart can be that the players towards the edges cannot be seen accurately. However, since our focus is on the main players, we can see them clearly enough. 

An important observation is that the top players identified from this chart are from Britain and Europe predominantly. 
This corroborates our claim that the popularity in the European countries could be because the most successful and popular drivers originate from there.
`
)}

function _27(md){return(
md`Now that we have analysed the drivers, lets see which are the top constructors and how they perform in some popular circuits. `
)}

function _28(md){return(
md`## Which are the top constructors? How does their performance compare on each race circuit?`
)}

function _29(swatches,typeColor){return(
swatches({color: typeColor})
)}

function _30(width,d3,topTeams,stacked,typeColor)
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


function _31(md){return(
md`In the same way as calculating the top drivers, the top constructors are assumed to be the teams who have scored the most number of points. We got the top 10 teams, however, that did not seem like enough information which lead to the question of - 'How do these top constructors compare in performance on the race circuits?'

This led to the stacked bar chart visualization shown above where we visualize the top 10 teams points distribution over different circuits. Displaying this over all the 76 circuits would not be a good visualization since it would be too crowded. Hence, we researched which were considered the most popular tracks on the internet - Monaco, Silverstone, Spa, Villaneuve, Red Bull Ring, and compared the performance for these. In addition, the horizontal bars help to compare the different colours better as compared to vertical bars.

As seen, this substantiates our claim that the most popular drivers, constructors and circuits are mostly focused in the European countries, where the sport is more popular. For example, Ferrari is from Italy, McLaren & Williams are from UK, Mercedes is a German company. 

Now that we have a basic understanding of the sport, who its top teams and drivers are, where they hold their races, etc. let's see what makes these teams/drivers so good! It is common for drivers to switch teams so let us understand the correlation between the top few drivers and constructors.`
)}

function _32(md){return(
md`## Let's understand the performance of the popular constructors and drivers!`
)}

function _33(legend,color11){return(
legend({
  color: color11,
  width: 500,
  ticks: 5,
  title: 'Championship Points'
})
)}

function _heatmap11(d3,DOM,top_10_constructors_new,top_20_drivers_new,viz_data11_new,color11)
{
  const height = 800
  const width = 900
  const marginLeft = 105
  const marginTop = 35
  const svg = d3.select(DOM.svg(width, height))
    .attr('viewBox', `-${marginLeft} -${marginTop} ${width} ${height}`)
  
  // Define x axis
  const x = d3.scaleBand()
    .range([0, width - 110])
    .domain(top_10_constructors_new)
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
		.domain(top_20_drivers_new)
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
		.data(viz_data11_new)
		.enter().append('rect')
			.attr('x', d => x(d.Constructors))
			.attr('y', d => y(d.Drivers))
			.attr('width', x.bandwidth())
			.attr('height', y.bandwidth())
			.attr('fill', d => color11(d.points))
  
  return svg.node()
}


function _35(md){return(
md`It would be difficult to compare all the constructors with all the drivers. So, we've decided to choose the top ones for our visualization. 

To understand how the top drivers and top constructors are correlated, a heatmap is used. The top drivers and constructors are chosen in the same way as before i.e., by sorting based on the championship points throughout their career. The visual channel is the colour. The darker colour represents that the driver contributed more points to that team/constructor.

The heatmap also shows how consistent each driver was. It also helps compare drivers and to understand how a driver performed with each team that they've been in. We can see that the top performing drivers like Sebastian Vettel, Lewis Hamilton, Max Verstappen have consistently scored points for the teams that they have been in, thus making them some of the favourites. It can also be seen that for the last two teams - Benetton and Tyrrel, not many of the popular drivers constributed. This implies that there are other drivers who contributed to these teams, but do not qualify among the top 20 drivers. `
)}

function _36(md){return(
md`## What are the fastest lap times for the above constructors?`
)}

function _37(speedometer,Constructors_Circuits_Monaco_Grid){return(
speedometer(Constructors_Circuits_Monaco_Grid, "Monaco")
)}

function _38(speedometer,Constructors_Circuits_silverstone_Grid){return(
speedometer(Constructors_Circuits_silverstone_Grid, "Silverstone")
)}

function _39(speedometer,Constructors_Circuits_spa_Grid){return(
speedometer(Constructors_Circuits_spa_Grid, "Spa")
)}

function _40(speedometer,Constructors_Circuits_Villenueuve_Grid){return(
speedometer(Constructors_Circuits_Villenueuve_Grid, "Villenueuve")
)}

function _41(speedometer,Constructors_Circuits_RedBullRing_Grid){return(
speedometer(Constructors_Circuits_RedBullRing_Grid, "Red Bull Ring")
)}

function _42(md){return(
md`To analyse the performance of the constructors, the first metric used is the fastest lap. We have used speedometer charts to visualize the fastest lap for the top 5 constructors identified above and for the five circuits identified above. The visual channel is the degree or angle of the meter. It represents how fast the car was able to cover the entire track length during the race. We have picked the fastest lap made by each team in the respective circuit between 2016-2021.

We can see that the lap times vary with each circuit and constructor. Although some teams perform very well in one circuit they might not in the other circuit. For example, Mercedes does very well in Villenueuve but performs poorly in Silverstone. This implies that each car is built in such a way that some circuits(with lesser high speed corner and straight line tracks) are better for it compared to others.  `
)}

function _43(md){return(
md`## How have the pit stop times changed over the past 5 years for top few teams/constructors?`
)}

function _44(md){return(
md`#### NOTE: Please run this cell below to make sure that the next visualization is rendered correctly.`
)}

function _pitStopsByConstructor2(d3,pitStopsData){return(
d3.group(pitStopsData,d=>d.constructor)
)}

function _pitStopSvg(dimensions,d3,yearExtent,constructorAllYearData2,nCols,col,row,area,xAxis,yAxis)
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
    .data(constructorAllYearData2)
    .join('g')
      .attr('transform', (d, i) => {
        /* i is the current index
           in this case, the value of i will be from 0-15. */
        
        // get the row index and column index for this cell
        const r = Math.floor(i / nCols);
        const c = i % nCols;
        
        // use the scales to get the x, y coordinates
        return `translate(${col(c)}, ${row(r)})`;
      });
  
  // add the area to each cell
  
  cells.append('path')
      .attr('d', d => area(d.data))
      .attr('fill', 'steelblue');
 
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
  xAxes.filter((d, i) => i < constructorAllYearData2.length - nCols)
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
  yAxes.filter((d, i) => i % nCols !== 0)
    .selectAll('text')
    .remove();
  
  return svg.node();
}


function _47(md){return(
md`
Pit stops are used to change the tyres on the car and thus generally amounts to loss of valuable time in the race. Thus, the pit stop strategies and the execution is an important aspect for each team.

We have used area charts to visualize the average pitstop duration for constructors from 2016-2021. The visual channel is the area of the chart that represents the duration of the pit stop. We notice that Mercedes and Red Bull have lower pit stop times compared to other teams and lesser fluctuations across the years. This shows that the pit crew is well trained and is one of reasons why these two teams have been very successful recently. With respect to the other teams, the general trend is a decrease in the duration but there are some cases like the Haas F1 team where there is an increase recently. This could be attributed many reasons - slower cars, issues in the pit lane or with the pit stop crew. This could also be one of the reasons for their poor performance in the recent years. `
)}

function _48(md){return(
md`### Now that we analysed the most popular teams, let's see how consistent they have been in the recent year (2021) as well!`
)}

function _49(md){return(
md`## What does the points progression look like for all the drivers driver throughout the season?`
)}

function _multilineChart(LineChart,q7VizData,d3,width){return(
LineChart(q7VizData, {
  x: d => d.race,
  xType: d3.scaleLinear,
  y: d => d.points,
  z: d => d.driver,
  yLabel: "↑ Points",
  width,
  height: 500,
  color: "steelblue"
})
)}

function _51(md){return(
md`
We have used multi-line charts to show how the points for each driver progressed from 1 to the 22nd race. Since there are 20 drivers in each season, its difficult to use colour as a channel to distinguish between the drivers in a multiline chart. Thus, we have chosen the interactive multiline chart. The user can choose the line and see the points progression for that driver. This shows the progress and also allows for comparison between the drivers after each race. 

As expected, the top performing drivers are from the most well performing teams - Red Bull, Mercedes, Ferarri, McLaren. We can also see that the top 2 drivers - Max Verstappen and Lewis Hamilton had a lot of overlap until the end making the season more exciting! Further, we explore how each of them performed in terms of other metrics.`
)}

function _52(md){return(
md`## What are total wins, podiums, DNFs( Did Not Finish ), laps driven for each driver?`
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

function _55(md){return(
md`It's not sufficient just to know the points progression, we also need to compare the driers w.r.t wins, podiums and other metrics.

We have used an interactive pie chart to display the comparison among all drivers from the 3 teams - Red Bull, Mercedes, Ferarri, McLaren for wins, podiums, DNFs (implying that the driver did not finish the race), laps driven. This way, many statistics can be seen and compared in one diagram as required.

As we can observe from the diagram, every driver from these teams has atleast 1 DNF and have driven almost similar number of laps. So, we need to look at the other metrics. With respect to podiums, Max and Lewis have the maximum, as compared to the other drivers. The same is the case with Wins as well. It can also be observed that although, Max & Lewis performed well, they had DNFs as well. This shows that there are ways to recover in this sport, which makes it more competitive in nature.

Now, lets look at these two more closely to see how their competition looked after each race.`
)}

function _56(md){return(
md`## What does the points gap look like for the top 2 drivers after each race? 
More specifically, how did it look for Max Verstappen and Lewis Hamilton?`
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

function _58(md){return(
md`
The diverging bar chart shows the points difference between Hamilton and Verstappen, after each race in sequence. This makes it easy to understand how the points difference shrunk or increased after each race and when the competition got close. Red colour represents Hamilton's lead and blue colour represents Verstappen's lead. 

We can see that the competition was very close,  which eventually ended with Max Verstappen, from Red Bull team, winning the championship in 2021.`
)}

function _59(md){return(
md`## Conclusion
From the visualizations, we understood who the top drivers, teams and circuits were, since the inception of the sport.
To understand what makes the top teams successful, we explored other metrics from the available data - such as pit stops, fastest lap times. While pit stop times were a good metric to understand the team’s performance, the fastest lap could be dependent on many other things.
Further, by observing the latest season more closely, we were able to compare the low level details - wins, podiums, DNFs for teams and understand just how competitive the sport is.
Thus, the competitive nature of the sport, the scope for innovation and strategy in every aspect makes the sport very thrilling and attributes to it popularity!`
)}

function _60(md){return(
md`---
# Appendix`
)}

function _61(md){return(
md`## Imports`
)}

function _lightgray(){return(
"#dcdcdc"
)}

function _geoJSON(FileAttachment){return(
FileAttachment("countries-50m.json").json()
)}

function _76(md){return(
md`## Data Transformation`
)}

function _77(md){return(
md`#### Question 1.1`
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

function _80(circuits_dist)
{
  const usa_circuits = circuits_dist.get("USA");
  circuits_dist.set('United States of America', usa_circuits);
  
  const uk_circuits = circuits_dist.get("UK");
  circuits_dist.set('United Kingdom', uk_circuits);

  const uae_circuits = circuits_dist.get("UAE");
  circuits_dist.set('United Arab Emirates', uae_circuits);
  
}


function _max_circuits(d3,circuits_dist){return(
d3.max(Array.from(circuits_dist.values()))
)}

function _color_1_1(d3,max_circuits){return(
d3.scaleSequential()
  .domain([0, max_circuits])
  .interpolator(d3.interpolateBlues)
  .unknown('lightgray')
)}

function _83(md){return(
md`#### Question 1.2`
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

function _88(racesPerCountry)
{
  const usa_races = racesPerCountry.get("USA");
  racesPerCountry.set('United States of America', usa_races);
  
  const uk_races = racesPerCountry.get("UK");
  racesPerCountry.set('United Kingdom', uk_races);

  const uae_races = racesPerCountry.get("UAE");
  racesPerCountry.set('United Arab Emirates', uae_races);
  
}


function _maxCircuits(d3,racesPerCountry){return(
d3.max(racesPerCountry, d=>d[1])
)}

function _color_1_2(d3,maxCircuits){return(
d3.scaleSequential()
  .domain([0, maxCircuits])
  .interpolator(d3.interpolateReds)
  .unknown('lightgray')
)}

function _91(md){return(
md`#### Question 2`
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

function _99(md){return(
md`#### Question 3.1`
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
  [1,'McLaren'], [3,'Williams'], [4,'Alpine F1 Team'], [6,'Ferrari'], [9,'Red Bull'], [10,'Aston Martin'], [22,'Benetton'], [25,'Tyrrell'], [32,'Team Lotus'], [131,'Mercedes']
])
)}

function _103(md){return(
md`#### Question 3.2`
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
['Monaco', 'Silverstone', 'Spa', 'Villeneuve', 'Red Bull Ring']
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

function _113(md){return(
md`#### Question 5`
)}

function _raceMapById(d3,races){return(
d3.group(races, d=>d.raceId)
)}

function _getMilliseconds(){return(
function getMilliseconds(lapTime){
  if(lapTime != "\\N" ){
    const min = parseInt(lapTime.split(":")[0])
    const sec = parseInt(lapTime.split(":")[1].split(".")[0])
    const msec = parseInt(lapTime.split(":")[1].split(".")[1])
    const millis = min * 60000 + sec*1000 + msec
    return parseInt(millis)
  } 
  return 0;
}
)}

function _top5Constructors(topTeams){return(
new Set(topTeams.map(d=>d.constructorId).slice(0,5))
)}

function _circuitsGrouped(d3,circuits){return(
d3.group(circuits, d=>d.circuitRef)
)}

function _getCircuitIdByCircuitRef(circuitsGrouped){return(
function getCircuitIdByCircuitRef(circuitName){
  return circuitsGrouped.get(circuitName)[0].circuitId;
}
)}

function _getCircuitIdByRaceId(raceMapById){return(
function getCircuitIdByRaceId(raceId){
  return raceMapById.get(raceId)[0].circuitId;
}
)}

function _constructorResults(d3,results,getMilliseconds,getCircuitIdByRaceId){return(
d3.group(results.map(r=>({
  'ctrId': r.constructorId,
  'fastestLapTime': getMilliseconds(r.fastestLapTime),
  'circuitId': getCircuitIdByRaceId(r.raceId)
})).filter(d => d.fastestLapTime != 0), d=>d.ctrId,d=>d.circuitId)
)}

function _Constructors_Circuits(top5Constructors,top5circuits,getCircuitIdByCircuitRef,constructorResults,d3)
{
  let topConNamesMap = new Map([['Ferrari',6], ['Mercedes', 131], ['Red Bull',9], ['McLaren',1], ['Williams',3]])
  let result = []
  top5Constructors.forEach(co=>{
    top5circuits.forEach(ci=>{
      let constructorId = topConNamesMap.get(co);
      let circuitId = getCircuitIdByCircuitRef(ci);
      let cociData = constructorResults.get(constructorId).get(circuitId)
      let fastest = d3.min(cociData, d=> d.fastestLapTime)
      let t = {
        constructorName: co,
        circuitName: ci,
        fastestLapTime: fastest/1000
      }
     
      result.push(t)
    })
  })
  return result;
}


function _gridPositions(d3){return(
d3.cross(d3.range(5), d3.range(5), (row, col) => ({row, col}))
)}

function _Constructors_Circuits_Grid(d3,Constructors_Circuits,gridPositions){return(
d3.zip(Constructors_Circuits, gridPositions)
    .map(([data, position]) => ({...data, ...position}))
)}

function _fastestLapTimeExtent(d3,Constructors_Circuits){return(
d3.extent(Constructors_Circuits, d => d.fastestLapTime)
)}

function _speedometer(d3,lightgray){return(
function speedometer(circuitData, circuitName) {

  let extent = d3.extent(circuitData, d => d.fastestLapTime)
  
  const margin = {top: 30, right: 20, bottom: 0, left: 30};
  const visWidth = 750 - margin.left - margin.right;
  const visHeight = 150 - margin.top - margin.bottom;

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
      .text("Fastest Lap Times: " +circuitName );

  // set up scales
  
  const column = d3.scaleBand()
      .domain(d3.range(5))
      .range([0, visWidth])
      .paddingInner(0.05);
  
  const row = d3.scaleBand()
      .domain(d3.range(1))
      .range([0, visHeight])
      .paddingInner(0.05);
  
  const angle = d3.scaleLinear()
      .domain([Math.floor(extent[0]), Math.ceil(extent[1])])
      .range([0, Math.PI]);
  
  const radius = Math.min(column.bandwidth(), row.bandwidth()) / 2;
  
  // create a group for each cell in the grid
  const cell = g.selectAll('g')
    .data(circuitData)
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
      .attr('font-size', '10px')
      .text(d => d.constructorName);
  
  cell.append('text')
      .attr('font-size', '12px')
      .attr('fill', lightgray)
      .attr('x', -radius)
      .attr('y', 10)
      .text(Math.floor(extent[0])-2);
  
  cell.append('text')
      .attr('font-size', '12px')
      .attr('fill', lightgray)
      .attr('x', radius)
      .attr('y', 10)
      .text(Math.ceil(extent[1]));

  return svg.node();
}
)}

function _Constructors_Circuits_Monaco(Constructors_Circuits){return(
Constructors_Circuits.filter(d=>d.circuitName === "monaco")
)}

function _Constructors_Circuits_Monaco_Grid(d3,Constructors_Circuits_Monaco,gridPositions){return(
d3.zip(Constructors_Circuits_Monaco, gridPositions)
    .map(([data, position]) => ({...data, ...position}))
)}

function _Constructors_Circuits_silverstone(Constructors_Circuits){return(
Constructors_Circuits.filter(d=>d.circuitName === "silverstone")
)}

function _Constructors_Circuits_silverstone_Grid(d3,Constructors_Circuits_silverstone,gridPositions){return(
d3.zip(Constructors_Circuits_silverstone, gridPositions)
    .map(([data, position]) => ({...data, ...position}))
)}

function _Constructors_Circuits_spa(Constructors_Circuits){return(
Constructors_Circuits.filter(d=>d.circuitName === "spa")
)}

function _Constructors_Circuits_spa_Grid(d3,Constructors_Circuits_spa,gridPositions){return(
d3.zip(Constructors_Circuits_spa, gridPositions)
    .map(([data, position]) => ({...data, ...position}))
)}

function _Constructors_Circuits_villeneuve(Constructors_Circuits){return(
Constructors_Circuits.filter(d=>d.circuitName === "villeneuve")
)}

function _Constructors_Circuits_Villenueuve_Grid(d3,Constructors_Circuits_villeneuve,gridPositions){return(
d3.zip(Constructors_Circuits_villeneuve, gridPositions)
    .map(([data, position]) => ({...data, ...position}))
)}

function _Constructors_Circuits_RedBull(Constructors_Circuits){return(
Constructors_Circuits.filter(d=>d.circuitName === "red_bull_ring")
)}

function _Constructors_Circuits_RedBullRing_Grid(d3,Constructors_Circuits_RedBull,gridPositions){return(
d3.zip(Constructors_Circuits_RedBull, gridPositions)
    .map(([data, position]) => ({...data, ...position}))
)}

function _136(md){return(
md`#### Question 6`
)}

function _pitStopsByConstructor(d3,pitStopsData){return(
d3.group(pitStopsData,d=>d.constructor)
)}

function _constructorNameChanges()
{
  const map = new Map()

  map.set('AlphaTauri', 'Toro Rosso')
  map.set('Alfa Romeo', 'Sauber')
  map.set('Racing Point', 'Force India')
  map.set('Aston Martin', 'Racing Point')
  map.set('Alpine F1 Team', 'Renault')
  return map
}


function _dataAdjustment(constructorNameChanges,pitStopsByConstructor)
{
  let temp = new Map()
  
for (let [key, value] of constructorNameChanges) {
  let newConst = key
  let oldConst = value

  

  console.log(key+":"+value)
  let oldData = pitStopsByConstructor.get(oldConst)
  console.log(oldData)
  let newData = pitStopsByConstructor.get(newConst)

  oldData.forEach(x=>{
    x.constructor = newConst
    newData.push(x)
  })

  // console.log(oldData)
  // console.log(newData)
  console.log('------------------------------')

  // return q5DataGrouped

}
}


function _constructorAllYearData(pitStopsByConstructor2)
{
  let temp = []
  for(let [key, value] of pitStopsByConstructor2){
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


function _minYear(d3,constructorAllYearData){return(
d3.min(constructorAllYearData, constructor => d3.min(constructor.data, d => d.year))
)}

function _maxYear(d3,constructorAllYearData){return(
d3.max(constructorAllYearData, constructor => d3.max(constructor.data, d => d.year))
)}

function _yearExtent(minYear,maxYear){return(
[minYear,maxYear]
)}

function _maxPitStopDuration(d3,constructorAllYearData){return(
d3.max(constructorAllYearData, constructor => d3.max(constructor.data, d => d.duration))
)}

function _constructorAllYearData2(constructorAllYearData,minYear,maxYear)
{
    let res = []
    for(let i=0; i <constructorAllYearData.length;i++){
        let constructor = constructorAllYearData[i].constructor
        let psdata = constructorAllYearData[i].data
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
        }  
        let fin = {
            'constructor': constructor,
            'data': yearData
        }

        res.push(fin)
    }
    return res
}


function _dimensions(width)
{
  const margin = { top: 30, bottom: 20, right: 10, left: 30 };
  const visWidth = width - margin.left - margin.right;
  const visHeight = 600 - margin.top - margin.bottom;
  
  return { margin, visWidth, visHeight };
}


function _nRows(){return(
3
)}

function _nCols(){return(
4
)}

function _row(d3,nRows,dimensions){return(
d3.scaleBand()
  .domain(d3.range(nRows))
  .range([0, dimensions.visHeight])
  .padding(0.05)
)}

function _col(d3,nCols,dimensions){return(
d3.scaleBand()
  .domain(d3.range(nCols))
  .range([0, dimensions.visWidth])
  .padding(0.1)
)}

function _y(d3,maxPitStopDuration,row){return(
d3.scaleLinear()
  .domain([0, maxPitStopDuration])
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
  .ticks(5)
)}

function _157(md){return(
md`#### Question 7`
)}

function _drivers7(q7datafinal){return(
q7datafinal.map(d=>d.driver)
)}

function _159(md){return(
md`#### Question 8`
)}

function _getMapArray(wins,podiums,DNFs,laps){return(
function getMapArray(option) 
{
  const drivers = ["Max Verstappen","Sergio Perez", "Lewis Hamilton", "Valtteri Bottas", "Lando Norris", "Daniel Ricciardo", "Charles Leclerc", "Carlos Sainz" ]
  if(option == "Wins"){
    return wins.filter(d=>drivers.includes(d.map) )
  }
  else if(option == "Podiums"){
    return podiums.filter(d=>drivers.includes(d.map) )
  }
  else if(option == "DNFs"){
    return DNFs.filter(d=>drivers.includes(d.map) )
  }
  else{
    return laps.filter(d=>drivers.includes(d.map) )
  }
}
)}

function _width8(){return(
923
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["countries-50m.json", {url: new URL("./files/55260abbc777c0a3b8fed19f3929dd822fef9d5118b53b76b2176d20782910e599eac919999ea8ee85a60b783fd37082574f6591fd46c0d70ddf9b00df71ce27.json", import.meta.url), mimeType: "application/json", toString}],
    ["Unknown-2", {url: new URL("./files/6c1e7d35435a4b6aa86d7a62306febd864b594c31c7f96391875a36b862e25cf91e8101ad3083109a186c0c63936b5f08d4de9f70dd9b2cbd0aa81b8fb288169.jpeg", import.meta.url), mimeType: "image/jpeg", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("untitled")).define("untitled", ["FileAttachment"], _untitled);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["html"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["Inputs","results"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["Inputs","drivers"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["Inputs","constructors"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["legend","color_1_1"], _18);
  main.variable(observer("worldChart_1_1")).define("worldChart_1_1", ["width","d3","geoJSON","circuits_dist","color_1_1"], _worldChart_1_1);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["legend","color_1_2"], _21);
  main.variable(observer("worldChart_1_2")).define("worldChart_1_2", ["width","d3","geoJSON","racesPerCountry","color_1_2"], _worldChart_1_2);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer("chart")).define("chart", ["BubbleChart","files"], _chart);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer()).define(["swatches","typeColor"], _29);
  main.variable(observer()).define(["width","d3","topTeams","stacked","typeColor"], _30);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer()).define(["legend","color11"], _33);
  main.variable(observer("heatmap11")).define("heatmap11", ["d3","DOM","top_10_constructors_new","top_20_drivers_new","viz_data11_new","color11"], _heatmap11);
  main.variable(observer()).define(["md"], _35);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer()).define(["speedometer","Constructors_Circuits_Monaco_Grid"], _37);
  main.variable(observer()).define(["speedometer","Constructors_Circuits_silverstone_Grid"], _38);
  main.variable(observer()).define(["speedometer","Constructors_Circuits_spa_Grid"], _39);
  main.variable(observer()).define(["speedometer","Constructors_Circuits_Villenueuve_Grid"], _40);
  main.variable(observer()).define(["speedometer","Constructors_Circuits_RedBullRing_Grid"], _41);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer()).define(["md"], _43);
  main.variable(observer()).define(["md"], _44);
  main.variable(observer("pitStopsByConstructor2")).define("pitStopsByConstructor2", ["d3","pitStopsData"], _pitStopsByConstructor2);
  main.variable(observer("pitStopSvg")).define("pitStopSvg", ["dimensions","d3","yearExtent","constructorAllYearData2","nCols","col","row","area","xAxis","yAxis"], _pitStopSvg);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer()).define(["md"], _48);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer("multilineChart")).define("multilineChart", ["LineChart","q7VizData","d3","width"], _multilineChart);
  main.variable(observer()).define(["md"], _51);
  main.variable(observer()).define(["md"], _52);
  main.variable(observer("viewof selected_option")).define("viewof selected_option", ["Inputs"], _selected_option);
  main.variable(observer("selected_option")).define("selected_option", ["Generators", "viewof selected_option"], (G, _) => G.input(_));
  main.variable(observer("chart8")).define("chart8", ["PieChart","getMapArray","selected_option","width8"], _chart8);
  main.variable(observer()).define(["md"], _55);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer("chart9")).define("chart9", ["DivergingBarChart","q9datafinal","width","d3"], _chart9);
  main.variable(observer()).define(["md"], _58);
  main.variable(observer()).define(["md"], _59);
  main.variable(observer()).define(["md"], _60);
  main.variable(observer()).define(["md"], _61);
  main.variable(observer("lightgray")).define("lightgray", _lightgray);
  const child1 = runtime.module(define1);
  main.import("legend", child1);
  main.import("swatches", child1);
  main.import("Swatches", child1);
  const child2 = runtime.module(define2);
  main.import("PieChart", child2);
  const child3 = runtime.module(define3);
  main.import("DivergingBarChart", child3);
  const child4 = runtime.module(define4);
  main.import("Scatterplot", child4);
  const child5 = runtime.module(define5);
  main.import("LineChart", child5);
  const child6 = runtime.module(define6);
  main.import("circuits", child6);
  main.import("constructor_results", child6);
  main.import("constructor_standings", child6);
  main.import("constructors", child6);
  main.import("driver_standings", child6);
  main.import("drivers", child6);
  main.import("lap_times", child6);
  main.import("pit_stops", child6);
  main.import("qualifying", child6);
  main.import("races", child6);
  main.import("results", child6);
  main.import("sprint_results", child6);
  main.import("status", child6);
  const child7 = runtime.module(define7);
  main.import("BubbleChart", child7);
  main.variable(observer("geoJSON")).define("geoJSON", ["FileAttachment"], _geoJSON);
  const child8 = runtime.module(define6);
  main.import("q4final", child8);
  main.import("pitStopsData", child8);
  main.import("q6final", child8);
  main.import("topDrivers", child8);
  main.import("driversWhoSwitched", child8);
  const child9 = runtime.module(define8);
  main.import("driversCleaned", child9);
  const child10 = runtime.module(define9);
  main.import("viz_data11", child10);
  main.import("top_10_constructors", child10);
  main.import("top_20_drivers", child10);
  main.import("getConstructorName", child10);
  main.import("getDriverName", child10);
  main.import("drivers2021", child10);
  main.import("DNFs", child10);
  main.import("wins", child10);
  main.import("podiums", child10);
  main.import("laps", child10);
  main.import("q7datafinal", child10);
  main.import("q9datafinal", child10);
  main.import("q10data", child10);
  main.import("q7VizData", child10);
  const child11 = runtime.module(define10);
  main.import("color11", child11);
  main.import("top_10_constructors_new", child11);
  main.import("top_20_drivers_new", child11);
  main.import("viz_data11_new", child11);
  main.import("getConstRecentName", child11);
  const child12 = runtime.module(define11);
  main.import("q5DataGrouped12", child12);
  main.variable(observer()).define(["md"], _76);
  main.variable(observer()).define(["md"], _77);
  main.variable(observer("countries")).define("countries", ["circuits"], _countries);
  main.variable(observer("circuits_dist")).define("circuits_dist", ["d3","circuits"], _circuits_dist);
  main.variable(observer()).define(["circuits_dist"], _80);
  main.variable(observer("max_circuits")).define("max_circuits", ["d3","circuits_dist"], _max_circuits);
  main.variable(observer("color_1_1")).define("color_1_1", ["d3","max_circuits"], _color_1_1);
  main.variable(observer()).define(["md"], _83);
  main.variable(observer("races_dist")).define("races_dist", ["d3","races"], _races_dist);
  main.variable(observer("circuitCountry")).define("circuitCountry", ["d3","circuits"], _circuitCountry);
  main.variable(observer("data_1")).define("data_1", ["races_dist","circuitCountry"], _data_1);
  main.variable(observer("racesPerCountry")).define("racesPerCountry", ["d3","data_1"], _racesPerCountry);
  main.variable(observer()).define(["racesPerCountry"], _88);
  main.variable(observer("maxCircuits")).define("maxCircuits", ["d3","racesPerCountry"], _maxCircuits);
  main.variable(observer("color_1_2")).define("color_1_2", ["d3","maxCircuits"], _color_1_2);
  main.variable(observer()).define(["md"], _91);
  main.variable(observer("totalPoints")).define("totalPoints", ["d3","driver_standings"], _totalPoints);
  main.variable(observer("tp")).define("tp", ["d3","driver_standings"], _tp);
  main.variable(observer("topDriverIds")).define("topDriverIds", ["totalPoints"], _topDriverIds);
  main.variable(observer("intermediate")).define("intermediate", ["d3","driversCleaned"], _intermediate);
  main.variable(observer("topDriversAll")).define("topDriversAll", ["driversCleaned","topDriverIds"], _topDriversAll);
  main.variable(observer("topDrivers_q2")).define("topDrivers_q2", ["topDriversAll"], _topDrivers_q2);
  main.variable(observer("files")).define("files", ["totalPoints","intermediate"], _files);
  main.variable(observer()).define(["md"], _99);
  main.variable(observer("constructor_points")).define("constructor_points", ["d3","results"], _constructor_points);
  main.variable(observer("top10_constr")).define("top10_constr", ["constructor_points"], _top10_constr);
  main.variable(observer("topConNames")).define("topConNames", _topConNames);
  main.variable(observer()).define(["md"], _103);
  main.variable(observer("top10_data")).define("top10_data", ["results","top10_constr"], _top10_data);
  main.variable(observer("top5circuits")).define("top5circuits", _top5circuits);
  main.variable(observer("types")).define("types", ["circuits","top5circuits"], _types);
  main.variable(observer("race_circuit_map")).define("race_circuit_map", ["d3","races"], _race_circuit_map);
  main.variable(observer("raceId_data")).define("raceId_data", ["d3","top10_data","race_circuit_map","types"], _raceId_data);
  main.variable(observer("topTeams")).define("topTeams", ["d3","raceId_data","topConNames"], _topTeams);
  main.variable(observer("types_arr")).define("types_arr", _types_arr);
  main.variable(observer("typeColor")).define("typeColor", ["d3","types_arr"], _typeColor);
  main.variable(observer("stacked")).define("stacked", ["d3","types_arr","topTeams"], _stacked);
  main.variable(observer()).define(["md"], _113);
  main.variable(observer("raceMapById")).define("raceMapById", ["d3","races"], _raceMapById);
  main.variable(observer("getMilliseconds")).define("getMilliseconds", _getMilliseconds);
  main.variable(observer("top5Constructors")).define("top5Constructors", ["topTeams"], _top5Constructors);
  main.variable(observer("circuitsGrouped")).define("circuitsGrouped", ["d3","circuits"], _circuitsGrouped);
  main.variable(observer("getCircuitIdByCircuitRef")).define("getCircuitIdByCircuitRef", ["circuitsGrouped"], _getCircuitIdByCircuitRef);
  main.variable(observer("getCircuitIdByRaceId")).define("getCircuitIdByRaceId", ["raceMapById"], _getCircuitIdByRaceId);
  main.variable(observer("constructorResults")).define("constructorResults", ["d3","results","getMilliseconds","getCircuitIdByRaceId"], _constructorResults);
  main.variable(observer("Constructors_Circuits")).define("Constructors_Circuits", ["top5Constructors","top5circuits","getCircuitIdByCircuitRef","constructorResults","d3"], _Constructors_Circuits);
  main.variable(observer("gridPositions")).define("gridPositions", ["d3"], _gridPositions);
  main.variable(observer("Constructors_Circuits_Grid")).define("Constructors_Circuits_Grid", ["d3","Constructors_Circuits","gridPositions"], _Constructors_Circuits_Grid);
  main.variable(observer("fastestLapTimeExtent")).define("fastestLapTimeExtent", ["d3","Constructors_Circuits"], _fastestLapTimeExtent);
  main.variable(observer("speedometer")).define("speedometer", ["d3","lightgray"], _speedometer);
  main.variable(observer("Constructors_Circuits_Monaco")).define("Constructors_Circuits_Monaco", ["Constructors_Circuits"], _Constructors_Circuits_Monaco);
  main.variable(observer("Constructors_Circuits_Monaco_Grid")).define("Constructors_Circuits_Monaco_Grid", ["d3","Constructors_Circuits_Monaco","gridPositions"], _Constructors_Circuits_Monaco_Grid);
  main.variable(observer("Constructors_Circuits_silverstone")).define("Constructors_Circuits_silverstone", ["Constructors_Circuits"], _Constructors_Circuits_silverstone);
  main.variable(observer("Constructors_Circuits_silverstone_Grid")).define("Constructors_Circuits_silverstone_Grid", ["d3","Constructors_Circuits_silverstone","gridPositions"], _Constructors_Circuits_silverstone_Grid);
  main.variable(observer("Constructors_Circuits_spa")).define("Constructors_Circuits_spa", ["Constructors_Circuits"], _Constructors_Circuits_spa);
  main.variable(observer("Constructors_Circuits_spa_Grid")).define("Constructors_Circuits_spa_Grid", ["d3","Constructors_Circuits_spa","gridPositions"], _Constructors_Circuits_spa_Grid);
  main.variable(observer("Constructors_Circuits_villeneuve")).define("Constructors_Circuits_villeneuve", ["Constructors_Circuits"], _Constructors_Circuits_villeneuve);
  main.variable(observer("Constructors_Circuits_Villenueuve_Grid")).define("Constructors_Circuits_Villenueuve_Grid", ["d3","Constructors_Circuits_villeneuve","gridPositions"], _Constructors_Circuits_Villenueuve_Grid);
  main.variable(observer("Constructors_Circuits_RedBull")).define("Constructors_Circuits_RedBull", ["Constructors_Circuits"], _Constructors_Circuits_RedBull);
  main.variable(observer("Constructors_Circuits_RedBullRing_Grid")).define("Constructors_Circuits_RedBullRing_Grid", ["d3","Constructors_Circuits_RedBull","gridPositions"], _Constructors_Circuits_RedBullRing_Grid);
  main.variable(observer()).define(["md"], _136);
  main.variable(observer("pitStopsByConstructor")).define("pitStopsByConstructor", ["d3","pitStopsData"], _pitStopsByConstructor);
  main.variable(observer("constructorNameChanges")).define("constructorNameChanges", _constructorNameChanges);
  main.variable(observer("dataAdjustment")).define("dataAdjustment", ["constructorNameChanges","pitStopsByConstructor"], _dataAdjustment);
  main.variable(observer("constructorAllYearData")).define("constructorAllYearData", ["pitStopsByConstructor2"], _constructorAllYearData);
  main.variable(observer("minYear")).define("minYear", ["d3","constructorAllYearData"], _minYear);
  main.variable(observer("maxYear")).define("maxYear", ["d3","constructorAllYearData"], _maxYear);
  main.variable(observer("yearExtent")).define("yearExtent", ["minYear","maxYear"], _yearExtent);
  main.variable(observer("maxPitStopDuration")).define("maxPitStopDuration", ["d3","constructorAllYearData"], _maxPitStopDuration);
  main.variable(observer("constructorAllYearData2")).define("constructorAllYearData2", ["constructorAllYearData","minYear","maxYear"], _constructorAllYearData2);
  main.variable(observer("dimensions")).define("dimensions", ["width"], _dimensions);
  main.variable(observer("nRows")).define("nRows", _nRows);
  main.variable(observer("nCols")).define("nCols", _nCols);
  main.variable(observer("row")).define("row", ["d3","nRows","dimensions"], _row);
  main.variable(observer("col")).define("col", ["d3","nCols","dimensions"], _col);
  main.variable(observer("y")).define("y", ["d3","maxPitStopDuration","row"], _y);
  main.variable(observer("x")).define("x", ["d3","yearExtent","col"], _x);
  main.variable(observer("area")).define("area", ["d3","x","y"], _area);
  main.variable(observer("line")).define("line", ["d3","x","y"], _line);
  main.variable(observer("xAxis")).define("xAxis", ["d3","x"], _xAxis);
  main.variable(observer("yAxis")).define("yAxis", ["d3","y"], _yAxis);
  main.variable(observer()).define(["md"], _157);
  main.variable(observer("drivers7")).define("drivers7", ["q7datafinal"], _drivers7);
  main.variable(observer()).define(["md"], _159);
  main.variable(observer("getMapArray")).define("getMapArray", ["wins","podiums","DNFs","laps"], _getMapArray);
  main.variable(observer("width8")).define("width8", _width8);
  return main;
}
