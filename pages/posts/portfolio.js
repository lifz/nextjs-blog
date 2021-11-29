import Head from 'next/head'
import Link from 'next/link'

export default function Portfolio() {
	return (
	<div className="container">
		<Head>
			<title>Portfolio</title>
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
									<h1>Portfolio</h1>
								</header>
							</div>
						</section>
												
						<section>
							<div className="posts">
								<article>
									<h3>How does a bike-share navigate speedy success?</h3>
									<p>A bike-share company wants to convert more regular riders into annual members. I help the team come up with a solution by identifying key behavioural differences between casuals and members.</p>
									<ul className="actions">
										<li>
											<Link href="/posts/portfolio/how-does-a-bike-share-navigate-speedy-success">
												<a className="button">More</a>
											</Link>
										</li>
									</ul>
								</article>
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
