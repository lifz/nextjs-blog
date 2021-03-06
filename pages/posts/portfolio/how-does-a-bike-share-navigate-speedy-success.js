import Head from 'next/head'
import Link from 'next/link'

export default function Portfolio() {
	return (
	<div className="container">
		<Head>
			<title>How does a bike-share navigate speedy success?</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		</Head>
		<body className="is-preload">
			
			<div id="wrapper">
				
				<div id="main">
					<div className="inner">
						
						<header id="header">
							<Link href="/">
								<a className="logo"><strong>Fengzhan Li</strong></a>
							</Link>
						</header>

						<section id="banner">
							<div className="content">
								<header>
									<h1>How does a bike-share navigate speedy success?</h1>
								</header>
							</div>
						</section>
												
						<section>
							<div id="toc_container">
								<h3 className="toc_title">Contents</h3>
								<ul className="toc_list">
									<li><Link href="#introduction"><a>Introduction</a></Link></li>
									<li><Link href="#ask"><a>I. Ask - Business task</a></Link></li>
									<li><Link href="#prepare"><a>II. Prepare - Data management</a></Link></li>
									<li><Link href="#process"><a>III. Process - Data cleaning</a></Link></li>
									<li><Link href="#analyse"><a>IV. Analyse - Data analysis</a></Link></li>
									<li><Link href="#share"><a>V. Share - Data visualization</a></Link></li>
									<li><Link href="#act"><a>VI. Act - Problem solving</a></Link></li>
								</ul>
							</div>
						</section>

						<section>
							
							<div className="content">
								
								<div id="introduction">
									<h2>Introduction</h2>
									<p>This case study is meant to be a capstone project for the Google Data Analytics Professional Certificate.</p>
									<h3>Scenario</h3>
									<ul>
										<li>Company: Cyclistic, a bike-share company in Chicago</li>
										<li>Marketing strategy: maximize the number of annual memberships</li>
										<li>Task: understand how casual riders and annual members use Cyclistic bikes differently</li>
										<li>Purpose: convert casual riders into annual members</li>
									</ul>
									<h3>Background information</h3>
									<ul>
										<li>Cyclistic: has more than 5800 bicycles and 600 docking stations, offers reclining bikes, hand tricycles, and cargo bikes, values diversity. 8% of riders use the assistive options. 30% use Cyclistic bikes to commute to work each day.</li>
										<li>Lily Moreno: the director of marketing and my manager</li>
										<li>Cyclistic marketing analytics team: the team I'm in, we collect, analyse, and report data that helps guide Cyclistic marketing strategy</li>
										<li>Cyclistic executive team: they will decide whether to approve the recommended marketing program</li>
									</ul>
									<h3>About the company</h3>
									<ul>
										<li>Current marketing strategy: build general awareness and appeal to broad consumer segments</li>
										<li>Flexible pricing plans: single-ride (casual rider), full-day (casual rider) and annual memberships (Cyclistic member)</li>
										<li>Due to the fact that annual members are much more profitable than casual riders, Moreno believes that the company's marketing strategy should shift from attracting all-new customers to converting casual riders into Cyclistic members.</li>
										<li>Casual riders are already familiar with their product, and have shown confidence in it.</li>
										<li>Goal: understand how casual riders and annual members differ, why casual riders would buy a membership, and how digital media could affect their marketing tactics</li>
										<li>Approach: analyse the Cyclistic historical bike trip data to identify trends</li>
									</ul>
								</div>

								<div id="ask">
									<h2>I. Ask - Business task</h2>
									<h3>1. The context</h3>
									<p>
										My stakeholders want to convert as many casual riders into Cyclistic members as possible.<br />
										My job is to identify the differences between casuals and members, specifically their behaviours when using the product.<br />
										Data at our disposal: Cyclistic historical bike trip data
									</p>
									<h3>2. Problem type</h3>
									<p>
										This is a identifying themes problem, since it is a user study, and the data we are focusing on is mainly user interaction data. We need to categorize things, identify themes, and prioritize the right product features for improvement so that we can convert more casuals into members.<br />
										User beliefs, user practices, and user needs are what we need to identify here.
									</p>
									<h3>3. SMART questions</h3>
									<p>
										<strong>Specific</strong>: what are the most/least used feature that members have but casuals don't?<br />
										<strong>Measurable</strong>: on average, how much time does a casual/member spend each day using Cyclistic? and how is that time distributed over different features of the product? how long does it usually take for a casual to decide to upgrade to member?<br />
										<strong>Action-oriented</strong>: what can we do to our current casual/member system to convert more casuals? how do we spot the casuals that are most likely to switch to member and how do we target them? offer a discount for accounts that have been created for a certain amount of time (e.g. 3 months)? offer a discount for every casual, even those who have only used our product once? move certain features from member only to casual friendly as well? improve existing member exclusive features to make membership more desirable?<br />
										<strong>Relevant</strong>: age group, profession, what are these factors' impact on a user's decision to choose membership over being a casual?<br />
										<strong>Time-bound</strong>: we use data between 202004 to 202103.
									</p>
									<h3>4. Business task</h3>
									<p>Analyse Cyclistic historical bike trip data over the course of 12 months to identify key behavioural differences between casual riders and Cyclistic members.</p>
								</div>

								<div id="prepare">
									<h2>II. Prepare - Data management</h2>
									<h3>1. Where is your data located?</h3>
									<p>The data is located in csv files. Each csv contains one month worth of data.</p>
									<h3>2. How is the data organized?</h3>
									<p>Each row of the table represents one single ride. Each ride has the following attributes documented: ride_id (id of the specific ride), rideable_type (type of the bike used for the ride), started_at (datetime the ride started at), ended_at (datetime the ride ended at), start_station_name (name of the station the ride started at), start_station_id (id of that station), end_station_name (name of the station the ride ended at), end_station_id (id of that station), start_lat (latitude the ride started at), start_lng (longitude the ride started at), end_lat (latitude the ride ended at), end_lng (longitude the ride ended at), member_casual (whether it is a member or a casual who took the ride).</p>
									<h3 id="subsection3">3. Are there issues with bias or credibility in this data? Does your data ROCCC?</h3>
									<p>No bias nor credibility issues, the data is first-party data (since Motivate International Inc. operates the City of Chicago???s Divvy bicycle sharing service, although the data belongs to the City of Chicago, it is gathered by Motivate using its own resources), and the data we will be focusing on would be the duration of each ride (we use started_at and ended_at to determine the duration) and rider type (member_casual), both are, in this case, purely objective data. For the time being, there are no observer bias nor interpretation bias nor confirmation bias, as to sampling bias, electric bikes were added from 202007 onwards, so for the first three months there were only docked bikes, and classic bikes were added from 202012 onwards. We need to keep those information in mind when analysing the data.</p>
									<p>
										<strong>Reliable</strong>: in several months, there are missing values in columns start_station_name, start_station_id, end_station_name, end_station_id. Those entries most likely represent bikes that were not properly parked into stations. Also, the format of latitude (as well as longitude) is inconsistent for properly parked and improperly parked bikes. For properly parked bikes, their latitude and longitude have up to 8 decimal places, for improperly parked bikes, only 2 decimal places.<br />
										<strong>Original</strong>: check.<br />
										<strong>Comprehensive</strong>: check. We mostly care about the data that are related to time and rider type, not geolocation information.<br />
										<strong>Current</strong>: check.<br />
										<strong>Cited</strong>: check.<br />
									</p>
									<h3>4. How are you addressing licensing, privacy, security, and accessibility?</h3>
									<p>We acquire the data through a public URL, there are no personally identifiable information stored in the csv files, one row's attributes provide and only provide information about that specific ride. These are basically open data provided you agree to the license agreement stated <a href="https://www.divvybikes.com/data-license-agreement" target="_blank" rel="noopener noreferrer">here</a>.</p>
									<h3 id="subsection5">5. How did you verify the data's integrity?</h3>
									<p>
										Duplicates: the only column where this would matter is ride_id, since for all the other columns, there can be explanations if duplicates are present.<br />
										I verify the columns rideable_type, member_casual for possible spelling errors, as rideable_type should only contain classic_bike, docked_bike, electric_bike, and member_casual should only contain member, casual.<br />
										I also verify whether the datetime data is well within that specific month documented in the file name. It turns out that for a given month, all the rides started at a certain time within that month, however, there are some rides that extended to the next month, a big percentage of those rides are due to the rider starting really late on the last day of the month, and then ended the ride at 1 or 2 o'clock in the morning of the following day. Nonetheless, the rest of those rides lasted longer, even for days, which is quite peculiar, we may have to figure out a way to deal with this when we calculate the duration of each ride.<br />
										As to geolocation related data, I decided to leave them untouched for now. They are not the primary focus of our analysis, and without further information, it is impossible to fill those blanks myself. Since there are too many reasons for the location data to not be documented, could be a deserted bike, or the rider forgot to park it, or even mechanical malfunction, etc...
									</p>
									<h3>6. How does it help you answer your question?</h3>
									<p>
										Checking for duplicates and misspellings help to eliminate bad data that could otherwise skew our entire analysis.<br />
										Verifying datetime consistency reveals problems that we need to deal with when performing analysis.
									</p>
									<h3>7. Are there any problems with the data?</h3>
									<p>See subsection <Link href="#subsection3"><a>3</a></Link> and <Link href="#subsection5"><a>5</a></Link>.</p>
									<h3>8. Data sources used</h3>
									<p>
										<a href="https://divvy-tripdata.s3.amazonaws.com/index.html" target="_blank" rel="noopener noreferrer">https://divvy-tripdata.s3.amazonaws.com/index.html</a><br />
										The data has been made available by <a href="https://www.motivateco.com/" target="_blank" rel="noopener noreferrer">Motivate International Inc.</a> under this <a href="https://www.divvybikes.com/data-license-agreement" target="_blank" rel="noopener noreferrer">license</a>.<br />
										The data is owned by the City of Chicago.
									</p>
								</div>

								<div id="process">
									<h2>III. Process - Data cleaning</h2>
									<h3>1. What tools are you choosing and why?</h3>
									<p>Microsoft Excel. Can't access BigQuery nor Google Sheets in China.</p>
									<h3>2. Have you ensured your data's integrity?</h3>
									<p>See <Link href="#subsection5"><a>II. 5</a></Link>.</p>
									<h3>3. What steps have you taken to ensure that your data is clean?</h3>
									<ul>
										<li>Delete all geolocation data as there are too many blanks across several months and it is impossible to fill them without further information as to why they were there in the first place.</li>
										<li>Create a column called ???ride_length???. Calculate the length of each ride by subtracting the column ???started_at??? from the column ???ended_at??? (for example, =D2-C2) and format as [h]:mm:ss.</li>
										<li>Filter out the "########"s.</li>
										<li>Create a column called ???day_of_week???, and calculate the day of the week that each ride started using the ???WEEKDAY??? command (for example, =WEEKDAY(C2,1)) in each file. Format as General or as a number with no decimals, noting that 1 = Sunday and 7 = Saturday.</li>
										<li>Verify the filter of "day_of_week" column and make sure there are only numbers from 1 to 7.</li>
										<li>Repeat the above steps for every month.</li>
									</ul>
									<h3>4. How can you verify that your data is clean and ready to analyse?</h3>
									<p>
										Verify each column's filters so that the data is properly formatted.<br />
										I also decide to not exclude data with a very very short/long "ride_length" to the point that it no longer makes sense, since first they may still give us some insight about casual/member behaviour, for example, who is more likely to forget that they need to properly park the bike? who is more likely to desert the bike? etc. Second, even if I were to exclude the data, what "ride_length" is a good cut-off point? if I exclude sub 30 sec rides, what about 31 sec rides? It is too ambiguous.
									</p>
									<h3>5. Have you documented your cleaning process so you can review and share those results?</h3>
									<p>Yes, and precisely in this document.</p>
								</div>

								<div id="analyse">
									<h2>IV. Analyse - Data analysis</h2>
									<h3>1. General calculations</h3>
									<ul>For each month, calculate:
										<li>the mean of ride_length</li>
										<li>the max of ride_length</li>
										<li>the mode of day_of_week</li>
									</ul>
									<ul>Observations:
										<li>the mean of ride_length stays around 35 minutes from April to July, it peaks in July at 38 minutes, then it goes down from there until January of the following year, where it reaches its yearly low at 15 minutes, it goes back up in February and March at about 23 minutes.</li>
										<li>the max of ride_length is ridiculously high (well above 24 hours) for every month.</li>
										<li>In 9 months out of 12, Saturday had the highest number of rides. In April, it was Sunday (Saturday was the second). In July, it was Friday (Saturday was the second). In December, it was Wednesday (Saturday was the sixth).</li>
									</ul>
									<h3>2. Member vs. casual calculations</h3>
									<ul>For each month, for member/casual, calculate:
										<li>the average ride_length</li>
										<li>the average ride_length by day_of_week</li>
										<li>the number of rides by day_of_week</li>
									</ul>
									<ul>Observations:
										<li>The average ride_length of casuals was generally 2 or 3 times longer than that of members.</li>
										<li>Both casuals and members tend to ride longer on weekends.</li>
										<li>Both casuals and members tend to ride more on weekends in terms of number of rides.</li>
										<li>In all 12 months, the total number of rides done by members was always higher than that of casuals. However, in the "high" months (when the total number of rides is at or around its yearly peak), the total number of rides completed by casuals came very close to that of members, even surpassed it on weekends in June, July, August and September; whereas in the "low" months, the total number of rides done by casuals is significantly lower than that of members, less than a half or even a third sometimes (less than a forth if we are talking about number of rides during weekdays).</li>
										<li>Generally speaking, casuals are more prone to seasonal changes, their monthly variation is higher than member's. Also, for members, the difference between the number of weekday and weekend rides is lower than for casual riders, who ride much more on weekends and much less on weekdays.</li>
									</ul>									
								</div>

								<div id="share">
									<h2>V. Share - Data visualization</h2>
									<h3>1. Preparation</h3>
									<ul>
										<li>Average duration of rides by months ??? trend, small change ??? line chart</li>
										<li>Number of rides by months ??? trend, big change ??? bar chart</li>
										<li>Average duration of rides by day of the week ??? bar chart with month filter</li>
										<li>Average number of rides by day of the week ??? bar chart with month filter</li>
									</ul>
									<h3>2. Visualization</h3>
									<p>
										Hosted on Tableau Public:<br />
										<a href="https://public.tableau.com/views/Casestudy1howdoesabike-sharenavigatespeedysuccessTrendbymonths/Averagedurationofridesbymonths?:language=zh-CN&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer">Case study 1: how does a bike-share navigate speedy success? Trend by months</a><br />
										<a href="https://public.tableau.com/views/Casestudy1howdoesabike-sharenavigatespeedysuccessTrendbydayoftheweek/Averagedurationofridesbydayoftheweek?:language=zh-CN&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer">Case study 1: how does a bike-share navigate speedy success? Trend by day of the week</a>
									</p>
									<h3>3. The story</h3>
									<p>
										The data comes from the city of Chicago in the northern hemisphere.<br />
										Over the course of 12 months, the average ride time for casuals is always longer than for members. However, for members, this metric is much more stable, as it stays within 13-21 minutes throughout the year with no major changes (the biggest change is a 5 minute increase from January 2021 to February 2021). The average ride time for casuals, on the other hand, ranges from 73 minutes in April 2020 to 26 minutes in January 2021, and it is not as consistent as for members. We can see a shift of 10-15 minutes or even 20 minutes between two consecutive months.<br />
										Moreover, the data suggests that as temperatures rise, people (both casuals and members) tend to ride more often, and they are less likely to ride in winter. However, the data shows that casuals are much more affected by cold weather, in the sense that during most winter months, casuals only complete about 20% of the total rides (which means that members are responsible for 80% of the rides), while when temperatures are high, almost 40-50% of the rides are done by casuals. Therefore, casuals' behaviour changes more drastically with the month, as opposed to some members who want to take advantage of their membership no matter how cold it is outside.<br />
										Looking at the average ride times by day of the week, we can see that casuals ride longer on weekends, although members also tend to ride longer on weekends, but they only ride 1 or 2 minutes longer than on weekdays. This trend is much clearer in the average number of rides chart, where casuals ride much more on weekends than on weekdays, and members' rides are more evenly distributed throughout the week. In addition, during the warmer months (in this case, June, July, August and September), casuals ride even more on weekends than members. Keep in mind that for the entire year, they ride much less on weekdays than members.
									</p>
								</div>

								<div id="act">
									<h2>VI. Act - Problem solving</h2>
									<h3>1. Conclusion</h3>
									<ul>Casuals and members differ in the following:
										<li>Casuals ride less often than members, but each ride lasts longer.</li>
										<li>Casuals' willingness to ride correlated more with changes in temperature, they rode more when temperatures rose, and less when temperature fell. Members followed the same trend, but there was little variation between months.</li>
										<li>Casuals prefer to ride on weekends (a tendency that is much stronger when temperatures are high), and members have no preference for weekdays or weekends.</li>
									</ul>
									<h3>2. Recommendations</h3>
									<ul>
										<li>Since casuals use Cyclistic bikes more often in summer and on weekends, they are more likely to consider upgrading to a membership at that time. Therefore, we could offer a small membership discount each weekend and when summer comes, we could offer a larger discount on weekends and a smaller discount on weekdays.</li>
										<li>We could also improve the membership system and add different tiers, such as weekend-only membership, monthly membership, seasonal membership, and finally annual membership. The price of membership for certain months and seasons should reflect the popularity of Cyclistic at that time.</li>
										<li>Finally, we could consider adjusting our allocation of advertising resources. We should spend more on advertising in summer and less in winter.</li>
									</ul>
									<h3>3. Limitations</h3>
									<ul>
										<li>The Coronavirus outbreak could have an impact on the data.</li>
										<li>There were some extremely short and extremely long rides that we did not exclude during the cleaning phase.</li>
										<li>We did not take into account the type of bike. A more detailed analysis is possible.</li>
									</ul>
								</div>

							</div>

						</section>
					
					</div>
				</div>
				
				<div id="sidebar">
					<div className="inner">
						<section id="search" className="alt">
							<form method="post" action="#">
								<input type="text" name="query" id="query" placeholder="Search" />
							</form>
						</section>
						
						<nav id="menu">
							<header className="major">
								<h2>Menu</h2>
							</header>
							<ul>
								<li>
									<Link href="/">
										<a>Home</a>
									</Link>
								</li>
								<li>
									<Link href="/posts/portfolio">
										<a>Portfolio</a>
									</Link>
								</li>
								<li>
									<Link href="/posts/reading">
										<a>Reading</a>
									</Link>
								</li>
								<li>
									<Link href="/posts/learning">
										<a>Learning</a>
									</Link>
								</li>
								<li>
									<Link href="/posts/songs">
										<a>Songs</a>
									</Link>
								</li>
								<li>
									<Link href="/posts/movies">
										<a>Movies</a>
									</Link>
								</li>
								<li>
									<Link href="/posts/tv shows">
										<a>TV shows</a>
									</Link>
								</li>
							</ul>
						</nav>
						
						<section>
							<header className="major">
								<h2>Get in touch</h2>
							</header>
							<p>What's on your mind?</p>
							<ul className="contact">
								<li className="icon solid fa-envelope"><a href="mailto:lifengzhan@hotmail.com">lifengzhan@hotmail.com</a></li>
							</ul>
						</section>
						
						<footer id="footer">
							<p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
						</footer>
					
					</div>
				</div>
			
			</div>
			
			
			<script src="js/jquery.min.js"></script>
			<script src="js/browser.min.js"></script>
			<script src="js/breakpoints.min.js"></script>
			<script src="js/util.js"></script>
			<script src="js/main.js"></script>
		
		</body>
		
	</div>
  )
}
