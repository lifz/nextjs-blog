import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (
	<div className="container">
		<Head>
			<title>Fengzhan Li</title>
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
									<h1>Hi, I'm Fengzhan</h1>
									<p>Imagine not having a blog in 2021</p>
								</header>
							</div>
						</section>
						
						<section>
							<header className="major">
								<h2>Here you can find</h2>
							</header>
							<div className="features">
								<article>
									<span className="icon solid fa-briefcase"></span>
									<div className="content">
										<h3>
											<Link href="/posts/portfolio">
												<a>My portfolio</a>
											</Link>
										</h3>
										<p>Case studies I have done using public datasets.</p>
									</div>
								</article>
								<article>
									<span className="icon solid fa-book"></span>
									<div className="content">
										<h3>
											<Link href="/posts/reading">
												<a>Books I read</a>
											</Link>
										</h3>
										<p>I summarize the books I found useful or interesting.</p>
									</div>
								</article>
								<article>
									<span className="icon solid fa-feather-alt"></span>
									<div className="content">
										<h3>
											<Link href="/posts/learning">
												<a>My notes</a>
											</Link>
										</h3>
										<p>I take notes on whatever I'm learning, be it online courses or self-study projects.</p>
									</div>
								</article>
								<article>
									<span className="icon solid fa-hand-spock"></span>
									<div className="content">
										<h3>And more...</h3>
										<p>I also share some of my favorite songs, movies and TV shows.</p>
									</div>
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
			
			
			<script src="/js/jquery.min.js"></script>
			<script src="/js/browser.min.js"></script>
			<script src="/js/breakpoints.min.js"></script>
			<script src="/js/util.js"></script>
			<script src="/js/main.js"></script>
		
		</body>
		
	</div>
  )
}
